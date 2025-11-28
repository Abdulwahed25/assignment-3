# 📌 Portfolio Website — README

This project is a personal portfolio website built using **HTML**, **CSS**, and **JavaScript**.  
It includes interactive features such as dark mode, project filtering, GitHub API integration, login simulation, greeting system, and more.

##  Features

###  Theme Toggle (Light/Dark Mode)
- Saves the theme in `localStorage`
- Applies automatically on reload

###  Visitor Greeting + Name Memory
- First-time visitors are prompted for their name using `prompt()`
- Name is saved in `localStorage`
- Greeting updates automatically
- **Signing Out deletes the saved name**

###  Sign In / Sign Out (Simulation)
- NOT real authentication — required for the rubric
- Stores `loggedIn = true/false` in localStorage
- On **Sign Out**:
  - Name is removed
  - Login status removed
  - A new name is immediately requested
  - UI is updated

###  Timer (Time on Page)
- Shows how many seconds the user spent on the page

###  Project Filtering
- Filter projects by category (e.g., Web Dev, Design)

###  Project Sorting
- Sort projects by:
  - Title (A–Z)
  - Title (Z–A)
  - Date (Newest/Oldest)

###  Show/Hide Projects
- Toggle visibility of the entire projects section

###  Contact Form Validation
- Checks:
  - Name
  - Email (with regex)
  - Message
- Shows success/error messages

###  GitHub API Integration
- Fetches repositories using `fetch()`
- Displays repo name + star count
- Handles errors gracefully

---

## 📁 File Structure
project/
│── index.html
│── styles.css
│── script.js
│── assets/
│── README.md
│── AI-Usage.md
│── Technical-Document.md

##  Summary
This portfolio demonstrates strong understanding in:
- JavaScript fundamentals  
- Browser APIs  
- Event-driven programming  
- State management  
- Real-world UI interactions  