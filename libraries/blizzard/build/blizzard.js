window.Blizzard = (function () {
  'use strict';

  class Snowflake {
    constructor(options) {
      // Crucial values
      this.random = Math.random();
      this.startX = Math.floor(Math.random() * window.innerWidth);
      // User settings
      this.respawn = options.respawn || 2;
      this.fallSpeed = (options.fallSpeed || 0.5) + Math.random(); // px/sec
      this.movement = (options.movement || 20) + this.random * 40; // x sine intensity
      // Position determiners
      this.pos = {
        x: null,
        // Random Y position above the top of the screen
        y: -this.random * (window.innerHeight * this.respawn),
        // from 0 to 10
        z: Math.round(Math.random() * 10),
      };
    }

    update(tick) {
      // fall
      this.pos.y += this.fallSpeed;
      // oscillate
      let speed = 30 + this.random * 30;
      let oscillation = Math.sin(tick / (speed + this.random * 300));
      // console.log(this.pos.z,oscillation.toFixed(3),Math.round(this.movement),Math.round(oscillation*this.movement))
      this.pos.x = this.startX + oscillation * this.movement;
      // respawning behaviour
      if (this.pos.y > window.innerHeight * this.respawn)
        this.pos.y = -this.random * (window.innerHeight * this.respawn);
    }
  }

  class CanvasRenderer {
    constructor(canvas, options) {
      this.canvas = canvas;
      this.ctx = this.canvas.getContext("2d");
      this.options = options;
    }

    render(snowflakes, tick) {
      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
      for (const snowflake of snowflakes) {
        snowflake.update(tick);
        if (snowflake.pos.y < -10 || snowflake.pos.y > window.innerHeight + 10) continue;

        this.circle(
          snowflake.pos.x,
          snowflake.pos.y,
          (snowflake.pos.z / 3) * this.options.size + 1,
          `hsla(0, 20%, 100%, ${snowflake.pos.z / 10}`,
          Math.abs(
            (snowflake.pos.z - this.options.focus) *
              (1 - (this.options.fStop || 0.5))
          ).toFixed(1)
        );
      }
    }

    circle(x, y, rad, color, blur) {
      this.ctx.filter = blur > 1 ? `blur(${blur}px)` : ``;
      this.ctx.beginPath();
      this.ctx.fillStyle = color;
      this.ctx.arc(x, y, rad, 0, Math.PI * 2);
      this.ctx.fill();
      this.ctx.filter = ``;
    }
  }

  class Blizzard {
    constructor(canvas, options) {
      options.respawn ??= options.fStop ??= options.size ??= 1;

      this.renderer = new CanvasRenderer(canvas, options);

      this.snowflakes = [];
      for (let i = 0; i < options.amount * options.respawn; i++)
        this.snowflakes.push(new Snowflake(options));

      this.tick = 0;
      this.playing = false;

      return this;
    }

    play() {
      this.playing = true;
      this.frame();
      return this;
    }

    pause() {
      this.playing = false;
      return this;
    }

    frame() {
      if (!this.playing) return;
      this.tick++;
      this.renderer.render(this.snowflakes, this.tick);
      window.requestAnimationFrame(this.frame.bind(this));
    }
  }

  return Blizzard;
})();
