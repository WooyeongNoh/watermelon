
let balls = [];


function setup() {
  createCanvas(200, 200); 
  
  
  for (let i=0; i<10; i++) {
    let c = color(random(25, 25), 10, 255);
    let x = new Walker(c, random([1, 2]));
    balls.push(x);
  }
  
  
}


function draw() {
  background(220, 10);

  for (let b of balls) {
    b.update();
    b.display();
    b.tick(mouseX, mouseY);
  }
}


