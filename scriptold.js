
var miVideo;
var videoActual;

var sources = [src="videos/genesis1.mp4"];

function iniciar(){
  videoActual=0;
  miVideo = document.querySelector("#repro1");
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



