let cx=0;

function setup() {
  createCanvas(600, 600);
}

function draw() {
  background(220);
circle(cx, 300, 50);

cx=cx+2;

if (cx=width) {
  cx=cx-1
}


}