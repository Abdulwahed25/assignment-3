# 🧠 AI Usage Report: Assignment 2

This report shows how I used an AI tool to make my website's code better and easier to read. This was a required part of the assignment.

---

## 1. Tools Used
* **Tool:** Gemini
* **Purpose:** To check my CSS code and suggest ways to improve my themes and fix problems that make the site hard to read.

---

## 2. What I Used AI For

**My Goal:** I wanted to make my Light/Dark theme code much cleaner and fix a color problem that made the text hard to see on the light background.

**Prompt I Used:**
I gave the AI my full CSS file and asked it to check the code and tell me:
> "Review the following CSS code for styles.css. Suggest specific improvements for accessibility ( fixing poor color contrast in the base theme) and code readability by suggesting how to use CSS Custom Properties (variables) to manage the light and dark themes more cleanly."

---

## 3. What I Changed Based on AI Help

The AI confirmed that my project filters and animations were fine but gave me two main ideas for improvement:

### A. Making Themes with CSS Variables
* **AI Suggestion:** Use **CSS Variables** (like `--text-color`) to control colors instead of writing out every single color change under the `.dark-mode` class.
* **What I Did:** I set up the variables in the main part of the CSS (`:root`) and now use the `.dark-mode` class only to change the variable values.
* **Why it Helps:** My theme code is now **cleaner** and **much easier to manage** if I want to change colors later.

### B. Fixing Text Visibility (Accessibility)
* **AI Suggestion:** My original light-mode text was too light on the background, which is hard on the eyes (bad contrast).
* **What I Did:** I changed the default text color variable to a darker gray (`#333`) to make sure the contrast is high enough.
* **Why it Helps:** The whole portfolio is now **easier for everyone to read**, which is important for a professional site.

---

## 4. What I Learned
I learned that using **CSS Variables** is the best way to handle themes in modern web development. It makes the code less repetitive and much more flexible than the way I was doing it before.