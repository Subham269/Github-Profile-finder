# GitHub Profile Finder

A simple React app that lets you search any GitHub username and instantly view their public profile — avatar, name, bio, repo count, and followers.

🔗 **Live Demo:** [github-profile-finder-subham.netlify.app](https://github-profile-finder-subham.netlify.app/)

![React](https://img.shields.io/badge/React-18-61DAFB?logo=react&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-Build-646CFF?logo=vite&logoColor=white)
![Netlify](https://img.shields.io/badge/Deployed%20on-Netlify-00C7B7?logo=netlify&logoColor=white)

## ✨ Features

- 🔍 Search any GitHub username and fetch live profile data
- 🖼️ Displays avatar, name, bio, public repo count, and follower count
- ⏳ Loading state while the request is in flight
- 🚫 Graceful error handling for invalid/non-existent usernames
- 🎨 Clean, centered, minimal UI with a custom gradient theme

## 🛠️ Built With

- **React** (functional components + hooks)
- **Vite** for fast dev/build tooling
- **GitHub REST API** (`/users/:username` endpoint)
- **Plain CSS** for styling
- **Netlify** for deployment

## ⚙️ How It Works

The app uses the `useState` hook to manage the search input, profile data, loading state, and error state. On search, it calls:

```
https://api.github.com/users/{username}
```

If GitHub returns a `Not Found` message (invalid username), the app sets an error state and displays a friendly "User Not Found" message instead of broken data.

## 🚀 Getting Started

Clone the repo and run it locally:

```bash
git clone https://github.com/Subham269/github-profile-finder.git
cd github-profile-finder
npm install
npm run dev
```

Build for production:

```bash
npm run build
```

## 📸 Preview

<img width="1832" height="847" alt="Screenshot 2026-07-13 180658" src="https://github.com/user-attachments/assets/f3d772da-e4fd-4023-a708-f766cdb39cba" />
<!-- ![App Screenshot](./screenshot.png) -->

## 📚 What I Learned

This project was built as a hands-on way to practice:

- Fetching and handling data from a public API
- Managing multiple pieces of related state (`profile`, `loading`, `invalid`)
- Conditional rendering based on request state
- Debugging real CSS layout issues (flexbox direction, background rendering, class vs. id selectors)

## 🔮 Future Improvements

- Add a debounce on search input
- Show top pinned repositories
- Add dark/light theme toggle
- Improve mobile responsiveness

---

Made by **Subham Saha** — follow the build journey on [YouTube](https://youtube.com/@subham.saha_dev) and LinkedIn.
