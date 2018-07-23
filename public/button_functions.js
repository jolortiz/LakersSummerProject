/*
** Jonathan Ortiz
** Lakers Interview Project
** Javascript Button Functions
*/

function BoxScore() {
	var score = document.getElementById('boxscore');
	if(score.style.display != "block"){
		document.getElementById('recap').style.display = "none";
		document.getElementById('photo').style.display = "none";
		document.getElementById('video').style.display = "none";
		score.style.display = "block";
	}
}

function Recap() {
	var recap = document.getElementById('recap');
	if(recap.style.display != "block"){
		document.getElementById('boxscore').style.display = "none";
		document.getElementById('photo').style.display = "none";
		document.getElementById('video').style.display = "none";
		recap.style.display = "block";
	}
}

function Photos() {
	var photos = document.getElementById('photo');
	if(photos.style.display != "block"){
		document.getElementById('boxscore').style.display = "none";
		document.getElementById('recap').style.display = "none";
		document.getElementById('video').style.display = "none";
		photos.style.display = "block";
	}
}

function Videos() {
	var videos = document.getElementById('video');
	if(videos.style.display != "block"){
		document.getElementById('boxscore').style.display = "none";
		document.getElementById('recap').style.display = "none";
		document.getElementById('photo').style.display = "none";
		videos.style.display = "block";
	}
}