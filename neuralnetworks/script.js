var shortScript = {
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

    /**
    * Script
    */

    // set the stage
    pop.code({
      start: 0 ,
      onStart: function( options ) {
        $('#neuralForm').hide();
        $('#go').hide();
        $('#dontgo').hide();
        $('#spark').hide();
        $('#clickme').hide();
        $('#math').hide();
        $('#sweet').hide();
        $('#perceptron1').hide();
        $('#perceptron2').hide();
        $('#perceptron3').hide();
        $('#perceptron4').hide();
        $('#perceptron5').hide();
        $('#hoveroverme').hide();
        $('#hovered').hide();
        $('#question1').hide();
        $('#question2').hide();
        $('#question3').hide();
        $('#weight1').hide();
        $('#weight2').hide();
        $('#weight3').hide();
        $('#answers').hide();
        $('#decision').hide();
        $('#decision2').hide();
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

    // show neural networks definition
    pop.code({
      start: 41.0 ,
      onStart: function( options ) {
        $('#neuralnets').show();
      }
    });


    // show perceptron definition
    pop.code({
      start: 54.0 ,
      onStart: function( options ) {
        $('#perceptrondef').show();
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

      // back to spark
    pop.code({
      start: 61 ,
      onStart: function( options ) {
        $('#spark').hide();
        $('#hoveroverme').show();
      }
    });

    // hover for perceptron 58.5
    pop.code({
      start: 62 ,
      onStart: function( options ) 
      {
        $("#hoveroverme").mouseenter(function () {
          $('#hoveroverme').hide();
          $('#hovered').show();
        });

        $("#hovered").mouseleave(function () {
          $('#hovered').hide();
          $('#hoveroverme').show();
        });
        }
    });

    // stop hover for perceptron
    pop.code({
      start: 68.5 ,
      onStart: function( options ) 
      {
        $("#hoveroverme").mouseenter(function () {
          $('#hovered').hide();
          $('#hoveroverme').hide();
        });

        $("#hovered").mouseleave(function () {
          $('#hovered').hide();
          $('#hoveroverme').hide();
        });
        }
    });

    // ensure hover is hidden
    pop.code({
      start: 71.5 ,
      onStart: function( options ) {
        $('#hovered').hide();
        $('#hoveroverme').hide();
        $('#spark').hide();
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

    // decision 1
    pop.code({
      start: 126.5 ,
      onStart: function( options ) {
        $('#answers').hide();
        $('#decision').show();
      }
    });

    // decision 2
    pop.code({
      start: 129 ,
      onStart: function( options ) {
        $('#decision').hide();
        $('#decision2').show();
      }
    });

        // fade out video
    pop.code({
      start: 148 ,
      onStart: function( options ) {
        $('#videoCanvas').hide();
        $('#decision2').hide();
        $('#neuralnets').hide();
        $('#perceptrondef').hide();
        $('#neuralForm').fadeIn();
        $('#go').fadeIn();
        $('#dontgo').fadeIn();
      }
    });


    // Set external

    script.popcorn = pop;

  }

}
