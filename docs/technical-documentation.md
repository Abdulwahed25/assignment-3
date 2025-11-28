# Technical Documentation: Assignment 3

This document explains the major interactive features and JavaScript logic used in my Assignment 3 portfolio website.

---

## 1. Login Simulation & Name Memory (Local Storage)

The site includes a simple login/sign-out system that uses the browser’s Local Storage to remember the user between visits.

### How it works:
- On the first visit, the page shows a **prompt** asking for the visitor’s name.
- The name is saved using  
  `localStorage.setItem('visitorName', name)`.
- When the site loads again, the greeting automatically shows the stored name.
- When the user clicks **Sign Out**:
  - `visitorName` and `loggedIn` are removed from Local Storage
  - The greeting resets
  - The user is asked for their name again

### Purpose:
This feature demonstrates:
- Local Storage usage  
- DOM state updates  
- Event handling  
- Personalized UI behavior  

---

## 2. Theme Saving and Dark/Light Mode

The portfolio supports dark mode, and the theme stays saved even when the page is closed.

### How it works:
- Clicking the theme toggle applies the correct class to the `<body>`.
- The selected theme (“dark” or “light”) is saved using:
  `localStorage.setItem('theme', mode)`.
- On page load, `loadTheme()` applies the stored theme automatically.

### Benefit:
This ensures consistent experience and fulfills rubric requirements for persistent UI settings.

---

## 3. Dynamic Projects: Rendering, Filtering, Sorting

The projects list is generated dynamically using JavaScript, not static HTML.

### Project Data
All project information is stored inside the `projectsData` array.

### Rendering
`renderProjects()` creates the HTML for each project card and inserts it into the page.

### Filtering
Filter buttons use JavaScript’s `.filter()` method to show only matching categories.

### Sorting
The sort dropdown uses `.sort()` to reorder projects by:
- Date (newest/oldest)
- Title (A–Z / Z–A)

### Why it matters:
This demonstrates array manipulation, DOM creation, and dynamic content updates.

---

## 4. Contact Form Validation with Feedback

The contact form uses real-time error checking and user feedback.

### Validation Covers:
- Empty name field  
- Invalid email format  
- Empty message  

### Feedback:
- Error messages appear under the wrong fields  
- A success/error banner shows at the top  
- Form does NOT refresh → handled fully with JS

### Purpose:
Shows knowledge of form validation, regex, and interactive UI behavior.

---

## 5. GitHub API Integration (fetch & JSON)

The website connects to GitHub’s public API to load real repository data.

### What it does:
- Fetches the latest 6 repositories from the configured GitHub username  
- Displays repo name + star count  
- Handles API errors gracefully (e.g., no internet, wrong username)

### Technology used:
- `fetch()`  
- JSON parsing  
- DOM updates  

---

## 6. Page Visit Timer

A live timer tracks how long the user stays on the page.

### How it works:
- A `setInterval()` increases a counter every second.
- The time is displayed dynamically on the page.
- Updates do not require a page refresh.

### Purpose:
Demonstrates timers, intervals, and live DOM updates.

---

## Summary

This assignment includes a full set of interactive behaviors required by the rubric, including:

- DOM manipulation  
- Event listeners  
- Sorting & filtering  
- Local Storage  
- API requests  
- Form validation  
- Dynamic rendering  
- Light/Dark mode  
- Login simulation  
- User timers  

All features work together to create a professional and responsive portfolio site.