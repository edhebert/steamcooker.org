/* 

Ed Hebert
ehebert@fas.harvard.edu
DIGM E599 - Capstone Studio

STEAM COOKER Capstone Project - http://steamcooker.org
"Nature's Math" Fractals Learning Module

Code influenced by "Stochastic Fractals" by Daniel Shiffman in his book, _Nature of Code_

*/


// define canvas size and all global variables
function setup() {
  var test = createP('Click mouse to generate a new tree');
  test.position(10,372);

  createCanvas(640, 360);
  newTree();
}

function draw() {
  noLoop();
}

function mousePressed() {
  newTree();
  //redraw();
}

// initialize the Tree

function newTree() {
  // white background
  background(255);

  // the tree will be brown (unless randomized)
  stroke(91, 74, 32);
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
  var r = random(0,255), g = random(0,255), b = random(0,255);

  stroke(r,g,b);

  // Draw the actual branch
  line(0, 0, 0, -h);
 
  // Move along to end of branch
  translate(0, -h);

  // Each branch will be 2/3rds the size of the previous one
  h *= 0.66;

  // All recursive functions must have an exit condition!!!!
  // Here, ours is when the length of the branch is 5 pixels or less
  if (h > 5) {
    // A random number of branches
    var n = Math.floor(random(2, 4));

    for (var i = 0; i < n; i++) {

      // Picking a random angle
      var theta = random(-PI/3, PI/3);

      push();      // Save the current state of transformation (i.e. where are we now)
      rotate(theta);     // Rotate by theta
      branch(h);         // Ok, now call myself to branch again
      pop();       // Whenever we get back here, we "pop" in order to restore the previous matrix state
    }
  }
}
