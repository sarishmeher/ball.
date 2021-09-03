var ball ={x:10,y:20,r:30,xspeed:0,yspeed:0,color:["red","green","blue","yellow"]}
function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  circle(ball.x,ball.y,ball.r)
  fill(ball.color[3])
  ball.xspeed=1
  ball.x=ball.x+ball.xspeed
  ball.yspeed=2
  ball.y=ball.y+ball.yspeed
}