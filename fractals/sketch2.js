/* 

Ed Hebert
ehebert@fas.harvard.edu
DIGM E599 - Capstone Studio

STEAM COOKER Capstone Project - http://steamcooker.org
"Nature's Math" Fractals Learning Module

Code inspired by "Stochastic Fractals" by Daniel Shiffman in his book, _Nature of Code_

*/


$(document).ready(function(){

  // $('#angle').on('change', function(){
  //   deg = $("#angle").val();
  //   $("#degNum").text(deg);
  //   rad = radians(deg);
  //   newTree();
  // });

});


// define canvas size and all global variables
function setup() {

  createCanvas(640, 360);

  // hue, saturation, and brightness mode
  colorMode(HSB, 255);

  // get input values from sliders

  // angle in degrees
  deg = $("#angle").val();
  $("#degNum").text(deg);

  // convert degrees to radians
  rad = radians(deg);

  // number of numBranches to draw
  numBranches = $("#branches").val();
  $("#branchNum").text(numBranches);

  newTree();
}

function draw() {
    // continuous game loop that runs indefinitely

    // check if assigned to be random (-1)
    if (deg != -1) {
      deg = $("#angle").val();
      $("#degNum").text(deg);
      rad = radians(deg);
      newTree();     
    }

    // check if assigned to be random (-1)
    if (numBranches != -1) {
      numBranches = $("#branches").val();
      $("#branchNum").text(numBranches);
    }

    branchSize = $("#branchSize").val();
    $("#branchSzNum").text(branchSize);

    color = $("#color").val();
    $("#colorVal").text(color);
}

// initialize the Tree

function newTree() {
  // white background in HSB
  background(0, 0, 255);

  // tree color assigned by slider (unless randomized)
  stroke(color, 255, 128);
  push();

  // Start the tree from the bottom of the screen
  translate(width/2, height);

  // Start the recursive branching!
  branch(120);
  pop();
}



function branch(h) {

  // thickness of the branch is mapped to its length
  var sw = map(h, 2, 120, 1, 20);

  // stroke the line with the mapped stroke weight
  strokeWeight(sw);

  // pick a random color for a branch each time its drawn
  // var r = random(0,255), g = random(0,255), b = random(0,255);

  // stroke(r,g,b);

  // Draw the actual branch
  line(0, 0, 0, -h);
 
  // Move along to end of branch
  translate(0, -h);

  // Each branch will be 2/3rds the size of the previous one
  h *= 0.66;

  // All recursive functions must have an exit condition!!!!
  // Here, ours is when the length of the branch is 5 pixels or less
  if (h > branchSize) {
    // A random number of numBranches
    // var n = Math.floor(random(2, 4));
    // var n = 2;

    // for (var i = 0; i < n; i++) {

      // Picking a random angle
      // var theta = random(-PI/3, PI/3);

      // push();      // Save the current state of transformation (i.e. where are we now)
      // rotate(-rad);     // Rotate by the angle input
      // branch(h);         // Ok, now call myself to branch again
      // // console.log(angle);
      // pop();       // Whenever we get back here, we "pop" in order to restore the previous matrix state

      // push();      // Save the current state of transformation (i.e. where are we now)
      // rotate(rad);     // Rotate by the angle input
      // branch(h);         // Ok, now call myself to branch again
      // pop();       // Whenever we get back here, we "pop" in order to restore the previous matrix state

      // loop for the number of numBranches
      for (var i = 0; i < numBranches; i++) {

        // calculate angle spacing depending on numBranches
        // this formula allows each branch to space equally
        var branchAngle = 2 * deg / (numBranches - 1);
        
        push();      // Save the current state of transformation (i.e. where are we now)
          rotate(radians(-deg + (branchAngle * i)));     // Rotate by the angle input
          branch(h);         // Ok, now call myself to branch again
        pop();       // Whenever we get back here, we "pop" in order to restore the previous matrix state

      }

    // }
  }
}
