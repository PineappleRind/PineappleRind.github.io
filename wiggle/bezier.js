/*
 * Copyright (C) 2008 Apple Inc. All Rights Reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions
 * are met:
 * 1. Redistributions of source code must retain the above copyright
 *    notice, this list of conditions and the following disclaimer.
 * 2. Redistributions in binary form must reproduce the above copyright
 *    notice, this list of conditions and the following disclaimer in the
 *    documentation and/or other materials provided with the distribution.
 *
 * THIS SOFTWARE IS PROVIDED BY APPLE INC. ``AS IS'' AND ANY
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
 * IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR
 * PURPOSE ARE DISCLAIMED.  IN NO EVENT SHALL APPLE INC. OR
 * CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
 * EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO,
 * PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR
 * PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY
 * OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
 * (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
 * OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */


const CUBIC_BEZIER_SPLINE_SAMPLES = 11;
const kBezierEpsilon = 1e-7;
const kMaxNewtonIterations = 4;

class UnitBezier {
  constructor(p1x, p1y, p2x, p2y) {
    // Calculate the polynomial coefficients, implicit first and last
    // control points are (0,0) and (1,1).
    this.cx = 3 * p1x;
    this.bx = 3 * (p2x - p1x) - this.cx;
    this.ax = 1 - this.cx - this.bx;

    this.cy = 3 * p1y;
    this.by = 3 * (p2y - p1y) - this.cy;
    this.ay = 1 - this.cy - this.by;


    // End-point gradients are used to calculate timing function results
    // outside the range [0, 1].
    //
    // There are four possibilities for the gradient at each end:
    // (1) the closest control point is not horizontally coincident with regard to
    //     (0, 0) or (1, 1). In this case the line between the end point and
    //     the control point is tangent to the bezier at the end point.
    // (2) the closest control point is coincident with the end point. In
    //     this case the line between the end point and the far control
    //     point is tangent to the bezier at the end point.
    // (3) both internal control points are coincident with an endpoint. There
    //     are two special case that fall into this category:
    //     CubicBezier(0, 0, 0, 0) and CubicBezier(1, 1, 1, 1). Both are
    //     equivalent to linear.
    // (4) the closest control point is horizontally coincident with the end
    //     point, but vertically distinct. In this case the gradient at the
    //     end point is Infinite. However, this causes issues when
    //     interpolating. As a result, we break down to a simple case of
    //     0 gradient under these conditions.
    if (p1x > 0)
      this.startGradient = p1y / p1x;
    else if (!p1y && p2x > 0)
      this.startGradient = p2y / p2x;
    else if (!p1y && !p2y)
      this.startGradient = 1;
    else
      this.startGradient = 0;
    if (p2x < 1)
      this.endGradient = (p2y - 1) / (p2x - 1);
    else if (p2y == 1 && p1x < 1)
      this.endGradient = (p1y - 1) / (p1x - 1);
    else if (p2y == 1 && p1y == 1)
      this.endGradient = 1;
    else
      this.endGradient = 0;

    this.deltaT = 1.0 / (CUBIC_BEZIER_SPLINE_SAMPLES - 1);
    this.splineSamples = [];
    for (let i = 0; i < CUBIC_BEZIER_SPLINE_SAMPLES; i++)
      this.splineSamples[i] = this.sampleCurveX(i * this.deltaT);
  }

  sampleCurveX(t) {
    // `ax t^3 + bx t^2 + cx t' expanded using Horner's rule.
    return ((this.ax * t + this.bx) * t + this.cx) * t;
  }

  sampleCurveY(t) {
    return ((this.ay * t + this.by) * t + this.cy) * t;
  }

  sampleCurveDerivativeX(t) {
    return (3 * this.ax * t + 2 * this.bx) * t + this.cx;
  }

  // Given an x value, find a parametric value it came from.
  solveCurveX(x, epsilon) {
    let t0 = 0, t1 = 0, t2 = x, x2 = 0, d2 = 0, i = 0;

    // Linear interpolation of spline curve for initial guess.
    for (i = 1; i < CUBIC_BEZIER_SPLINE_SAMPLES; i++) {
      if (x <= this.splineSamples[i]) {
        t1 = this.deltaT * i;
        t0 = t1 - this.deltaT;
        t2 = t0 + (t1 - t0) * (x - this.splineSamples[i - 1]) / (this.splineSamples[i] - this.splineSamples[i - 1]);
        break;
      }
    }

    // Perform a few iterations of Newton's method -- normally very fast.
    // See https://en.wikipedia.org/wiki/Newton%27s_method.
    let newtonEpsilon = Math.min(kBezierEpsilon, epsilon);
    for (i = 0; i < kMaxNewtonIterations; i++) {
      x2 = this.sampleCurveX(t2) - x;
      if (Math.abs(x2) < newtonEpsilon)
        return t2;
      d2 = this.sampleCurveDerivativeX(t2);
      if (Math.abs(d2) < kBezierEpsilon)
        break;
      t2 = t2 - x2 / d2;
    }
    if (Math.abs(x2) < epsilon)
      return t2;

    // Fall back to the bisection method for reliability.
    while (t0 < t1) {
      x2 = this.sampleCurveX(t2);
      if (Math.abs(x2 - x) < epsilon)
        return t2;
      if (x > x2)
        t0 = t2;
      else
        t1 = t2;
      t2 = (t1 + t0) * .5;
    }

    // Failure.
    return t2;
  }

  solve(x, epsilon) {
    if (x < 0.0)
      return 0.0 + this.startGradient * x;
    if (x > 1.0)
      return 1.0 + this.endGradient * (x - 1.0);
    return this.sampleCurveY(this.solveCurveX(x, epsilon));
  }
}
