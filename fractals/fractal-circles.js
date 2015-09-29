/* Recursive Circles

    Ed Hebert
    ehebert@fas.harvard.edu

    A simple function to visually illustrate how recursion works

*/

var circle = function(sketch) {

    var minSize = 500;

    sketch.setup = function(){
        sketch.createCanvas(600, 600);
        // white background 
        sketch.background(255);
    }

    sketch.draw = function(){
        // start with a circle 500 pixels across
        sketch.drawCircle(sketch.width/2, sketch.height/2, 500);
        // sketch.noLoop();
    }


    sketch.drawCircle = function(x, y, size){
        // draw circle
        sketch.push();  
            // create circle and color based on the size
            sketch.fill(100 , 255 - (size / 3) , 255 - (size / 3));
            sketch.noStroke();
            sketch.ellipse(x, y, size, size); 

            // output the size of the circle to canvas
            sketch.fill(255, 134, 64);
            sketch.textSize(16);
            // center the text in the middle of the circle
            sketch.textAlign(sketch.CENTER, sketch.CENTER);
            sketch.text(minSize + " pixels", x, y)
        sketch.pop();  

      // We will exit our recurvise function when the size of the circle dips below 100 pixels
        if(size > minSize)
        {
            // reduce the radius of each subsequent circle by 100 pixels
            sketch.drawCircle(x, y, size - 100);
        }
    }

    sketch.mouseClicked = function() {
        if (minSize > 100) {
            minSize -= 100;
            console.log("subtracted. value is now " + minSize);
        }
        else {
            // reset the circle back to its biggest size
            minSize = 500;
        }
    }
}

// instantiate the sketch
var mySketch = new p5(circle);
