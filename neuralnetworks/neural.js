var img;
var canvasWidth = $('#module').width();
var canvasHeight = $('#module').height();

var resizeFactor;
var newImageWidth;
var newImageHeight;

// set canvas size and load image 
function setup() 
{
  	createCanvas(canvasWidth, canvasHeight);
  	img = loadImage("../img/spark.png");
}
 
// resize and draw image 
function draw() 
{	
 	resizeFactor = canvasHeight/img.height;
 	newImageWidth = img.width*resizeFactor;
 	newImageHeight = img.height*resizeFactor;

  	image(img, 0, 0, newImageWidth, newImageHeight);

  	//centered 
  	//image(img, (canvasWidth/2)-(newImageWidth/2), (canvasHeight/2)-(newImageHeight/2), newImageWidth, newImageHeight); 
}

// change images on mouse press
function mousePressed() {
	
	// check if mouse is over image
	var d = dist(mouseX, mouseY, newImageWidth/2, newImageHeight/2);
	if (d < newImageHeight/2) {
 		img = loadImage("math.png");
 		draw();
	}
}


