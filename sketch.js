function setup() {
  createCanvas(1920, 1080, WEBGL);
  angleMode(DEGREES);
  noiseDetail(1);
}

function draw() {
  background(30);
  translate(0, 0, -500);
  rotateX(90);
  rotateZ(frameCount * 4);
  rotateX(map(cos(frameCount / 3), -1, 1, 30, -30));
  rotateY(map(sin(frameCount / 3), -1, 1, 30, -30));
  directionalLight([255], createVector(0, 0, -1));
  directionalLight([255], createVector(0, 0, -1));
  var w = 14;
  var start = frameCount / 20;
  var xoff = 0;
  for (var x = -width / 2; x < width / 2; x += w) {
     var yoff = 0;
     for (var y = -height / 2; y < height / 2; y += w) {
         var h = map(noise(xoff + start, yoff + start), 0, 1, -100, 100);
         var r = map(x, -width / 1, width / 2, 0, 255);
         var g = map(y, -height / 1, height / 2, 255, 0);
         var b = map(h, -400, 400, 0, 255);
       push();
       fill(r, g, b);
       translate(x , y, -h / 2);
       box(w, w, h);
       pop();
       yoff += 0.1;
     }
     xoff += 0.1;
  }   
}