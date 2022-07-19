var balls={
  x:20,
  y:20,
  r:30,
  xspeed:0,
  yspeed:0,
  color:["blue","red","green","navy_blue","yellow"],
}
function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  circle(balls.x,balls.y,balls.r);
  fill(balls.color[0]);
  balls.xspeed=1.5;
  balls.x=balls.x+balls.xspeed;
}
