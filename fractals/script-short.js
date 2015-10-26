var shortScript = {
    popcorn: null,
    init: function() {

    // define the popcorn video
    var pop = Popcorn.smart("#videoClip", ["../assets/fractals-short.webm","../assets/fractals-short.mp4"]);
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
      }
    });


    // Snowflake

    pop.code({
      start: 5.1 ,
      onStart: function( options ) {

        main.sketch = new p5(snowflake, "sketchCanvas");
        //position tree relative to the video
        main.sketch.mainCanvas.position(0,0);
      }
    });

    // random flake # 1
    pop.code({
      start: 14.851659 ,
      onStart: function( options ) {
        main.sketch.drawSnowflake(main.sketch.width/2, main.sketch.height/2, main.sketch.random(125,175));
      }
    });

    // random flake # 2
    pop.code({
      start: 16.133822 ,
      onStart: function( options ) {
        main.sketch.drawSnowflake(main.sketch.width/2, main.sketch.height/2, main.sketch.random(125,175));
      }
    });

    // random flake # 3
    pop.code({
      start: 17.551037 ,
      onStart: function( options ) {
        main.sketch.drawSnowflake(main.sketch.width/2, main.sketch.height/2, main.sketch.random(125,175));
      }
    });


     // fractal definition
    pop.code({
      start: 38.0 ,
      onStart: function( options ) {

        // remove old snowflake sketch
        main.sketch.remove();

        $('#fractaltitle').fadeIn();
      }
    });
   

    // Images of Clouds, Mountains, and Trees

    // clouds
    pop.code({
      start: 47.299201 ,
      onStart: function( options ) {

        // hide sidebar copy
        // $('#fractaltitle').hide();

        $('#module').css({'background-image': 'url(../img/fractals-clouds.jpg)'});
      }
    });

    // mountains
    pop.code({
      start: 49.008596 ,
      onStart: function( options ) {
        $('#module').css({'background-image': 'url(../img/fractals-mountains.jpg)'});
      }
    });

    // trees
    pop.code({
      start: 51.018562 ,
      onStart: function( options ) {
        $('#module').css({'background-image': 'url(../img/fractals-trees.jpg)'});
      }
    });

    // imagination
    pop.code({
      start: 59.5 ,
      onStart: function( options ) {
        $('#module').css({
          'background-image': 'url(../img/logo.png)',
          'background-repeat': 'no-repeat',
          'background-position': 'center center',
          'background-size': '400px'
        });
        $('#fractaltitle').hide();
      }
    });

    // Tree

    pop.code({
      start: 71.0 ,
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
      start: 89.184778 ,
      onStart: function( options ) {

        hideTree = true;

        // set the initial branchSize value in preparation for being shown again
        $('#branchSize').val(120);        
      }
    });


    // begin displaying pseudocode
    pop.code({
      start: 95.484 ,
      onStart: function( options ) {
        $('#pseudocode').fadeIn();       
      }
    });

    // show first line of code, length = 200px
    pop.code({
      start: 120.911539 ,
      onStart: function( options ) {
        $('#line1, #line2, #line3').fadeIn();       
      }
    });



    // build the tree from its trunk root ("200 px" in the script)

    pop.code({
      start: 141.545849 ,
      onStart: function( options ) {

        // disable mouse control of angle
        mouseAngle = false;

        // show tree again
        hideTree = false;

      }
    });

    // fade in the "base case"
    pop.code({
      start: 175 ,
      onStart: function( options ) {
        $('#line4').fadeIn();       
      }
    });

    // blink it
    pop.code({
      start: 190 ,
      onStart: function( options ) {
        $('#line4').addClass('blinkme');       
      }
    });


    pop.code({
      start: 197 ,
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
