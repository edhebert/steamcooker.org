/* 

Ed Hebert
ehebert@fas.harvard.edu
DIGM E599 - Capstone Studio

STEAM COOKER Capstone Project - http://steamcooker.org

SNOWFLAKE 

A illustrative component for the "Nature's Math" Fractals Lesson

Snowflake concept inspired by "Holiday Wrapping Paper" by Jain7th on Github. 
https://github.com/jain7th/Processing-Tree-and-Snowflake-Generator

*/


var snowflake = function(sketch) {

    sketch.setup = function() {
        sketch.mainCanvas = sketch.createCanvas(160, 160);

        // center the snowflake drawing within the canvas
        sketch.rectMode(sketch.CENTER);
        // round off the ends of strokes
        sketch.strokeCap(sketch.ROUND);

    sketch.mainCanvas.mousePressed(function(){
        //draw another random snowflake each time the mouse is pressed
        sketch.drawSnowflake(sketch.width/2, sketch.height/2, sketch.random(20,80));
    }); 


    }

    sketch.draw = function() {
        // draw a random snowflake in the middle of the screen, from a radius of 10 to 80 pixels across
        sketch.drawSnowflake(sketch.width/2, sketch.height/2, sketch.random(20,80));

        // draw only one snowflake - don't keep looping
        sketch.noLoop();
    }

    sketch.drawSnowflake = function(x, y, sSize) {
        // white background 
        sketch.background(255);

        // determine the length of the long (longitudinal) arms of the flake 
        var rLong = sketch.round(sketch.random(sSize*0.5, sSize));

        // determine the length of three arms that will extend from the longitudinal arm
        var rArmFir = sketch.round(rLong*sketch.random(0.2, 0.6));
        var rArmSec = sketch.round(rArmFir*sketch.random(0.3, 0.9));
        var rArmThi = sketch.round(rArmSec*sketch.random(0.1, 1.0));

        sketch.push();

            // move to the x,y location to begin drawing
            sketch.translate(x, y);

            sketch.noFill();

            // choose a blue-green random color
            sketch.stroke(sketch.random(0, 40), sketch.random(150, 220), sketch.random(150, 255));
            // weight the snowflake stroke randomly based on its size
            sketch.strokeWeight(sketch.random(sSize*0.025, sSize*0.05));

            // create a random number of (even) snowflake arms from 4 to 14
            var arms = 2 * Math.floor(sketch.random(2,7));

            // draw each of the arms of the snowflake
            for (var i = 0; i < arms; i++) {
                sketch.rotate( sketch.PI /( arms / 2 ));

                // draw the long axis of the snowflake arm
                sketch.line(0, 0-rLong, 0, 0);

                //Top Arms Right
                sketch.line(0, 0-rArmFir, 0 + sketch.round(rArmFir*0.8), 0 - sketch.round(rArmFir*1.8));
                sketch.line(0, 0-rArmSec, 0 + sketch.round(rArmSec*0.8), 0 - sketch.round(rArmSec*1.8));
                sketch.line(0, 0-rArmThi, 0 + sketch.round(rArmThi*0.8), 0 - sketch.round(rArmThi*1.8));

                //Top Arms Left
                sketch.line(0, 0-rArmFir, 0 - sketch.round(rArmFir*0.8), 0 - sketch.round(rArmFir*1.8));
                sketch.line(0, 0-rArmSec, 0 - sketch.round(rArmSec*0.8), 0 - sketch.round(rArmSec*1.8));
                sketch.line(0, 0-rArmThi, 0 - sketch.round(rArmThi*0.8), 0 - sketch.round(rArmThi*1.8));
            }
        sketch.pop();
    }
}

