function initVuelingBanner() {
  const popupId = "vy-newsletter-popup";
  const stylesId = "vy-newsletter-styles";
  const newsletterUrl = "https://www.vueling.com/es/servicios-vueling/mas-servicios-vueling/newsletter-vuela";
  const delay = 3000;
  const animationDuration = 500;

  const yellow = "#FFF000";
  const black = "#000000";
  const white = "#FFFFFF";
  const lightGray = "#CCCCCC";
  const buttonRadius = "1.375rem";
  const font = "VuelingPilcrow, Arial, sans-serif";
  const emailRegex = /^[\w.+-]+@[\w-]+\.[\w.-]+$/;

  if (document.getElementById(popupId)) {
    console.log("El banner ya está en la página.");
    return;
  }

  function createStyles() {
    const styles = document.createElement("style");
    styles.id = stylesId;
    styles.textContent = `
      #${popupId} {
        position: fixed;
        right: 24px;
        bottom: 24px;
        z-index: 9999;
        width: 360px;
        padding: 28px 24px 24px;
        box-sizing: border-box;
        background-color: ${white};
        color: ${black};
        border-top: 6px solid ${yellow};
        border-radius: 1rem;
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.25);
        font-family: ${font};
        transform: translateX(120%);
        transition: transform ${animationDuration}ms ease-out;
      }

      #${popupId} h2 {
        margin: 0 0 10px;
        font-size: 22px;
        text-transform: uppercase;
      }

      #${popupId} p {
        margin: 0 0 16px;
        font-size: 15px;
        line-height: 1.5;
      }

      #${popupId} input {
        width: 100%;
        padding: 12px;
        box-sizing: border-box;
        font-family: ${font};
        font-size: 15px;
        border: 2px solid ${lightGray};
        border-radius: 8px;
      }

      #${popupId} a {
        display: block;
        margin-top: 16px;
        padding: 14px;
        text-align: center;
        text-decoration: none;
        font-weight: bold;
        color: ${black};
        background-color: ${yellow};
        border-radius: ${buttonRadius};
        text-transform: uppercase;
      }

      #${popupId} button {
        position: absolute;
        top: 10px;
        right: 12px;
        border: none;
        background: none;
        font-size: 22px;
        font-family: ${font};
        cursor: pointer;
      }
    `;
    document.head.appendChild(styles);
  }

  function createPopup() {
    const popup = document.createElement("div");
    popup.id = popupId;

    const closeButton = document.createElement("button");
    closeButton.textContent = "✕";

    const title = document.createElement("h2");
    title.textContent = "¡Vuela por menos con nuestra newsletter!";

    const description = document.createElement("p");
    description.textContent = "Suscríbete y recibe antes que nadie nuestras ofertas exclusivas, descuentos en vuelos y las mejores ideas para tu próximo viaje.";

    const emailInput = document.createElement("input");
    emailInput.type = "email";
    emailInput.placeholder = "Tu correo electrónico";

    const message = document.createElement("p");
    message.style.marginTop = "8px";
    message.style.fontSize = "13px";

    const subscribeButton = document.createElement("a");
    subscribeButton.href = newsletterUrl;
    subscribeButton.textContent = "Quiero suscribirme";
    disableButton(subscribeButton);

    popup.appendChild(closeButton);
    popup.appendChild(title);
    popup.appendChild(description);
    popup.appendChild(emailInput);
    popup.appendChild(message);
    popup.appendChild(subscribeButton);

    emailInput.addEventListener("input", () => {
      validateEmail(emailInput, message, subscribeButton);
    });
    closeButton.addEventListener("click", () => {
      closePopup(popup);
    });
    document.body.appendChild(popup);
    return popup;
}

  function validateEmail(emailInput, message, subscribeButton) {
    const email = emailInput.value.trim();

    if (email === "") {
      emailInput.style.borderColor = lightGray;
      message.textContent = "";
      disableButton(subscribeButton);
    } else if (emailRegex.test(email)) {
      emailInput.style.borderColor = "green";
      message.style.color = "green";
      message.textContent = "Email válido";
      enableButton(subscribeButton);
    } else {
      emailInput.style.borderColor = "red";
      message.style.color = "red";
      message.textContent = "Introduce un email válido (ejemplo@correo.com)";
      disableButton(subscribeButton);
    }
  }

  function enableButton(subscribeButton) {
    subscribeButton.style.opacity = "1";
    subscribeButton.style.pointerEvents = "auto";
  }

  function disableButton(subscribeButton) {
    subscribeButton.style.opacity = "0.5";
    subscribeButton.style.pointerEvents = "none";
  }

  function showPopup(popup) {
    popup.style.transform = "translateX(0)";
  }

  function closePopup(popup) {
    popup.style.transform = "translateX(120%)";

    setTimeout(() => {
      popup.remove();
      document.getElementById(stylesId).remove();
    }, animationDuration);
  }

createStyles();
    const popup = createPopup();
  setTimeout(() => {
    showPopup(popup);
  }, delay);
}

initVuelingBanner();
