var script = {
    popcorn: null,
    init: function() {

    // define the popcorn video
    var pop = Popcorn.smart("#videoClip", ["../assets/neural.webm","../assets/neural.mp4"]);
    pop.autoplay(false);


    pop.on( "canplayall", function(e) {
      main.prepareVideo();
    });  

    pop.on( "play", function(e) {
        $("#pauseButton").addClass("fa-pause");
        $("#pauseButton").removeClass("fa-play"); 
    });

    pop.on( "pause", function(e) {
        $("#pauseButton").removeClass("fa-pause");
        $("#pauseButton").addClass("fa-play"); 
    });   

    // pop.on("timeupdate", function(e) {
    //   var position = pop.currentTime() / pop.duration();
    //   var width = position * $("#main").width();
    //   // $("#progress").css('width', width);
    // });

    /**
    * Script
    */

    // set the stage
    pop.code({
      start: 0 ,
      onStart: function( options ) {
        $('#treeForm').fadeOut();
        $('#spark').hide();
        $('#clickme').hide();
        $('#math').hide();
        $('#sweet').hide();
        $('#perceptron1').hide();
        $('#perceptron2').hide();
        $('#perceptron3').hide();
        $('#perceptron4').hide();
        $('#perceptron5').hide();
        $('#hovered').hide();
        $('#question1').hide();
        $('#question2').hide();
        $('#question3').hide();
        $('#weight1').hide();
        $('#weight2').hide();
        $('#weight3').hide();
        $('#answers').hide();
        $('#decision').hide();
      }
    });


    // introduce spark 
    pop.code({
      start: 2.65 ,
      onStart: function( options ) {
        $('#spark').show();
      }
    });

    // prompt user click
    pop.code({
      start: 20.8 ,
      onStart: function( options ) {
        $('#spark').hide();
        $('#clickme').show();
      }
    });

    // click for math
    pop.code({
      start: 20.8 ,
      onStart: function( options ) {
        $( "#clickme" ).click(function() {
          $('#clickme').hide();
          $('#math').show();
        });
      }
    });

    // sweet or sour
    pop.code({
      start: 29.3 ,
      onStart: function( options ) {
        $('#math').hide();
        $('#clickme').hide();
        $('#spark').hide();
        $('#sweet').show();
      }
    });

    // back to spark
    pop.code({
      start: 37.0 ,
      onStart: function( options ) {
        $('#sweet').hide();
        $('#spark').show();
      }
    });

    // perceptron frame 1
    pop.code({
      start: 54.0 ,
      onStart: function( options ) {
        $('#spark').hide();
        $('#perceptron1').show();
      }
    });

    // perceptron frame 2
    pop.code({
      start: 56.0 ,
      onStart: function( options ) {
        $('#perceptron1').hide();
        $('#perceptron2').show();
      }
    });

    // perceptron frame 3
    pop.code({
      start: 56.5 ,
      onStart: function( options ) {
        $('#perceptron2').hide();
        $('#perceptron3').show();
      }
    });

    // perceptron frame 4
    pop.code({
      start: 57.0 ,
      onStart: function( options ) {
        $('#perceptron3').hide();
        $('#perceptron4').show();
      }
    });

    // perceptron frame 5
    pop.code({
      start: 58.2 ,
      onStart: function( options ) {
        $('#perceptron4').hide();
        $('#perceptron5').show();
      }
    });

    // back to spark
    pop.code({
      start: 61 ,
      onStart: function( options ) {
        $('#perceptron5').hide();
        $('#spark').show();
      }
    });

    // hover for perceptron 58.5
    pop.code({
      start: 62 ,
      onStart: function( options ) 
      {
        $("#spark").mouseenter(function () {
          $('#spark').hide();
          $('#hovered').show();
        });

        $("#hovered").mouseleave(function () {
          $('#hovered').hide();
          $('#spark').show();
        });
        }
    });

    // stop hover for perceptron
    pop.code({
      start: 68.5 ,
      onStart: function( options ) 
      {
        $("#spark").mouseenter(function () {
          $('#hovered').hide();
          $('#spark').show();
        });

        $("#hovered").mouseleave(function () {
          $('#hovered').hide();
          $('#spark').show();
        });
        }
    });

    // questions frame 1
    pop.code({
      start: 71.5 ,
      onStart: function( options ) {
        $('#spark').hide();
        $('#question1').show();
      }
    });

    // questions frame 2
    pop.code({
      start: 73.5 ,
      onStart: function( options ) {
        $('#question1').hide();
        $('#question2').show();
      }
    });

    // questions frame 3
    pop.code({
      start: 75.8 ,
      onStart: function( options ) {
        $('#question2').hide();
        $('#question3').show();
      }
    });

    
    // weights frame 1
    pop.code({
      start: 94.1 ,
      onStart: function( options ) {
        $('#question3').hide();
        $('#weight1').show();
      }
    });

    // weights frame 2
    pop.code({
      start: 100.0 ,
      onStart: function( options ) {
        $('#weight1').hide();
        $('#weight2').show();
      }
    });

    // weights frame 3
    pop.code({
      start: 108.0 ,
      onStart: function( options ) {
        $('#weight2').hide();
        $('#weight3').show();
      }
    });

    // answers
    pop.code({
      start: 114.1 ,
      onStart: function( options ) {
        $('#weight3').hide();
        $('#answers').show();
      }
    });

    // decision
    pop.code({
      start: 126.5 ,
      onStart: function( options ) {
        $('#answers').hide();
        $('#decision').show();
      }
    });


    // ED CODE
    pop.code({
      start: 271.0 ,
      onStart: function( options ) {

        // clear background

        $('#module').css({'background-image': 'none'});

        // hide sidebar copy
        $('#fractaltitle').hide();

        // position the tree on the canvas
        // var position = main.getRelativePosition({left:-400, top:600} );
        main.sketch = new p5(tree, "sketchCanvas");

        // allow mouse to control branch angle
        mouseAngle = true;

        main.sketch.mainCanvas.position(-150,50);

        // set the initial branchSize value
        $('#branchSize').val(5);

      }
    });

    // erase the tree and begin a new tree
    pop.code({
      start: 289.184778 ,
      onStart: function( options ) {

        hideTree = true;

        // set the initial branchSize value in preparation for being shown again
        $('#branchSize').val(120);        
      }
    });


    // begin displaying pseudocode
    pop.code({
      start: 295.484 ,
      onStart: function( options ) {
        $('#pseudocode').fadeIn();       
      }
    });

    // show first line of code, length = 200px
    pop.code({
      start: 220.911539 ,
      onStart: function( options ) {
        $('#line1, #line2, #line3').fadeIn();       
      }
    });



    // build the tree from its trunk root ("200 px" in the script)

    pop.code({
      start: 241.545849 ,
      onStart: function( options ) {

        // disable mouse control of angle
        mouseAngle = false;

        // show tree again
        hideTree = false;

      }
    });

    // fade in the "base case"
    pop.code({
      start: 275 ,
      onStart: function( options ) {
        $('#line4').fadeIn();       
      }
    });

    // blink it
    pop.code({
      start: 290 ,
      onStart: function( options ) {
        $('#line4').addClass('blinkme');       
      }
    });


    pop.code({
      start: 297 ,
      onStart: function( options ) {
        $('#line4').removeClass('blinkme');       
      }
    });

    pop.code({
      start: 223.605365 ,
      onStart: function( options ) {
        $('#line5').fadeIn();       
      }
    });

    pop.code({
      start: 229.909052 ,
      onStart: function( options ) {
        $('#line6, #line7, #line8, #line9').fadeIn();       
      }
    });

    // blink left and right branch draw function text

    pop.code({
      start: 233 ,
      onStart: function( options ) {
        $('#line6').addClass('blinkme');       
      }
    }); 


    pop.code({
      start: 236 ,
      onStart: function( options ) {
        $('#line6').removeClass('blinkme');   
        $('#line8').addClass('blinkme');     
      }
    }); 

    pop.code({
      start: 239 ,
      onStart: function( options ) { 
        $('#line8').removeClass('blinkme');     
      }
    }); 

    pop.code({
      start: 241.55 ,
      onStart: function( options ) {

        // iterate one step ("100 px" in the script)
        $('#branchSize').val(105);
      }
    });

    pop.code({
      start: 273 ,
      onStart: function( options ) { 
        $('#line2,#line7,#line9').addClass('blinkme');     
      }
    }); 

    pop.code({
      start: 280 ,
      onStart: function( options ) { 
        $('#line2,#line7,#line9').removeClass('blinkme');     
      }
    }); 

    pop.code({
      start: 291 ,
      onStart: function( options ) {
        // show a recursive image background
        $('#sketchCanvas').hide();
        $('#module').css({
          'background-image': 'url(../img/recursion.jpg)',
          'background-size' : 'cover'
        });
        $('#recursion').fadeIn();
      }
    });


    pop.code({
      start: 305 ,
      onStart: function( options ) {
        // show a recursive image background
        $('#module').css({'background-image': 'none'});
        $('#sketchCanvas').show();
        $('#recursion').fadeOut();
      }
    });

    pop.code({
      start: 349.7 ,
      onStart: function( options ) {

        // iterate one step ("50 px in the script")
        $('#branchSize').val(65);
      }
    });

    pop.code({
      start: 382.370073 ,
      onStart: function( options ) {

        // iterate one step ("25 px")
        $('#branchSize').val(45);
      }
    });

    pop.code({
      start: 383.275575 ,
      onStart: function( options ) {

        // iterate one step ("12.5")
        $('#branchSize').val(25);
      }
    });

    // stochastic tree #1
    pop.code({
      start: 432.206697  ,
      onStart: function( options ) {

        main.sketch.isRandom = true;
        main.sketch.noLoop();
      }
    });

    // // stochastic tree #2
    pop.code({
      start: 433.9  ,
      onStart: function( options ) {

        main.sketch.loop();
        main.sketch.noLoop();
      }
    });

    // // stochastic tree #3
    pop.code({
      start: 435.09533  ,
      onStart: function( options ) {

        main.sketch.loop();
        main.sketch.noLoop();
        $('#isRandom').bootstrapSwitch('state', true);
      }
    });



    // Show controls on the screen
    pop.code({
      start: 457.55 ,
      onStart: function( options ) {
   
        // toggle the random state
        main.sketch.isRandom = false;
        $('#isRandom').bootstrapSwitch('state', false);

        // set the initial branchSize value
        $('#branchSize').val(15);

        // hide our pseudocode
        $('#pseudocode').hide();

        // fade in the tree adjustment Form
        $('#treeForm').css('visibility','visible').hide().fadeIn();
      }
    });

    // toggle the stochastic tree button on and off
    pop.code({
      start: 466.5 ,
      onStart: function( options ) {
   
       $('#isRandom').bootstrapSwitch('state', true);
      }
    });

    pop.code({
      start: 469.5 ,
      onStart: function( options ) {
   
       $('#isRandom').bootstrapSwitch('state', false);
      }
    });


    pop.code({
      start: 493.952243 ,
      onStart: function( options ) { 
        // fade out the video
        $('#videoCanvas').fadeOut();
      }
    });




    // Set external

    script.popcorn = pop;

  }

}
