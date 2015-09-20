function setup() {
  createCanvas(600, 600);
  strokeCap(ROUND);
  // white background 
  background(255);
}

function draw() {
  for (var i = 0; i < 10; i++) {
    snowflake(random(width), random(height*0.8), random(10,80));
  }
  noLoop();
}

function snowflake(x, y, sSize) {
  var rLong = round(random(sSize*0.5, sSize));

  var rArmFir = round(rLong*random(0.2, 0.6));
  var rArmSec = round(rArmFir*random(0.3, 0.9));
  var rArmThi = round(rArmSec*random(0.1, 1.0));
  push();

  translate(x, y);

  noFill();
  stroke(random(0, 40), random(150, 220), random(150, 255));
  strokeWeight(random(sSize*0.025, sSize*0.05));

  // create a random number of (even) snowflake arms
  var arms = 2 * Math.floor(random(2,7));
  console.log(arms)

  for (var i = 0; i < arms; i++) {
    rotate( PI /( arms / 2 ));

    line(0, 0-rLong, 0, 0);

    //Top Arms Right
    line(0, 0-rArmFir, 0 + round(rArmFir*0.8), 0 - round(rArmFir*1.8));
    line(0, 0-rArmSec, 0 + round(rArmSec*0.8), 0 - round(rArmSec*1.8));
    line(0, 0-rArmThi, 0 + round(rArmThi*0.8), 0 - round(rArmThi*1.8));

    //Top Arms Left
    line(0, 0-rArmFir, 0 - round(rArmFir*0.8), 0 - round(rArmFir*1.8));
    line(0, 0-rArmSec, 0 - round(rArmSec*0.8), 0 - round(rArmSec*1.8));
    line(0, 0-rArmThi, 0 - round(rArmThi*0.8), 0 - round(rArmThi*1.8));
  }

  noStroke();

  pop();
}