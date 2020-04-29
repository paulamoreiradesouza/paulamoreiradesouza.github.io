function loadCamera(){
	//Captura elemento de vídeo
	var video = document.querySelector("#webCamera");
		//As opções abaixo são necessárias para o funcionamento correto no iOS
		video.setAttribute('autoplay', '');
	    video.setAttribute('muted', '');
	    video.setAttribute('playsinline', '');
	    //--
	
	//Verifica se o navegador pode capturar mídia
	if (navigator.mediaDevices.getUserMedia) {
		navigator.mediaDevices.getUserMedia({audio: false, video: {facingMode: 'user'}})
		.then( function(stream) {
			//Definir o elemento víde a carregar o capturado pela webcam
			video.srcObject = stream;
		})
		.catch(function(error) {
			alert("Oooopps... para tirar uma foto do seu pet, é necessário permitir que nosso app acesse sua câmera =(");
		});
	}
}

function takeSnapShot(){
	//Captura elemento de vídeo
	var video = document.querySelector("#webCamera");
	
	//Criando um canvas que vai guardar a imagem temporariamente
	var canvas = document.createElement('canvas');
	canvas.width = video.videoWidth;
	canvas.height = video.videoHeight;
	var ctx = canvas.getContext('2d');
	
	//Desnehando e convertendo as minensões
	ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
	
	//Criando o JPG
	var dataURI = canvas.toDataURL('image/jpeg'); //O resultado é um BASE64 de uma imagem.
	
	var a = document.createElement("a");
	a.href = dataURI;
	a.download = "foto.jpg";
	a.click();
	document.querySelector("#imagemConvertida").setAttribute("src", dataURI);
}

loadCamera();




// play audios
let playingAudio = null;

function playAudio(animal) {
	const audio = document.getElementById(animal);

	playingAudio = audio;
	audio.play();
}

function pauseAudio() {
	if (playingAudio) {
		playingAudio.pause();
	}
}

document.getElementById("playCat").addEventListener("click", function(){
	playAudio("gato");
});

document.getElementById("playBird").addEventListener("click", function(){
	playAudio("passaro");
});

document.getElementById("pauseBt").addEventListener("click", pauseAudio);




