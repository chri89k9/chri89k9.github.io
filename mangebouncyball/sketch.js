function setup() {
  createCanvas(600, 600);
  const xSpeed = [random(1, 10), random(100)]
  const ySpeed = [2, -4]
}

let d = Math.floor(Math.random() * 101) + 51;
// let xKoordinat = Math.floor(Math.random()*((801-d)-1)+d/2);
// let yKoordinat = Math.floor(Math.random()*((801-d)-1)+d/2);
let xKoordinater = [Math.floor(Math.random() * 500+30), Math.floor(Math.random() * 450+40)]
let yKoordinater = [Math.floor(Math.random() * 500+30), Math.floor(Math.random() * 500+30)]
let xSpeed = [Math.floor(Math.random() * 7+1), Math.floor(Math.random() * 10+1)]
let ySpeed = [Math.floor(Math.random() * 12+2), -Math.floor(Math.random() * 15+4)]
let rød = Math.floor(Math.random() * 256);
let grøn = Math.floor(Math.random() * 256);
let blå = Math.floor(Math.random() * 256);
let antalBolde = xKoordinater.length;
// var bold = ["bold1","bold2","bold3","bold4"];

function draw() {
  background(220);



  for (let i = 0; i < antalBolde; i++) {
    if (xKoordinater[i] > width - d / 2 || xKoordinater[i] < 0 + d / 2) {
      xSpeed[i] = -xSpeed[i];
    }

    if (yKoordinater[i] > height - d / 2 || yKoordinater[i] < 0 + d / 2) {
      ySpeed[i] = -ySpeed[i];
    }

    xKoordinater[i] = xKoordinater[i] + xSpeed[i];
    yKoordinater[i] = yKoordinater[i] + ySpeed[i];
  }

  for (let i = 0; i < antalBolde; i++) {
    circle(xKoordinater[i], yKoordinater[i], d);
    fill(rød, grøn, blå)
  }
}
