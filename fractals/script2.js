var script = {
    popcorn: null,
    init: function() {

    // var pop = Popcorn.smart("#videoClip", ["assets/video.webm","assets/video.mp4"]);
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
      $("#progress").css('width', width);
    });

    /**
    * Script
    */




    // // Move tree to other side of screen, show controls.
    pop.code({
      start: 1 ,
      onStart: function( options ) {
  

        // position the tree on the canvas
        var position = main.getRelativePosition({left:-400, top:600} );
        main.sketch = new p5(tree, "sketchCanvas");

        main.sketch.mainCanvas.position(-150,0);

        // set the initial branchSize value
        main.sketch.clear();
        main.sketch.noLoop();

        // fade in the tree adjustment Form
        $('#treeForm').css('visibility','visible').hide().fadeIn();
      }
    });


    // // stochastic tree #1
    // pop.code({
    //   start: 2.206697  ,
    //   onStart: function( options ) {

    //     $('#isRandom').bootstrapSwitch('state', true);
    //   }
    // });

    // // // stochastic tree #2
    // pop.code({
    //   start: 3.9  ,
    //   onStart: function( options ) {

    //     // toggle switch off and on
    //     $('#isRandom').bootstrapSwitch('state', false);
    //     $('#isRandom').bootstrapSwitch('state', true);
    //   }
    // });

    // // // stochastic tree #3
    // pop.code({
    //   start: 5.09533  ,
    //   onStart: function( options ) {

    //     // toggle switch off and on
    //     $('#isRandom').bootstrapSwitch('state', false);
    //     $('#isRandom').bootstrapSwitch('state', true);
    //   }
    // });


    // stochastic tree #1
    pop.code({
      start: 2.206697  ,
      onStart: function( options ) {

        main.sketch.isRandom = true;
        main.sketch.noLoop();
      }
    });

    // // stochastic tree #2
    pop.code({
      start: 3.9  ,
      onStart: function( options ) {

        main.sketch.loop();
        main.sketch.noLoop();
      }
    });

    // // stochastic tree #3
    pop.code({
      start: 5.09533  ,
      onStart: function( options ) {

        main.sketch.loop();
        $('#isRandom').bootstrapSwitch('state', true);
      }
    });

    // restore determinant tree
    pop.code({
      start: 10.09533  ,
      onStart: function( options ) {

        // toggle the random state
        $('#isRandom').bootstrapSwitch('state', false);
        // set the initial branchSize value
        $('#branchSize').val(5);
      }
    });


    pop.code({
      start: 493.952243 ,
      onStart: function( options ) { 
        // fade out the video
        // $('#videoCanvas').fadeOut();
      }
    });




    // Set external

    script.popcorn = pop;

  }

}
