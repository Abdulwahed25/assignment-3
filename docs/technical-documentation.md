# Technical Documentation: Assignment 2

This explains the main parts of the interactive code for my portfolio.

---

## 1. Dynamic Projects and Filtering

The projects section is built using JavaScript data, not static HTML.

* **Project Data:** All project details are stored in the **`projectsData` array** in JavaScript.
* **How it Renders:** The `renderProjects()` function reads the data and creates the HTML code for each project card, putting it into the `#projects-container`.
* **Filtering:** When a user clicks a filter button, the code runs the **`.filter()` method** on the data array to find matching projects, then re-runs `renderProjects()` to show the new list.

---

## 2. Theme Saving (Local Storage)

The website remembers the user's Dark or Light mode choice.

* **Saving:** When the theme button is clicked, the script saves the choice to the browser's memory using **`localStorage.setItem('theme', newTheme)`**.
* **Loading:** The `loadTheme()` function runs when the page opens and checks **Local Storage** to instantly apply the saved theme.

---

## 3. Form Validation and Errors

The contact form gives clear feedback instead of simple alerts.

* **Validation:** The `validateForm()` function checks if the required fields are filled and if the email format is correct.
* **Feedback:** If there are errors, red messages appear next to the fields, and a success or error banner fades in using a smooth CSS **transition** for a better user experience.

---

## 4. Code Quality (AI-Assisted CSS)

The CSS was cleaned up to make themes easier to manage.

* **CSS Variables:** We used **CSS Custom Properties** (like `--text-color`) to define all colors in one spot. This makes switching between light and dark themes very clean and simple.
* **Accessibility:** Using variables helped fix the text colors, making sure there is good **contrast** so the site is easy for everyone to read.