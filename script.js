console.log("welcome to song");

let songIndex = 0;
let audioElement = new Audio('songs/1.mp3');

let masterPlay = document.getElementById('masterPlay');
let myProgressbar = document.getElementById('myProgressbar');
let gif = document.getElementById('gif');

let songs = [
    { songName: "hello ji", filePath: "song/1.mp3", coverPath: "covers/1.jpg" },
    { songName: "hello ji", filePath: "song/2.mp3", coverPath: "covers/2.jpg" },
    { songName: "hello ji", filePath: "song/3.mp3", coverPath: "covers/3.jpg" },
    { songName: "hello ji", filePath: "song/4.mp3", coverPath: "covers/4.jpg" },
    { songName: "hello ji", filePath: "song/5.mp3", coverPath: "covers/5.jpg" },
    { songName: "hello ji", filePath: "song/6.mp3", coverPath: "covers/6.jpg" },
    { songName: "hello ji", filePath: "song/7.mp3", coverPath: "covers/7.jpg" },
    { songName: "hello ji", filePath: "song/8.mp3", coverPath: "covers/8.jpg" },
    { songName: "hello ji", filePath: "song/9.mp3", coverPath: "covers/9.jpg" },
];

songItems.forEach(element => {
    
});
// Play button
masterPlay.addEventListener('click', () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;

    } else {
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle')
        masterPlay.classList.add('fa-play-circle')
        gif.style.opacity = 0;
    }
});

// Update progress bar
audioElement.addEventListener('timeupdate', () => {
    let progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
    myProgressbar.value = progress;
});

// Seek song from progress bar
myProgressbar.addEventListener('change', () => {
    audioElement.currentTime = myProgressbar.value * audioElement.duration / 100;
});