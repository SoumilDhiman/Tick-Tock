var hr
var min
var sec
var hourAngle,minuteAngle,SecondAngle;

function setup() {
  createCanvas(800,400);
  
}

function draw() {
  background("black");  
translate(200,200)
rotate(-90)
  hr=hour()
  min=minute()
  sec=second()
   SecondAngle = map(sec,0,60,0,360)
   hourAngle = map(hr%12,0,12,0,360)
   minuteAngle = map(min,0,60,0,360)
   //second hand
   push()
   rotate(SecondAngle)
   stroke("red")
   strokeWeight(6)
   line(0,0,100,0)
   pop()
   //minute hand
   push()
   rotate(minuteAngle)
   stroke("green")
   strokeWeight(6)
   line(0,0,80,0)
   pop()
   //hour hand
   push()
   rotate(hourAngle)
   stroke("blue")
   strokeWeight(6)
   line(0,0,60,0)
   pop()

   stroke(255,0,255)
   point(0,0)
   strokeWeight(10)
   noFill()
   stroke("blue")
   arc(0,0,260,260,0,hourAngle)
   stroke("green")
   arc(0,0,280,280,0,minuteAngle)
   stroke("red")
   arc(0,0,300,300,0,SecondAngle)

  drawSprites();
}