//The setup function only happens once
var spark=0

let yPos=0

function setup() {
	createCanvas(500, 500); //create a 500px X 500px canvas
  frameRate(30);
}

//The draw function happens over and over again
function draw() {
  background(64,mouseX,119); //an RGB color for the canvas' background
  //circle
  stroke(255,255,127) // an RGB color for the circle's border
  strokeWeight(6)
  fill(255,4,20,127); // an RGB color for the inside of the circle (the last number refers to transparency (min. 0, max. 255))
  ellipse(250,250,spark,spark); // center of canvas, 20px dia
  
  fill(120,spark,60,127);
  stroke(8,1,135);
  strokeWeight(5);
  rect(spark,200,30,100);

  stroke(241, 247, 45);
  yPos=yPos - 1
  if (yPos < 0) {
    yPos = height;
  }
  line(0, yPos, width, yPos);
}

function mousePressed() {
  if (spark>= 150) {
    spark=0;
  } else {
  spark=spark + 3;
  }

}
