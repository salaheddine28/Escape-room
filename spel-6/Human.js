class Human {
  constructor() {
    this.r = 80;
    this.x = this.r;
    this.y = height - this.r;
    this.vy = 0; 
    this.gravity = 0.8;
    
  }

  jump() {
    
      this.vy = -14;
    
  }
  
  hits(projectile){
    let x1 = this.x + this.r * 0.5;
    let y1 = this.y + this.r * 0.5;
    let x2 = projectile.x + projectile.r * 0.5;
    let y2 = projectile.y + projectile.r * 0.5;
    return collideCircleCircle(x1, y1, this.r, x2, y2, projectile.r / 2);
  }
  


  move() {
    this.y += this.vy;
    this.vy += this.gravity;
    this.y = constrain(this.y, 0, height - this.r)
  }

  show() {
  image(hImg ,this.x, this.y, this.r, this.r);

}
}