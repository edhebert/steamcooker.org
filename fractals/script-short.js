/* 

Ed Hebert
ehebert@fas.harvard.edu
DIGM E599 - Capstone Studio

STEAM COOKER Capstone Project - http://steamcooker.org

SHORT SCRIPT - the 'short' 3 minute Fractal Lesson script
The JavaScript that controls all functionality between <video> and <canvas> events using Popcorn.js

*/


var shortScript = {
    popcorn: null,
    init: function() {
        // define the popcorn video
        var pop = Popcorn.smart("#videoClip", ["../assets/fractals-short.webm", "../assets/fractals-short.mp4"]);
        pop.autoplay(true);
        pop.on("canplayall", function(e) {
            main.prepareVideo();
        });
        pop.on("play", function(e) {
            $("#pauseButton").addClass("fa-pause");
            $("#pauseButton").removeClass("fa-play");
        });
        pop.on("pause", function(e) {
            $("#pauseButton").removeClass("fa-pause");
            $("#pauseButton").addClass("fa-play");
        });
        /**
         * Script
         */
        // set the stage
        pop.code({
            start: 0,
            onStart: function(options) {
                $('#loading').hide();
            }
        });
        // Snowflake
        pop.code({
            start: 5.167798,
            onStart: function(options) {
                main.sketch = new p5(snowflake, "sketchCanvas");
                //position tree relative to the video
                main.sketch.mainCanvas.position(-100, 0);
            }
        });
        // random flake # 1
        pop.code({
            start: 14.71659,
            onStart: function(options) {
                main.sketch.drawSnowflake(main.sketch.width / 2, main.sketch.height / 2, main.sketch.random(125, 175));
            }
        });
        // random flake # 2
        pop.code({
            start: 16.0,
            onStart: function(options) {
                main.sketch.drawSnowflake(main.sketch.width / 2, main.sketch.height / 2, main.sketch.random(125, 175));
            }
        });
        // random flake # 3
        pop.code({
            start: 17.551037,
            onStart: function(options) {
                main.sketch.drawSnowflake(main.sketch.width / 2, main.sketch.height / 2, main.sketch.random(125, 175));
            }
        });
        // fractal definition
        pop.code({
            start: 38.0,
            onStart: function(options) {
                // remove old snowflake sketch
                main.sketch.remove();
                $('#fractaltitle').fadeIn();
            }
        });
        // Images of Clouds, Mountains, and Trees
        // clouds
        pop.code({
            start: 47.299201,
            onStart: function(options) {
                // hide sidebar copy
                $('#fractaltitle').hide();
                $('#module').css({
                    'background-image': 'url(../img/fractals-clouds.jpg)'
                });
            }
        });
        // mountains
        pop.code({
            start: 49.008596,
            onStart: function(options) {
                $('#module').css({
                    'background-image': 'url(../img/fractals-mountains.jpg)'
                });
            }
        });
        // trees
        pop.code({
            start: 51.018562,
            onStart: function(options) {
                $('#module').css({
                    'background-image': 'url(../img/fractals-trees.jpg)'
                });
            }
        });
        // imagination
        pop.code({
            start: 59.5,
            onStart: function(options) {
                // hide sidebar copy
                // $('#fractaltitle').hide();
                $('#module').css({
                    'background-image': 'url(../img/logo.png)',
                    'background-repeat': 'no-repeat',
                    'background-position': 'center center',
                    'background-size': '400px'
                });
            }
        });
        // Tree
        pop.code({
            start: 71.0,
            onStart: function(options) {
                // clear background
                $('#module').css({
                    'background-image': 'none'
                });
                // position the tree on the canvas
                // var position = main.getRelativePosition({left:-400, top:600} );
                main.sketch = new p5(tree, "sketchCanvas");
                // allow mouse to control branch angle
                mouseAngle = true;
                main.sketch.mainCanvas.position(-200, 50);
                // set the initial branchSize value
                $('#branchSize').val(5);
            }
        });
        // display pseudocode for the fractal
        pop.code({
            start: 85,
            onStart: function(options) {
                $('#pseudocode').fadeIn();
                $('#line1, #line2, #line3, #line4, #line5, #line6, #line7, #line8, #line9').fadeIn();
            }
        });
        // deterministic function defined
        pop.code({
            start: 103,
            onStart: function(options) {
                $('#pseudocode').hide();
                $('#deterministic').fadeIn();
            }
        });
        // stochastic function defined
        pop.code({
            start: 119,
            onStart: function(options) {
                $('#stochastic').fadeIn();
            }
        });
        // stochastic tree #1
        pop.code({
            start: 124.206697,
            onStart: function(options) {
                main.sketch.isRandom = true;
                main.sketch.noLoop();
            }
        });
        // // stochastic tree #2
        pop.code({
            start: 125.7,
            onStart: function(options) {
                main.sketch.loop();
                main.sketch.noLoop();
            }
        });
        // // stochastic tree #3
        pop.code({
            start: 127.0,
            onStart: function(options) {
                main.sketch.loop();
                main.sketch.noLoop();
                $('#isRandom').bootstrapSwitch('state', true);
            }
        });
        // Show controls on the screen
        pop.code({
            start: 150.3,
            onStart: function(options) {
                // hide the definitions
                $('#deterministic').hide();
                $('#stochastic').hide();
                // toggle the random state
                main.sketch.isRandom = false;
                mouseAngle = false;
                $('#isRandom').bootstrapSwitch('state', false);
                // move the tree over a bit
                main.sketch.mainCanvas.position(-100, 50);
                // set the initial branchSize value
                $('#branchSize').val(15);
                // hide our pseudocode
                $('#pseudocode').hide();
                // fade in the tree adjustment Form
                $('#treeForm').fadeIn();
            }
        });
        // Slide the branch angle slider automatically
        pop.code({
            start: 152.4,
            onStart: function(options) {
                moveSlider = true;
            }
        });
        // Stop sliding automatically
        pop.code({
            start: 156.3,
            onStart: function(options) {
                moveSlider = false;
                $('#angle').val(29);
            }
        });
        // toggle the stochastic tree button on and off
        pop.code({
            start: 159.5,
            onStart: function(options) {
                $('#isRandom').bootstrapSwitch('state', true);
            }
        });
        pop.code({
            start: 163.5,
            onStart: function(options) {
                $('#isRandom').bootstrapSwitch('state', false);
            }
        });
        // highlight the 'save tree' button
        pop.code({
            start: 175,
            onStart: function(options) {
                // start blinking the $('#save') button
                $('#save').addClass('blinkbtn');
            }
        });
        pop.code({
            start: 179,
            onStart: function(options) {
                // stop blinking the $('#save') button
                $('#save').removeClass('blinkbtn');
            }
        });  

        pop.code({
            start: 186.2,
            onStart: function(options) {
                // fade out the video
                $('#videoCanvas').fadeOut();
                $('#pause').fadeOut();
            }
        });
        // Set external
        script.popcorn = pop;
    }
}