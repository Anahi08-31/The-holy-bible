

var miVideo;
var videoActual;

var sources = [src="videos/matthew1.mp4",src="videos/matthew2.mp4"];

function iniciar(){
  videoActual=0;
  miVideo = document.querySelector("#repro1");
}

function videoPrevio(){  
   
  if (videoActual>0){
   videoActual--;
  }
  miVideo.src = sources[videoActual]
  miVideo.load();
}

function reproducirVideo(){  
  miVideo.play();
}

function detenerVideo(){
  miVideo.pause();
}

function reiniciarVideo(){
  miVideo.currentTime = 0;
}

function siguienteVideo(){
  if (videoActual<sources.length && videoActual>=0 && videoActual!=sources.length-1){
   videoActual++;
  }else if(videoActual==sources.length-1){
   videoActual=0;
  }
  miVideo.src = sources[videoActual]
  miVideo.load();
}


