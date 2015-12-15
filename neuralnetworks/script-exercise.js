var exerciseScript = {
    popcorn: null,
    init: function() {

    // define the popcorn video
    var pop = Popcorn.smart("#videoClip", ["../assets/exercise.webm","../assets/exercise.mp4"]);
    pop.autoplay(false);

    /**
    * Script
    */

    // set the stage
    pop.code({
      start: 0 ,
      onStart: function( options ) {
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
        $('#values1').hide();
        $('#values2').hide();
        $('#values3').hide();
        $('#answers').hide();
        $('#decision').hide();
        $('#decision2').hide();
        $('#videoCanvas').hide();
        $('#pause').hide();
        $('#neuralForm').fadeIn();
        $('#go').fadeIn();
        $('#dontgo').fadeIn();
      }
    });


    // Set external
    script.popcorn = pop;

  }

}
