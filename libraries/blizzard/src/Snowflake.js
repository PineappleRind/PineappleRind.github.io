export default class Snowflake {
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
