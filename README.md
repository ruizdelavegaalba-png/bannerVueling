# Vueling Newsletter Banner ✈️

A **pure JavaScript (Vanilla JS)** script that injects a newsletter subscription pop-up into the [Vueling](https://www.vueling.com/es) home page, following its visual identity and without modifying the website's source code.

This project simulates a real **CRO (Conversion Rate Optimization)** task and was developed for the Higher Vocational Degree in Web Application Development (DAW).

---

## 🚀 How to use

1. Open [https://www.vueling.com/es](https://www.vueling.com/es) in Google Chrome.
2. Open the Console with `Ctrl + Shift + J`.
3. If Chrome blocks pasting, type `allow pasting` and press Enter.
4. Copy the whole content of `bannerVueling.js`, paste it into the Console and press Enter.
5. After 3 seconds, the pop-up slides in from the right.

---

## ✅ Features

- Pop-up created and inserted into the DOM entirely with JavaScript.
- CSS styles injected from the script itself.
- Design based on Vueling's colors and typography.
- Title, description, email field, subscribe button and close button.
- Real-time email format validation.
- The subscribe button is only enabled with a valid email and redirects to the [official newsletter page](https://www.vueling.com/es/servicios-vueling/mas-servicios-vueling/newsletter-vuela).
- Appears exactly 3 seconds after running the code.
- Slides in and out from the right side with a CSS transition.
- Does not duplicate if the script is run twice.

---

## 🎨 Design

| Element | Value |
|---|---|
| Yellow | `#FFF000` |
| Black | `#000000` |
| White | `#FFFFFF` |
| Light gray | `#CCCCCC` |
| Font | `VuelingPilcrow, Arial, sans-serif` |
| Button border radius | `1.375rem` |

Colors and font were taken from the Vueling website using the Chrome Inspector.

---

## 🧩 Code structure

| Function | What it does |
|---|---|
| `iniciarBannerVueling()` | Main function that contains all the code |
| `crearEstilos()` | Creates a `<style>` tag and adds it to the `<head>` |
| `crearPopup()` | Creates the pop-up HTML and adds it to the `<body>` |
| `validarEmail()` | Checks the email with a regular expression |
| `activarBoton()` / `desactivarBoton()` | Enable or disable the subscribe button |
| `mostrarPopup()` | Slides the pop-up in from the right |
| `cerrarPopup()` | Slides the pop-up out and removes it from the page |

---

## 🛠️ Technologies

- JavaScript (Vanilla JS)
- CSS (injected from JavaScript)
- Git and GitHub

---

## 🌿 Branches

The project was developed feature by feature, with one branch per step:

| Branch | Content |
|---|---|
| `feature/base-structure` | Base structure and configuration |
| `feature/css-styles` | CSS styles injected from JavaScript |
| `feature/popup-html` | Pop-up HTML elements and Vueling font |
| `feature/email-validation` | Email validation |
| `feature/timer-animation` | 3-second timer and slide-in animation |
| `feature/close-button` | Close button |
| `docs/readme` | Project documentation |

---

## 👩‍💻 Author

**Alba Ruiz de la Vega**
Higher Vocational Degree in Web Application Development (DAW)
CEI Centro de Estudios de Innovación, Seville
