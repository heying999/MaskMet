var bubbles = [];
//var img;
var faces = [];

function preload(){
  //img = loadImage('images/face0.png');
  for(var i = 0; i < 11; i++){
    faces[i] = loadImage('images/face' + i + '.png');
  }
}

function setup() {
createCanvas(windowWidth,windowHeight);  
}

function mousePressed(){
  var r = floor(random(0,faces.length));
  var b = new Bubble(mouseX, mouseY, faces[r]);
  bubbles.push(b);
}

function draw() {
  background(0);
  for(var i = bubbles.length - 1; i >= 0; i--){
    bubbles[i].update();
    bubbles[i].display();
  }
  
}