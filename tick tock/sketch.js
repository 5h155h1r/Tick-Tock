var hr, mn, sc;
var scAngle, mnAngle, hrAngle;

function setup() {
  createCanvas(800,400);
  angleMode(DEGREES);
  background("black")

}

function draw() {
  background(255,255,255);  
  drawSprites();
  hr = hour();
  mn = minute();
  sc = second();
  console.log(sc)
  translate(200, 200);
  rotate(-90)
  scAngle = map(sc, 0, 60, 0, 360)
  mnAngle = map(mn, 0, 60, 0, 360)
  hrAngle = map(hr  %12, 0, 12, 0, 360)
  push();
  rotate(scAngle)
 
  stroke(255, 0, 0);
  strokeWeight(7);
  line(0, 0, 100, 0)
  pop();
  push();
  rotate(mnAngle)
  stroke(255, 255, 0);
  strokeWeight(7);
  line(0, 0, 100, 0)
  pop();
  push();
  rotate(hrAngle)
  stroke("green");
  strokeWeight(7);
  line(0, 0, 100, 0)
  pop();

  
}