let cx = 0;
let hastighed = 2;
let diameter = 50;
let cz = 0;
function setup() {
    createCanvas(600, 600);
}
function draw() {
    background(220);
    circle(cx, 300, diameter);
    circle(300, cz, diameter)

    if (cx > width - diameter / 2) {
        hastighed = -2
    }
    if (cx < 0 + diameter / 2) {
        hastighed = 2
    }
    cx = cx + hastighed
    if (cz > height + diameter / 2) {
        hastighed = -2
    }
    if (cz < 0 - diameter / 2) {
        hastighed = 2
    }
    cz = cz + hastighed

}