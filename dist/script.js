var startImage = null;
var image = null;

function upload(){
  var can = document.getElementById("can");
  var uploadIm = document.getElementById("upload");
  startImage = new SimpleImage(uploadIm);
  image = new SimpleImage(uploadIm);
  image.drawTo(can);
}

function change5(){
  if(imageIsLoaded(startImage)){
    var can = document.getElementById("can");
    var avg = 0;
    for(var pixel of image.values()){
      avg = (pixel.getRed() + pixel.getGreen() + pixel.getBlue()) / 3;
      if(pixel.y <= can.height / 6){  //red
        if(avg < 128){
          pixel.setRed(2*avg);
          pixel.setGreen(0);
          pixel.setBlue(0);
        } else {
          pixel.setRed(255);
          pixel.setGreen(2*avg-255);
          pixel.setBlue(2*avg-255);
        }
      }
      if(pixel.y > can.height / 6 && pixel.y <= 2 * can.height / 6){
        if(avg < 128){  //orange
          pixel.setRed(2*avg);
          pixel.setGreen(0.8*avg);
          pixel.setBlue(0);
        } else {
          pixel.setRed(255);
          pixel.setGreen(1.2*avg-51);
          pixel.setBlue(2*avg-255);
        }
      }
      if(pixel.y > 2 * can.height / 6 && pixel.y <= 3 * can.height / 6){
        if(avg < 128){  //yellow
          pixel.setRed(2*avg);
          pixel.setGreen(2*avg);
          pixel.setBlue(0);
        } else {
          pixel.setRed(255);
          pixel.setGreen(255);
          pixel.setBlue(2*avg-255);
        }
      }
      if(pixel.y > 3 * can.height / 6 && pixel.y <= 4 * can.height / 6){
        if(avg < 128){  //green
          pixel.setRed(0);
          pixel.setGreen(2*avg);
          pixel.setBlue(0);
        } else {
          pixel.setRed(2*avg-255);
          pixel.setGreen(255);
          pixel.setBlue(2*avg-255);
        }
      }
      if(pixel.y > 4 * can.height / 6 && pixel.y <= 5 * can.height / 6){
        if(avg < 128){  //blue
          pixel.setRed(0);
          pixel.setGreen(0);
          pixel.setBlue(2*avg);
        } else {
          pixel.setRed(2*avg-255);
          pixel.setGreen(2*avg-255);
          pixel.setBlue(255);
        }
      }
      if(pixel.y > 5 * can.height / 6){
        if(avg < 128){  //violet
          pixel.setRed(1.6*avg);
          pixel.setGreen(0);
          pixel.setBlue(1.6*avg);
        } else {
          pixel.setRed(0.4*avg+153);
          pixel.setGreen(2*avg-255);
          pixel.setBlue(0.4*avg+153);
        }
      }
    }
    image.drawTo(can);
  }
}

function refresh(){
  if(imageIsLoaded(startImage)){
    upload();
    dimensions();
  }
}

function imageIsLoaded(image){
  if(image == null || !image.complete()){
    alert("image is not loaded")
    return false;
  } else {
    return true;
  }
}

function dimensions(){
  var div = document.getElementById("dim");
  var can = document.getElementById("can");
  div.innerHTML = "Dimensions: " + can.width + " x " + can.height; 
}