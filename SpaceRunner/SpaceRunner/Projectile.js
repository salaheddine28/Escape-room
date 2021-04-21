class Projectile {
  
  constructor() {
    this.r = 120;
    this.x = width;
    this.y = height - (this.r + 50);
  }
  
  move() {
    this.x -= 5;
  }
  
  show() {
    image(pImg, this.x, this.y, this.r, this.r )
  }
  
}