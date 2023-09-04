export class Circle {
  x: number;
  y: number;
  r: number;
  color?: string;

  constructor(x: number, y: number, r: number, color?: string) {
    this.x = x;
    this.y = y;
    this.r = r;
    this.color = color;
  }

  draw(c: CanvasRenderingContext2D) {
    c.beginPath();
    c.arc(this.x, this.y, this.r, 0, 2 * Math.PI);
    c.fillStyle = this.color || 'White';
    c.fill();
    c.closePath();
  }

  update(x: number, y: number) {
    this.x = x;
    this.y = y;
  }
};
