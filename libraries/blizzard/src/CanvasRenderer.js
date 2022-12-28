export default class CanvasRenderer {
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
