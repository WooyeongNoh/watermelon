
let balls = [];


function setup() {
  createCanvas(windowWidth, windowHeight); 
  
  
  for (let i=0; i<10; i++) {
    let c = color(random(25, 25), 10, 1);
    let x = new Walker(c, random([1, 2]));
    balls.push(x);
  }
  
  
}


function draw() {
  background(255, 8);
  

  for (let b of balls) {
    b.update();
    b.display();
    b.tick(mouseX, mouseY);
  }
}


