/* 

Ed Hebert
ehebert@fas.harvard.edu
DIGM E599 - Capstone Studio

STEAM COOKER Capstone Project - http://steamcooker.org
"Nature's Math" Fractals Learning Module

Code inspired by "Stochastic Fractals" by Daniel Shiffman in his book, _Nature of Code_

*/


$(document).ready(function(){
  
  $('#isRandom').change(function(){
    // if it's checked, disable slider inputs
    if ($(this).is(":checked")) {
      // assign global variable to randomize
      isRandom = true; 
      $( "input[type='range']" ).each(function(){
        $(this).prop('disabled', true);
      });
      noLoop();

    } else {

      isRandom = false;

      // enable all inputs and restore the animation loop
      $( "input[type='range']" ).each(function(){
        $(this).prop('disabled', false);
      });
      loop();
    }
  });

});


// define canvas size and all global variables
function setup() {

  createCanvas(640, 360);

  // hue, saturation, and brightness mode
  colorMode(HSB, 255);

  // default logic to nonRandom
  isRandom = false; 

  // angle in degrees
  deg = $("#angle").val();
  $("#degNum").text(deg);

  // convert degrees to radians
  rad = radians(deg);

  // number of numBranches to draw
  numBranches = $("#branches").val();
  $("#branchNum").text(numBranches);

}

function draw() {
    // continuous game loop that runs indefinitely

    // check if assigned to be random
    if (!document.getElementById('isRandom').checked) {
      deg = $("#angle").val();
      $("#degNum").text(deg);
      rad = radians(deg); 
    }

    // begin a new tree
    newTree();  

    // check if assigned to be random (-1)
    if (numBranches != -1) {
      numBranches = $("#branches").val();
      $("#branchNum").text(numBranches);
    }

    branchSize = $("#branchSize").val();
    $("#branchSzNum").text(branchSize);

    color = $("#color").val();
    $("#colorVal").text(color);

    trunk = $("#trunk").val();
    $("#trunkNum").text(trunk);
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

  // if random, let 'nature' decide the tree parameters!
  if(isRandom) {
    trunk = Math.floor(random(5, 30));
    branchSize = 2;
    stroke(Math.floor(random(0, 255)), 255, 128);
  }

  // Start the recursive branching!
  branch(120);
  pop();
}



function branch(h) {

  // thickness of the branch is mapped to its length
  var sw = map(h, 2, 120, 1, trunk);

  // stroke the line with the mapped stroke weight
  strokeWeight(sw);


  // Draw the branch
  line(0, 0, 0, -h);
 
  // Move along to end of branch
  translate(0, -h);

  // Each branch will be 2/3rds the size of the previous one
  h *= 0.66;

  // All recursive functions must have an exit condition!!!!
  // Here, ours is when the length of the branch is 5 pixels or less
  if (h > branchSize) {

      // if random is selected, let nature decide
      if (isRandom) {
        numBranches = Math.floor(random(2, 4));
      }

      // loop for the number of numBranches
      for (var i = 0; i < numBranches; i++) {

        // calculate angle spacing depending on numBranches
        // this formula allows each branch to space equally
        var branchAngle = 2 * deg / (numBranches - 1);
        
        // save current matrix state
        push();      
          if (isRandom) {
            // rotate each branch arbitrarily
            rotate(random(-PI/3, PI/3));           
          } else {
            // Rotate by the angle input
            rotate(radians(-deg + (branchAngle * i)));     
          }
          // call 'branch' recursively
          branch(h);
        // restore previous matrix state           
        pop();       

      }

    // }
  }
}
