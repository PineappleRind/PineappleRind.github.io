import Snowflake from "./Snowflake.js";
import CanvasRenderer from "./CanvasRenderer.js";

export default class Blizzard {
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
