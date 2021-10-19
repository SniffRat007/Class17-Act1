var box1,box2
function setup() 
{
  createCanvas(400, 400);
  box1 = new Box(320,111,60,70,-1,2)
  box2 = new Box(220,11,70,90,1,1)
}

function draw() 
{
  background(220);
  fill ("teal")
box1.show()
fill ("magenta")
box2.show()
box1.move()
box1.moveup()
box2.move()
box2.moveup()
}

