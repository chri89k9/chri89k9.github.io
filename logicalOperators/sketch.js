function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  line(width/2, 0, width/2, height);
  line(0, height/2, height, height/2);
  line(0, 0, width, 0);
  line(0, 0, 0, height);
  line(0, height, width, height);
  line(width, 0, width, height);
  circle(mouseX, mouseY, 50);
  
  //Feltet øverst til venstre
  if(mouseX<=width/2||mouseY<=height/2){
    fill(255, 255, 255)
    }
    //Feltet øverst til højre
    if(mouseX>=width/2&&mouseY<=height/2){
    fill(255,0,0)
    }
    //Feltet nederst til venstre
    if(!mouseX>=width/2||mouseY>=height/2){
      fill(255,0,0)
    }
    //Feltet nederst til højre
    if(mouseX>=width/2&&mouseY>=height/2){
      fill(255,255,255)
    }
  }
