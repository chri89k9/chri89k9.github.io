let bB= 70

function setup() {
  
  createCanvas(600, 400);

}

function draw() {
  background(0, 150, 255);

  bB=bB + 1
 



  fill(0, 255, 0)

  rect(-1, 300, 601, 101)
  fill(255, 255, 255)

  fill(255, 165, 140)
  strokeWeight(4)
  line(bB, 150, bB - 60, 230) //LeftArm
  line(bB, 150, bB + 60, 230) //RightArm
  line(bB, 136, bB, 250) //Body
  line(bB, 250, bB - 50, 360) //LeftLeg
  line(bB, 250, bB + 50, 360) //RightLeg
  circle(bB, 100, 70); //Head
  curve(bB + 80, -80, bB + 15, 110, bB - 20, 110, bB, 120) //Mouth
  strokeWeight(2)
  fill(255, 255, 255)
  circle(bB - 10, 90, 13) //LeftEye
  circle(bB + 10, 90, 13) //RightEye
  strokeWeight(4)
  stroke(0, 0, 255)
  point(bB - 10, 90) //LeftPupil
  point(bB + 10, 90) //RightPupil
  stroke(0, 0, 0)
}
