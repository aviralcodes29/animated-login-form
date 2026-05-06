# Animated Login Form

A modern, animated login page built with **HTML, CSS, and JavaScript**.  
The UI features a centered glassmorphism card, smooth focus and hover animations, password visibility toggle, and basic form validation – perfect for learning front-end fundamentals and showcasing UI skills in your portfolio.  

> This is a front-end demo only. No real authentication or backend is connected.

---

## 🎯 Project Goals

- Practice writing clean, semantic HTML for a common real-world component: a login form.
- Design a visually appealing, **glassmorphism-style** login card with soft backgrounds and subtle motion.
- Add interactive behavior using vanilla JavaScript (password toggle + validation).
- Make the layout responsive so it works on both desktop and mobile screens. [web:2][web:57]

---

## ✨ Features

- **Glassmorphism UI**
  - Blurred, semi-transparent login card over a gradient background.
  - Soft floating background circles with gentle animation.

- **Animated Interactions**
  - Card **slide-in** animation on page load.
  - Input fields highlight with glow and slight lift on focus.
  - Sign-in button with hover lift and light sheen effect.

- **Form Fields**
  - Email input with icon and placeholder.
  - Password input with icon and **show/hide** toggle.
  - Optional “Remember me” checkbox and “Forgot password?” link.

- **Validation (Front-end Only)**
  - Checks for:
    - Empty email
    - Valid email format
    - Empty password
    - Minimum password length (e.g., 6 characters)
  - Error messages displayed under inputs with a subtle shake animation to draw attention. [web:59][web:61]

- **Social Login Row (UI Only)**
  - Google, GitHub, and Facebook icons to simulate social sign-in buttons (no real OAuth).

- **Responsive Design**
  - Centered layout on large screens.
  - Adjusted padding and font sizes for smaller screens.
  - Works on mobile, tablet, and desktop. [web:62]

---

## 🧱 Tech Stack

- **HTML5**
  - Semantic structure for the login form and its elements. [web:2]
- **CSS3**
  - Flexbox for centering and layout.
  - Gradients, blur, box-shadow for the glassmorphism effect.
  - Keyframe animations for card entrance and background floating.
  - Media queries for responsiveness. [web:57]
- **JavaScript (Vanilla)**
  - Password show/hide toggle.
  - Client-side validation and error messages.
  - Simple success feedback (alert + form reset). [web:59][web:1]

---

## 📁 Project Structure

```text
animated-login-form/
├── index.html      # Main login page markup
├── style.css       # Styles for layout, glassmorphism, and animations
└── script.js       # Password toggle and validation logic
```

---

## 🚀 How to Run Locally

You only need a browser – no backend is required.

### Option 1: Open directly

1. Download or clone this repository.
2. Open `index.html` in any modern browser (Chrome, Edge, Firefox, etc.).
3. Interact with the form (focus fields, hover button, toggle password, test validation).

### Option 2: Use VS Code + Live Server

1. Open the project folder in **VS Code**.
2. Install the **Live Server** extension if you don’t have it.
3. Right-click `index.html` → **“Open with Live Server”**.
4. The page will open at `http://localhost:5500` (or similar) and auto-reload on changes. [web:64]

---

## 🧠 How It Works (Short Explanation)

- The **HTML** defines a login form with:
  - Email and password inputs wrapped in `.field` and `.field-inner` containers.
  - Icons inside each field using Font Awesome.
  - A checkbox and links for secondary actions.

- The **CSS**:
  - Uses a gradient background and blurred circles to create depth.
  - Styles the card with a translucent background, border, and drop shadow for glassmorphism.
  - Animates the card entrance and background circles.
  - Adds focus and hover effects on inputs and the button to improve UX. [web:2][web:57]

- The **JavaScript**:
  - Listens for the **submit** event, prevents the default, and runs custom validation.
  - Shows contextual error messages and highlights invalid fields.
  - Toggles the password input type between `"password"` and `"text"` when the eye icon is clicked.
  - On successful validation, shows a simple `alert` and resets the form. [web:59][web:1]

---

## ✅ Possible Improvements / Future Scope

If you want to upgrade this project later, you can add:

- **Password strength indicator** (weak / medium / strong meter).
- **Real authentication** by connecting to a backend (Node.js, Django, Firebase Auth, etc.).
- **Accessibility improvements**:
  - ARIA attributes.
  - Better focus outlines and keyboard navigation. [web:3][web:64]
- **Dark / light theme toggle**.
- **Error summary** at the top of the form for screen readers.

These improvements can turn this simple UI into a more production-ready authentication screen. [web:61][web:36]

---

## 📸 Screenshots (Optional)

You can later add screenshots like:

```md
## Screenshots

### Desktop
(screenshot/Desktop-view)

### Mobile
(Insert screenshot here)
```

Use VS Code, run Live Server, and capture images using Snipping Tool, then upload to your GitHub repo (or use image URLs). [web:64]

---

## 🧑‍💻 Author

- **Name:** Aviral Singh  
- **Role:** B.Tech CSE (AI/ML) student  
- **Focus:** Front-end development, UI/UX, and embedded/Arduino projects  

Feel free to **star** the repo or use this login page as a starting point for your own projects. [web:62]