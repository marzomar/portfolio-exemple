var body = document.getElementById("body");
var videoSource = document.getElementById("video-source");

function jour() {
    body.classList.toggle("night");

    if (body.classList.contains("night")) {
        videoSource.src = "./image/215484_small.mp4"; 
    } else {
        videoSource.src = "./image/119266-717347129_small.mp4"; 
    }

    var video = document.getElementById("background-video");
    video.load();
}