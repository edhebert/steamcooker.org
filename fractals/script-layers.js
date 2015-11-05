/* 

Ed Hebert
ehebert@fas.harvard.edu
DIGM E599 - Capstone Studio

STEAM COOKER Capstone Project - http://steamcooker.org

LONG SCRIPT - the 'long' 8 minute Fractal Lesson script
The JavaScript that controls all functionality between <video> and <canvas> events using Popcorn.js

*/

var script = {
    popcorn: null,
    init: function() {
        // define the popcorn video
        var pop = Popcorn.smart("#videoClip", ["../assets/fractals-nopixels.webm", "../assets/fractals-nopixels.mp4"]);
        pop.autoplay(false);
        pop.on("canplayall", function(e) {
            main.prepareVideo();
        });
        pop.on("play", function(e) {
            $("#pauseButton").addClass("fa-pause");
            $("#pauseButton").removeClass("fa-play");
            isPaused = false;
            interval = setInterval(rotator(), 20);
        });
        pop.on("pause", function(e) {
            $("#pauseButton").removeClass("fa-pause");
            $("#pauseButton").addClass("fa-play");
            isPaused = true;
            clearInterval(interval);
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
            start: 37.5,
            onStart: function(options) {
                // remove old snowflake sketch
                main.sketch.remove();
                $('#fractaltitle').fadeIn();
            }
        });
        // Images of Clouds, Mountains, and Trees
        // clouds
        pop.code({
            start: 47,
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
                // hide sidebar copy
                $('#fractaltitle').hide();
                // position the tree on the canvas
                // var position = main.getRelativePosition({left:-400, top:600} );
                main.sketch = new p5(tree, "sketchCanvas");
                // allow mouse to control branch angle
                mouseAngle = true;
                main.sketch.mainCanvas.position(-150, 50);
                // set the initial branchSize value
                $('#branchSize').val(5);
            }
        });
        // erase the tree and begin a new tree
        pop.code({
            start: 89.184778,
            onStart: function(options) {
                hideTree = true;
                // set the initial branchSize value in preparation for being shown again
                $('#branchSize').val(120);
            }
        });
        // begin displaying pseudocode
        pop.code({
            start: 95.0,
            onStart: function(options) {
                $('#pseudocode').fadeIn();
            }
        });
        // show first line of code, length = 200px
        pop.code({
            start: 120.0,
            onStart: function(options) {
                $('#line1, #line2, #line3').fadeIn();
            }
        });
        // build the tree from its trunk root ("200 px" in the script)
        pop.code({
            start: 125.3,
            onStart: function(options) {
                // disable mouse control of angle
                mouseAngle = false;
                // show tree again
                hideTree = false;
                $('#twoHundred').fadeIn();
            }
        });
        // fade in the "base case"
        pop.code({
            start: 159,
            onStart: function(options) {
                $('#line4').fadeIn();
            }
        });
        // blink it
        pop.code({
            start: 170,
            onStart: function(options) {
                $('#line4').addClass('blinkme');
            }
        });
        pop.code({
            start: 182,
            onStart: function(options) {
                $('#line4').removeClass('blinkme');
            }
        });
        pop.code({
            start: 207,
            onStart: function(options) {
                $('#line5').fadeIn();
            }
        });
        pop.code({
            start: 214.109052,
            onStart: function(options) {
                $('#line6, #line7, #line8, #line9').fadeIn();
            }
        });
        // blink left and right branch draw function text
        pop.code({
            start: 217,
            onStart: function(options) {
                $('#line6, #line7').addClass('blinkme');
            }
        });
        pop.code({
            start: 220.5,
            onStart: function(options) {
                $('#line6, #line7').removeClass('blinkme');
                $('#line8, #line9').addClass('blinkme');
            }
        });
        pop.code({
            start: 224.5,
            onStart: function(options) {
                $('#line8, #line9').removeClass('blinkme');
            }
        });
        // iterate one step ("100 px" in the script)
        pop.code({
            start: 225.9,
            onStart: function(options) {
                $('#branchSize').val(105);
                $('#oneHundred').fadeIn();
            }
        });
        pop.code({
            start: 258,
            onStart: function(options) {
                $('#line2,#line7,#line9').addClass('blinkme');
            }
        });
        pop.code({
            start: 265,
            onStart: function(options) {
                $('#line2,#line7,#line9').removeClass('blinkme');
            }
        });
        // recursion
        pop.code({
            start: 275.2,
            onStart: function(options) {
                // show a recursive image background
                $('#pseudocode').hide();
                $('#sketchCanvas').hide();
                $('#twoHundred, #oneHundred').hide();
                $('#module').css({
                    'background-image': 'url(../img/recursion.jpg)',
                    'background-size': 'cover'
                });
                $('#recursion').fadeIn();
            }
        });
        pop.code({
            start: 290,
            onStart: function(options) {
                $('#module').css({
                    'background-image': 'none'
                });
                $('#sketchCanvas').show();
                $('#pseudocode').show();
                $('#twoHundred, #oneHundred').show();
                $('#recursion').hide();
            }
        });
        // iterate one step ("50 px in the script")
        pop.code({
            start: 334.7,
            onStart: function(options) {
                $('#branchSize').val(65);
                $('#fifty').fadeIn();
            }
        });
        // iterate one step ("25 px")
        pop.code({
            start: 366.3,
            onStart: function(options) {
                $('#branchSize').val(45);
                $('#twentyFive').fadeIn();
            }
        });
        // iterate one step ("12.5")
        pop.code({
            start: 367.4,
            onStart: function(options) {
                $('#branchSize').val(25);
                $('#twelve').fadeIn();
            }
        });
        // hit base case, stop drawing
        pop.code({
            start: 368.2,
            onStart: function(options) {
                $('#six').fadeIn();
                $('#six').addClass('blinkme');
            }
        });        
        pop.code({
            start: 371,
            onStart: function(options) {
                $('#six').removeClass('blinkme');
            }
        });   


        // deterministic function defined
        pop.code({
            start: 395,
            onStart: function(options) {
                $('#pseudocode').hide();
                $('#deterministic').fadeIn();
            }
        });
        // stochastic function defined
        pop.code({
            start: 410.2,
            onStart: function(options) {
                $('#stochastic').fadeIn();
            }
        });
        // stochastic tree #1
        pop.code({
            start: 416,
            onStart: function(options) {
                $('#twoHundred, #oneHundred, #fifty, #twentyFive, #twelve, #six').hide();
                main.sketch.isRandom = true;
                main.sketch.noLoop();
            }
        });
        // // stochastic tree #2
        pop.code({
            start: 417.7,
            onStart: function(options) {
                main.sketch.loop();
                main.sketch.noLoop();
            }
        });
        // // stochastic tree #3
        pop.code({
            start: 418.8,
            onStart: function(options) {
                main.sketch.loop();
                main.sketch.noLoop();
                $('#isRandom').bootstrapSwitch('state', true);
            }
        });
        // Show controls on the screen
        pop.code({
            start: 441.8,
            onStart: function(options) {
                // hide the function definitions
                $('#stochastic').hide();
                $('#deterministic').hide();
                // toggle the random state
                main.sketch.isRandom = false;
                $('#isRandom').bootstrapSwitch('state', false);
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
            start: 443.9,
            onStart: function(options) {
                moveSlider = true;
            }
        });
        // Stop sliding automatically
        pop.code({
            start: 447.8,
            onStart: function(options) {
                moveSlider = false;
                $('#angle').val(29);
            }
        });
        // toggle the stochastic tree button on and off
        pop.code({
            start: 450.5,
            onStart: function(options) {
                $('#isRandom').bootstrapSwitch('state', true);
            }
        });
        pop.code({
            start: 454.5,
            onStart: function(options) {
                $('#isRandom').bootstrapSwitch('state', false);
            }
        });
        // highlight the 'save tree' button
        pop.code({
            start: 466,
            onStart: function(options) {
                // start blinking the $('#save') button
                $('#save').addClass('blinkbtn');
            }
        });
        pop.code({
            start: 470,
            onStart: function(options) {
                // stop blinking the $('#save') button
                $('#save').removeClass('blinkbtn');
            }
        });       
        pop.code({
            start: 478,
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