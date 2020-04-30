var front = false;

function loadCamera(){
	var video = document.querySelector("#webCamera");
		video.setAttribute('autoplay', '');
	    video.setAttribute('muted', '');
	    video.setAttribute('playsinline', '');

	if (navigator.mediaDevices.getUserMedia) {
		navigator.mediaDevices.getUserMedia({audio: false, video: {facingMode: 'environment'}})
		.then( function(stream) {
			video.srcObject = stream;
		})
		.catch(function(error) {
			alert("Para tirar uma foto do seu pet, é necessário permitir que o Pet Shot acesse sua câmera =(");
		});
	}
}

function takeSnapShot(){
	var video = document.querySelector("#webCamera");

	var canvas = document.createElement('canvas');
	canvas.width = video.videoWidth;
	canvas.height = video.videoHeight;
	var ctx = canvas.getContext('2d');
	
	ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
	
	var dataURI = canvas.toDataURL('image/jpeg');
	
	var a = document.createElement("a");
	a.href = dataURI;
	a.download = "petshot.jpg";
	a.click();
	document.querySelector("#imagemConvertida").setAttribute("src", dataURI);
}

loadCamera();

//para ativar a câmera traseira


document.getElementById('flip-button').addEventListener ("click", function() { front = !front; });

var constraints = { video: { facingMode: (front? "user" : "environment") } };

//

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




