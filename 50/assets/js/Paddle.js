class Paddle {
  constructor(half) {
    this.half = half;
    this.cx = width * 0.5;
    this.cy = height * 0.5;
    this.w = 10;
    this.h = 50;
    this.color = color(0, 0, 0);
  }

  show() {
    push();
    translate(this.cx, this.cy);
    rectMode(CENTER);
    fill(this.color);
    rect(0, 0, this.w, this.h);
    pop();
  }
}
