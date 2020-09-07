var startImage = null;
var image = null;

function upload(){
  var can = document.getElementById("can");
  var uploadIm = document.getElementById("upload");
  startImage = new SimpleImage(uploadIm);
  image = new SimpleImage(uploadIm);
  image.drawTo(can);
}

function change3(){
  if(imageIsLoaded(startImage)){
    var can = document.getElementById("can");
    var avg = 0;
    for(var pixel of image.values()){
      avg = (pixel.getRed() + pixel.getGreen() + pixel.getBlue()) / 3;
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