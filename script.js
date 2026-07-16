console.log("Welcome to Music Player");

// Song database with correct metadata
const songs = [
    { id: 1, songName: "Electro Dreams", filePath: "songs/1.mp3", coverPath: "covers/1.jpg", duration: "5:34" },
    { id: 2, songName: "Midnight Echo", filePath: "songs/2.mp3", coverPath: "covers/2.jpg", duration: "4:12" },
    { id: 3, songName: "Cosmic Journey", filePath: "songs/3.mp3", coverPath: "covers/3.jpg", duration: "6:45" },
    { id: 4, songName: "Neon Nights", filePath: "songs/4.mp3", coverPath: "covers/4.jpg", duration: "5:20" },
    { id: 5, songName: "Digital Dreams", filePath: "songs/5.mp3", coverPath: "covers/5.jpg", duration: "4:58" },
    { id: 6, songName: "Synthetic Soul", filePath: "songs/6.mp3", coverPath: "covers/6.jpg", duration: "5:45" },
    { id: 7, songName: "Beyond Horizon", filePath: "songs/7.mp3", coverPath: "covers/7.jpg", duration: "6:12" },
    { id: 8, songName: "Silent Storm", filePath: "songs/8.mp3", coverPath: "covers/8.jpg", duration: "5:34" },
    { id: 9, songName: "Electric Sky", filePath: "songs/9.mp3", coverPath: "covers/9.jpg", duration: "4:45" },
    { id: 10, songName: "Final Ascent", filePath: "songs/10.mp3", coverPath: "covers/10.jpg", duration: "6:00" },
];

// Initialize player variables
let songIndex = 0;
let audioElement = new Audio();
let isPlaying = false;

// DOM Elements
const masterPlay = document.getElementById('masterPlay');
const myProgressbar = document.getElementById('myProgressbar');
const gif = document.getElementById('gif');
const songItemContainer = document.getElementById('songItemContainer');
const volumeControl = document.getElementById('volumeControl');
const previousBtn = document.getElementById('previous');
const nextBtn = document.getElementById('next');
const songTitle = document.getElementById('songTitle');
const currentTimeDisplay = document.getElementById('currentTime');
const durationDisplay = document.getElementById('duration');

// Render song list dynamically
function renderSongs() {
    songItemContainer.innerHTML = songs.map((song, index) => `
        <div class="songItem" data-index="${index}">
            <img src="${song.coverPath}" alt="${song.songName}" loading="lazy">
            <div class="songItem-info">
                <span class="songName">${song.songName}</span>
            </div>
            <span class="timestamp">
                ${song.duration}
                <i class="fa-regular fa-circle-play play-icon"></i>
            </span>
        </div>
    `).join('');

    // Add click listeners to all song items
    const songItems = document.querySelectorAll('.songItem');
    songItems.forEach(item => {
        item.addEventListener('click', function () {
            const index = this.getAttribute('data-index');
            songIndex = parseInt(index);
            loadAndPlaySong(songIndex);
        });
    });
}

// Load and play a specific song
function loadAndPlaySong(index) {
    audioElement.src = songs[index].filePath;
    songTitle.textContent = songs[index].songName;
    audioElement.play();
    isPlaying = true;
    updatePlayerUI();
    updateActiveSongItem();
}

// Update player UI icons and states
function updatePlayerUI() {
    if (isPlaying) {
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = '1';
    } else {
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity = '0';
    }
}

// Highlight the active song in the list
function updateActiveSongItem() {
    const songItems = document.querySelectorAll('.songItem');
    songItems.forEach((item, index) => {
        if (index === songIndex) {
            item.classList.add('active');
        } else {
            item.classList.remove('active');
        }
    });
}

// Format time in MM:SS format
function formatTime(seconds) {
    if (isNaN(seconds)) return '0:00';
    const minutes = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${minutes}:${secs < 10 ? '0' : ''}${secs}`;
}

// Master play/pause button
masterPlay.addEventListener('click', () => {
    if (audioElement.paused || audioElement.currentTime === 0) {
        audioElement.play();
        isPlaying = true;
    } else {
        audioElement.pause();
        isPlaying = false;
    }
    updatePlayerUI();
});

// Update progress bar and time display
audioElement.addEventListener('timeupdate', () => {
    const progress = (audioElement.currentTime / audioElement.duration) * 100;
    myProgressbar.value = progress || 0;
    currentTimeDisplay.textContent = formatTime(audioElement.currentTime);
});

// Update duration when metadata is loaded
audioElement.addEventListener('loadedmetadata', () => {
    durationDisplay.textContent = formatTime(audioElement.duration);
});

// Seek song from progress bar
myProgressbar.addEventListener('change', () => {
    const seekTime = (myProgressbar.value / 100) * audioElement.duration;
    audioElement.currentTime = seekTime;
});

// Volume control
volumeControl.addEventListener('input', () => {
    audioElement.volume = volumeControl.value / 100;
});

// Previous button
previousBtn.addEventListener('click', () => {
    songIndex = (songIndex - 1 + songs.length) % songs.length;
    loadAndPlaySong(songIndex);
});

// Next button
nextBtn.addEventListener('click', () => {
    songIndex = (songIndex + 1) % songs.length;
    loadAndPlaySong(songIndex);
});

// Auto-play next song when current finishes
audioElement.addEventListener('ended', () => {
    songIndex = (songIndex + 1) % songs.length;
    loadAndPlaySong(songIndex);
});

// Initialize the player
document.addEventListener('DOMContentLoaded', () => {
    renderSongs();
    audioElement.volume = 1;
});
