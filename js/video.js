// variable for video
var video;

window.addEventListener("load", function() {
	//when page opens
	console.log("Good job opening the window");

	// get the video element from the page
	video = document.getElementById("player1");

	// turn off autoplay and looping
	video.autoplay = false;
	video.loop = false;

	// play button
	document.getElementById("play").addEventListener("click", function() {
		video.play();
		updateVolumeDisplay(); // update volume display
		console.log("play video");
	});

	// pause button
	document.getElementById("pause").addEventListener("click", function() {
		video.pause();
		console.log("pause video");
	});

	// slow down
	document.getElementById("slower").addEventListener("click", function() {
		video.playbackRate *= 0.9;
		console.log("new speed is", video.playbackRate.toFixed(5));
	});

	// speed up
	document.getElementById("faster").addEventListener("click", function() {
		video.playbackRate /= 0.9;
		console.log("new speed is", video.playbackRate.toFixed(5));
	});

	// skip ahead
	document.getElementById("skip").addEventListener("click", function() {
		if (video.currentTime + 10 >= video.duration) {
			video.currentTime = 0;
		} else {
			video.currentTime += 10;
		}

		//logs current location of video
		console.log("current time of video is", video.currentTime.toFixed(2));
	});

	// mute button
	document.getElementById("mute").addEventListener("click", function() {
		if (video.muted) {
			video.muted = false;
			this.textContent = "Mute";
		} else {
			video.muted = true;
			this.textContent = "Unmute";
		}
	});

	// vollume slider
	document.getElementById("slider").addEventListener("input", function() {
		video.volume = this.value / 100;
		updateVolumeDisplay();
	});

	// old school
	document.getElementById("vintage").addEventListener("click", function() {
		video.classList.add("oldSchool"); // add filter and border
	});

	// original
	document.getElementById("orig").addEventListener("click", function() {
		video.classList.remove("oldSchool"); // remove old school style
	});
});

// show the current volume percent on the page
function updateVolumeDisplay() {
	let volumePercent = Math.round(video.volume * 100);
	document.getElementById("volume").textContent = volumePercent + "%";
}