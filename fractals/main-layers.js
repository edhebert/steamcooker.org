/* main.js is the key initialization function - this code was written to control the hello.p5.js demonstration
   hello.p5js.org 

  Adapted for use in STEAM Cooker Fractals lesson by Ed Hebert
 */

var main = {
  sketch: null,
  scaleFactor: 1.0,
  debug: true, 

  // Initalize Demo

  init: function() {

    main.resize();

    // Popcorn Setup

    script.init();  

    // Events

    if (main.debug) {
      $(document).click( function(e) {
        console.log( script.popcorn.currentTime());
        var clickX = e.pageX - ($(window).width()/2)
          clickY = $(window).height() - e.pageY;
        console.log( "{left:" + clickX + ", top:" + clickY + "}");
      });
    }

    $(window).resize( function() {
      main.resize();
    });

    // Keyboad events

    if (main.debug) { 
      $('body').keypress(function(e){
        
        var keypress = String.fromCharCode(e.which);

        // Pause

        if(keypress == "p"){
          if (script.popcorn.paused())
            script.popcorn.play();
          else {
            script.popcorn.pause();
            console.log( script.popcorn.currentTime());
          }
        }

        if(keypress == "."){
          if (!script.popcorn.paused()) script.popcorn.pause();
          script.popcorn.currentTime( script.popcorn.currentTime() + (1.0/30.0));
          console.log( script.popcorn.currentTime());
        }   

        if(keypress == ","){
          if (!script.popcorn.paused()) script.popcorn.pause();
          script.popcorn.currentTime( script.popcorn.currentTime() - (1.0/30.0));
          console.log( script.popcorn.currentTime());
        }          

      });   
    } 

    // Buttons

    $("#pause").click( function () {
      if (script.popcorn.paused()) {
        script.popcorn.play();
      } else {             
        script.popcorn.pause();
      }
    });

    $("#begin").click( function() {
      main.playVideo();
    });
    
    // $("#short,#long,#tree").button('loading');

    // Pause on click

    $("a")
        .attr('target', "_blank")
        .click(function () {
            script.popcorn.pause();
        });

    // Show welcome

    $("#welcome").fadeIn();

  },

  prepareVideo: function() {
      // Setup Seriously

      var seriously,
      chroma, target;

      seriously = new Seriously();

      target = seriously.target('#videoCanvas');
      chroma = seriously.effect('chroma');

      if (Modernizr.video.webm && Modernizr.video.h264) {
        //console.log("Chrome");
        chroma.weight = .9;
        chroma.balance = 1;
        chroma.clipWhite = 1;
        chroma.clipBlack = 0;
        chroma.screen = [.2,1,.1,1];
      } else if (!Modernizr.video.webm && Modernizr.video.h264) {
        //console.log("Safari");
        chroma.weight = 1.13;
        chroma.balance = 1;
        chroma.clipWhite = 1;
        chroma.clipBlack = 0;        
        chroma.screen = [.68,1,.21,1];
      } else if (Modernizr.video.webm && !Modernizr.video.h264) {
        //console.log("Firefox");
        chroma.weight = 1.05;
        chroma.balance = 1;
        chroma.clipWhite = 1;
        chroma.clipBlack = 0;        
        chroma.screen = [.14,.95,0,1];
      }
      

      chroma.source = "#"+script.popcorn.media.id;
      target.source = chroma;
      seriously.go();

  },

  // Start Video

  playVideo: function() {

    //console.log("Starting video.");
    //console.log("Length " + script.popcorn.duration() + ".");

    $("#welcome").hide();
    $('#presentation').fadeIn();
    $("#videoCanvas").fadeIn(); 
    $("#pause").fadeIn();

    var time = main.getStartTime();
    script.popcorn.play(time);  

  },

  getStartTime: function () {

    var hash = top.location.hash.replace('#', ''), time = 0;
    if (hash.length > 0) {
      time = parseFloat(hash);
      console.log("Playing from " + time + ".");
    }

    return time;

  },

  getRelativePosition: function(position) {

      videoBaseX = $("#main").width()/2;
      videoBaseY = $("#main").height();

      position.left = videoBaseX + position.left;
      position.top = videoBaseY - position.top;
  
      return position;

  },

  resize: function() {
      var transform = "none";
      var ratio = 1.0;

      if (window.innerWidth < 1280 || window.innerHeight < 800) {
        ratio = window.innerWidth / 1280;
        if (ratio * 800 > window.innerHeight) {
          ratio = window.innerHeight / 800;
        }
        transform = 'scale('+ratio+')';
      } 

      main.scaleFactor = ratio;

      if (main.sketch) main.sketch.scaleFactor = main.scaleFactor;
      $('#main').css('transform', transform);

  }

}