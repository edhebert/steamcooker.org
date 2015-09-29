/* 

Ed Hebert
ehebert@fas.harvard.edu
DIGM E599 - Capstone Studio

STEAM COOKER Capstone Project - http://steamcooker.org

FRACTAL TREE 
A component of the "Nature's Math" Fractals Lesson

Code inspired by "Stochastic Fractals" by Daniel Shiffman in his book, _Nature of Code_

*/


var tree = function(sketch) {
    // degree tree variables
    var deg, rad, trunk, color, numBranches;

    // default tree building logic to nonRandom
    var isRandom = false;

    // define canvas size and all global variables
    sketch.setup = function() {

      // create a new html5 canvas
      sketch.createCanvas(800, 500);

      // hue, saturation, and brightness mode
      sketch.colorMode(sketch.HSB, 255);

      // angle in degrees
      deg = $("#angle").val();
      $("#degNum").text(deg);

      // convert degrees to radians
      rad = sketch.radians(deg);

      // number of numBranches to draw
      numBranches = $("#branches").val();
      $("#branchNum").text(numBranches);

      console.log("numBranches = " + numBranches);
    }

    sketch.draw = function() {
        // continuous game loop that runs indefinitely

        // check if assigned to be random
        if (!document.getElementById('isRandom').checked) {
          deg = $("#angle").val();
          $("#degNum").text(deg);
          rad = sketch.radians(deg); 
        }

        // begin a new tree
        sketch.newTree();  

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

    sketch.newTree = function() {
      // white background in HSB
      sketch.background(0, 0, 255);

      // tree color assigned by slider (unless randomized)
      sketch.stroke(color, 255, 185);
      sketch.push();

      // Start the tree from the bottom of the screen
      sketch.translate(sketch.width/2, sketch.height);

      // if random, let 'nature' decide the tree parameters!
      if(isRandom) {
        trunk = Math.floor(sketch.random(5, 30));
        branchSize = 2;
        sketch.stroke(Math.floor(sketch.random(0, 255)), 255, 128);
      }

      // Start the recursive branching!
      sketch.branch(170);
      sketch.pop();
    }



    sketch.branch = function(h) {

      // thickness of the branch is mapped to its length
      var sw = sketch.map(h, 2, 120, 1, trunk);

      // stroke the line with the mapped stroke weight
      sketch.strokeWeight(sw);


      // Draw the branch
      sketch.line(0, 0, 0, -h);
     
      // Move along to end of branch
      sketch.translate(0, -h);

      // Each branch will be 2/3rds the size of the previous one
      h *= 0.66;

      // All recursive functions must have an exit condition!!!!
      // Here, ours is when the length of the branch is 5 pixels or less
      if (h > branchSize) {

          // if random is selected, let nature decide
          if (isRandom) {
            numBranches = Math.floor(sketch.random(2, 4));
          }

          // loop for the number of numBranches
          for (var i = 0; i < numBranches; i++) {
                // calculate angle spacing depending on numBranches
                // this formula allows each branch to space equally
                var branchAngle = 2 * deg / (numBranches - 1);

                // save current matrix state
                sketch.push();      
                  if (isRandom) {
                    // rotate each branch arbitrarily
                    sketch.rotate(sketch.random(-Math.PI/3, Math.PI/3));           
                  } else {
                    // Rotate by the angle input
                    sketch.rotate(sketch.radians(-deg + (branchAngle * i)));     
                  }
                  // call 'branch' recursively
                  sketch.branch(h);
                // restore previous matrix state           
                sketch.pop();       
          }
      }
    }

  // convert "let nature decide" checkbox to a switch
  $("#isRandom").bootstrapSwitch({
    'labelText' : 'Let nature decide?',
    'offText' : 'NO',
    'onText' : 'YES',
    'onColor' : 'warning',
    'onSwitchChange' : function(){
        // if it's checked, disable slider inputs
        if ($(this).is(":checked")) {
          // assign global variable to randomize
          isRandom = true; 
          $( "input[type='range']" ).each(function(){
            $(this).prop('disabled', true);
            $('form').css('opacity','0.2');
          });
          sketch.noLoop();

        } else {

          isRandom = false;

          // enable all inputs and restore the animation loop
          $( "input[type='range']" ).each(function(){
            $(this).prop('disabled', false);
            $('form').css('opacity','1.0');
          });
          sketch.loop();
        }
    },
    'labelWidth' : '150'
  });


}

// instantiate the sketch and send it to the div with id "canvas"
var mySketch = new p5(tree, "canvas");

