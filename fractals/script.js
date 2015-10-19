var script = {
    popcorn: null,
    init: function() {

    // define the popcorn video
    var pop = Popcorn.smart("#videoClip", ["../assets/fractals2.webm","../assets/fractals2.mp4"]);
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

    pop.on("timeupdate", function(e) {
      var position = pop.currentTime() / pop.duration();
      var width = position * $("#main").width();
      // $("#progress").css('width', width);
    });

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
      start: 5.267798 ,
      onStart: function( options ) {

        // var position = main.getRelativePosition({left:400, top:600} );
        main.sketch = new p5(snowflake, "sketchCanvas");
        //position tree relative to the video
        main.sketch.mainCanvas.position(200,100);
      }
    });

    // random flake # 1
    pop.code({
      start: 14.991659 ,
      onStart: function( options ) {
        main.sketch.drawSnowflake(main.sketch.width/2, main.sketch.height/2, main.sketch.random(30,80));
      }
    });

    // random flake # 2
    pop.code({
      start: 16.133822 ,
      onStart: function( options ) {
        main.sketch.drawSnowflake(main.sketch.width/2, main.sketch.height/2, main.sketch.random(30,80));
      }
    });

    // random flake # 3
    pop.code({
      start: 17.551037 ,
      onStart: function( options ) {
        main.sketch.drawSnowflake(main.sketch.width/2, main.sketch.height/2, main.sketch.random(30,80));
      }
    });


    // Tree

    pop.code({
      start: 71.0 ,
      onStart: function( options ) {

        // remove old snowflake sketch
        main.sketch.remove();

        // position the tree on the canvas
        var position = main.getRelativePosition({left:-400, top:600} );
        main.sketch = new p5(tree, "sketchCanvas");

        // allow mouse to control branch angle
        mouseAngle = true;

        main.sketch.mainCanvas.position(-150,0);

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





    // build the tree from its trunk root ("200 px" in the script)

    pop.code({
      start: 141.645849 ,
      onStart: function( options ) {

        // disable mouse control of angle
        mouseAngle = false;

        // show tree again
        hideTree = false;

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

        // fade in the tree adjustment Form
        $('#treeForm').css('visibility','visible').hide().fadeIn();

        // fade out our pseudocode
        $('#pseudocode').fadeOut();
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
