
# 📍 Place-Keeper – Google Maps Marker Manager App

Place-Keeper is a lightweight JavaScript application that allows users to interact with Google Maps: saving places, panning to saved locations, and customizing personal preferences. Built with vanilla JS, it includes user settings, place management, and real-time map interaction.

---

## 🗺️ Live Demo

> Coming soon – deploy via GitHub Pages  
> *(Add link here when deployed)*

---

## ✨ Features

- 📌 Click anywhere on the map to add a new place
- 🗂 View and manage saved places in a list
- 📍 Pan to any saved location
- ❌ Remove places from list
- 🧭 Button to center map on current location
- 🎨 User settings panel (color theme, age, gender)
- 💾 All data saved to localStorage (no backend)

---

## 🛠 Tech Stack

- HTML5 + CSS3
- JavaScript (Vanilla ES6)
- Google Maps JavaScript API
- LocalStorage for data persistence

---

## 📂 File Structure

```
place-keeper/
│
├── index.html               # Homepage (intro to Hawaii)
├── map.html                 # Map page with place management
├── user-prefs.html          # User preferences form
│
├── controllers/
│   ├── place.controller.js
│   └── User.Controller.js
│
├── service/
│   ├── placeService.js
│   ├── userService.js
│   └── utilService.js
│
├── styles.css
└── images/ / icons/ (optional)
```

---

## 📸 Screenshot

> Add a screenshot of the map and UI interface here

```
![Place-Keeper Screenshot](./screenshot.png)
```

---

## ▶️ How to Use

1. Open `index.html` → intro and navigation
2. Go to **Map** page
3. Click anywhere on the map to add a place
4. Click **Show Places List** to see saved locations
5. Use buttons to pan or remove places
6. Go to **User Settings** to customize colors and details

---

## 👨‍💻 Developed By

**Haim Michaeli**  
[LinkedIn →](https://www.linkedin.com/in/haim-michaeli-b1b75b246/)  
[GitHub →](https://github.com/haimmichaeli90)

---

## 📌 Notes

This project uses only client-side JS and the Google Maps API. No server or database is required.

---

## 📃 License

Free to use for personal or educational projects.
