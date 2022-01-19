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

var cubicBezier = function() {
    "use strict";
    var r = function(r, n, e, t) {
        var u = 3 * r,
            i = 3 * (e - r) - u,
            a = 1 - u - i,
            f = 3 * n,
            c = 3 * (t - n) - f,
            o = 1 - f - c,
            s = function(r) {
                return ((a * r + i) * r + u) * r
            },
            b = function(r, n) {
                return e = function(r, n) {
                    var e, t, f, c, o, b, v;
                    for (f = r, b = 0; b < 8; b++) {
                        if (c = s(f) - r, Math.abs(c) < n) return f;
                        if (o = (3 * a * (v = f) + 2 * i) * v + u, Math.abs(o) < 1e-6) break;
                        f -= c / o
                    }
                    if ((f = r) < (e = 0)) return e;
                    if (f > (t = 1)) return t;
                    for (; e < t;) {
                        if (c = s(f), Math.abs(c - r) < n) return f;
                        r > c ? e = f : t = f, f = .5 * (t - e) + e
                    }
                    return f
                }(r, n), ((o * e + c) * e + f) * e;
                var e
            };
        return function(r, n) {
            return b(r, function(r) {
                return 1 / (200 * r)
            }(+n || 400))
        }
    };
    return function(obj) {
        return r(obj.points[0], obj.points[1], obj.points[2], obj.points[3])(obj.toEase, obj.a)
    }
}();
