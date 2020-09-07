var startImage = null;
var image = null;

function upload(){
  var can = document.getElementById("can");
  var uploadIm = document.getElementById("upload");
  startImage = new SimpleImage(uploadIm);
  image = new SimpleImage(uploadIm);
  image.drawTo(can);
}

function change4(){
  if(imageIsLoaded(startImage)){
    var can = document.getElementById("can");
    for(var pixel of image.values()){
      if(pixel.x > 15 && pixel.x < 20 && pixel.y > 15 && pixel.y < can.height - 15){
        pixel.setRed(255);
        pixel.setGreen(255);
        pixel.setBlue(255);
      }
      if(pixel.x > can.width - 20 && pixel.x < can.width - 15 && pixel.y > 15 && pixel.y < can.height - 15){
        pixel.setRed(255);
        pixel.setGreen(255);
        pixel.setBlue(255);
      }
      if(pixel.x > 15 && pixel.x < can.width - 15 && pixel.y > 15 && pixel.y < 20){
        pixel.setRed(255);
        pixel.setGreen(255);
        pixel.setBlue(255);
      }
      if(pixel.x > 15 && pixel.x < can.width - 15 && pixel.y > can.height - 20 && pixel.y < can.height - 15){
        pixel.setRed(255);
        pixel.setGreen(255);
        pixel.setBlue(255);
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