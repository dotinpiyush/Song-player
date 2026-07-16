# 🎵 Music Player

A modern, responsive Spotify-inspired music player built with vanilla HTML, CSS, and JavaScript. Play your favorite NCS (No Copyright Sounds) tracks with a sleek interface.

## ✨ Features

- **Dynamic Song List**: Displays all 10 songs with album art
- **Playback Controls**: Play, pause, next, and previous buttons
- **Progress Bar**: Visual progress indicator with seek functionality
- **Volume Control**: Adjustable volume slider
- **Time Display**: Shows current time and total duration
- **Active Song Highlight**: Visual feedback for the currently playing track
- **Auto-Play**: Automatically plays the next song when current finishes
- **Responsive Design**: Works seamlessly on desktop and mobile devices
- **Beautiful UI**: Dark theme with Spotify-inspired colors
- **Spotify API Integration**: Search and play songs from Spotify

## 🎯 How to Use

### 1. **Local Setup**
   - Clone or download this repository
   - Open `index.html` in your web browser
   - That's it! The player is ready to use

### 2. **Basic Controls**
   - **Play/Pause**: Click the play circle icon in the bottom bar
   - **Next/Previous**: Use the forward/backward arrows
   - **Seek**: Click or drag on the progress bar
   - **Volume**: Adjust the volume slider
   - **Select Song**: Click on any song in the list to play it

### 3. **File Structure**
   ```
   Song-player/
   ├── index.html        # Main HTML file
   ├── style.css         # Styling
   ├── script.js         # Player logic
   ├── spotify-api.js    # Spotify API integration
   ├── songs/            # Audio files (10 MP3s)
   ├── covers/           # Album artwork (10 JPGs)
   ├── bg.jpg            # Background image
   ├── logo.png          # Spotify logo
   ├── playing.gif       # Playing animation
   ├── .env.example      # Environment variables template
   └── README.md         # This file
   ```

## 🎨 Customization

### Add Your Own Songs
1. Add MP3 files to the `songs/` folder
2. Add corresponding cover images to the `covers/` folder
3. Update the `songs` array in `script.js`:

```javascript
const songs = [
    { id: 1, songName: "Your Song Name", filePath: "songs/1.mp3", coverPath: "covers/1.jpg", duration: "5:34" },
    // Add more songs...
];
```

### Change Colors
Edit `style.css` to customize the color scheme:
- Primary green: `#1db954` (Spotify green)
- Dark background: `#000`
- Text color: `beige` or `azure`

## 🔑 Spotify API Integration

### Setup Instructions

1. **Register Spotify Application**
   - Go to [Spotify Developer Dashboard](https://developer.spotify.com/dashboard)
   - Create a new application
   - Accept the terms and create the app

2. **Get Your Credentials**
   - Copy your `Client ID` and `Client Secret`
   - Note your `Redirect URI`

3. **Setup Environment Variables**
   - Copy `.env.example` to `.env`
   - Add your Spotify credentials:
   ```
   SPOTIFY_CLIENT_ID=your_client_id
   SPOTIFY_CLIENT_SECRET=your_client_secret
   SPOTIFY_REDIRECT_URI=http://localhost:3000/callback
   ```

4. **Run Local Server**
   ```bash
   # Using Python 3
   python -m http.server 3000

   # Using Node.js
   npx http-server -p 3000
   ```

## 📱 Browser Compatibility

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🚀 Deployment

### Deploy to GitHub Pages

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Release: Add responsive design and Spotify API"
   git push origin main
   ```

2. **Enable GitHub Pages**
   - Go to Repository Settings → Pages
   - Select `main` branch as source
   - Your site will be live at `https://yourusername.github.io/Song-player`

### Deploy to Vercel

1. **Install Vercel CLI**
   ```bash
   npm i -g vercel
   ```

2. **Deploy**
   ```bash
   vercel
   ```

3. **Configure Environment Variables in Vercel Dashboard**
   - Add `SPOTIFY_CLIENT_ID`, `SPOTIFY_CLIENT_SECRET`, `SPOTIFY_REDIRECT_URI`

### Deploy to Netlify

1. **Connect Repository**
   - Go to [Netlify](https://netlify.com)
   - Click "New site from Git"
   - Connect your GitHub account and select the repository

2. **Configure Deployment**
   - Build command: `npm run build` (or leave empty)
   - Publish directory: `/`

3. **Add Environment Variables**
   - Site settings → Environment
   - Add Spotify credentials

## 🚀 Recent Improvements

- ✅ Fixed path references in JavaScript
- ✅ Complete song switching functionality
- ✅ Added next/previous track buttons
- ✅ Implemented volume control
- ✅ Added time display (current/total)
- ✅ Dynamic song list rendering
- ✅ Active song highlighting
- ✅ Auto-play next track
- ✅ **Fully Responsive Design** (Mobile, Tablet, Desktop)
- ✅ **Spotify API Integration**
- ✅ Enhanced accessibility

## 📝 Git Workflow

### Making Changes

```bash
# Create a new branch
git checkout -b feature/responsive-design

# Make your changes
# ...

# Stage and commit
git add .
git commit -m "feat: Add responsive design for mobile"

# Push to remote
git push origin feature/responsive-design

# Create a pull request on GitHub
```

### Commit Message Convention

- `feat:` New feature
- `fix:` Bug fix
- `docs:` Documentation
- `style:` Styling changes
- `refactor:` Code refactoring
- `test:` Tests
- `chore:` Build, dependencies

## 📝 To-Do List

- [ ] Shuffle mode
- [ ] Repeat options (repeat one, repeat all)
- [ ] Playlist management
- [ ] Search/filter songs from Spotify
- [ ] Keyboard shortcuts
- [ ] Local storage for settings
- [ ] Dark/light theme toggle
- [ ] Song ratings/favorites
- [ ] Integrate WebPlayback SDK
- [ ] User authentication

## 📄 License

Free to use and modify for personal and educational purposes.

## 🙌 Credits

- **Font Awesome Icons**: Beautiful icons for player controls
- **Google Fonts**: Poppins and Raleway typography
- **NCS**: No Copyright Sounds for music content
- **Spotify**: Music streaming and API

---

Enjoy your music! 🎧