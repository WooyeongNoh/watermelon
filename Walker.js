
class Walker {
  //setup values
  constructor(aColor, moveType) {
  	this.x = width/2;
  	this.y = height/2;
  	this.w = 2;
    this.c = aColor; 
    this.mt = moveType; // 1, 2
  }
  
  update() {

    if (this.mt == 1) this.move1();
    if (this.mt == 2) this.move2();

  }
  
  tick(mx, my) {
    let d = dist(this.x, this.y, mx, my);
    if (d < this.w) {
      this.c = 0;
    }
  }
  
  move1() {
    this.x = this.x + random(-5, 5);
  	this.y = this.y + random(-5, 5);  
  }
  
  move2() {
    let p = random();
    if (p < 0.25) {
      this.x = this.x + 4;
    } else if (p < 0.5) {
      this.x = this.x - 4;
    } else if (p < 0.75) {
      this.y = this.y + 4;
    } else {
      this.y = this.y - 4;
    }
  }
  
  display() {
    //display walker
    fill(this.c);
	ellipse(this.x, this.y, this.w);
  }
}