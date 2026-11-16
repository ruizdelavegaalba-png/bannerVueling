function iniciarBannerVueling() {
  const idPopup = "vy-newsletter-popup";
  const idEstilos = "vy-newsletter-estilos";
  const urlNewsletter = "https://www.vueling.com/es/servicios-vueling/mas-servicios-vueling/newsletter-vuela";
  const retardo = 3000;
  const duracionAnimacion = 500;

  const amarillo = "#FFF000";
  const negro = "#000000";
  const blanco = "#FFFFFF";
  const grisClaro = "#CCCCCC";
  const radioBoton = "1.375rem";
  const fuente = "VuelingPilcrow, Arial, sans-serif";

  if (document.getElementById(idPopup)) {
    console.log("El banner ya está en la página.");
    return;
  }

  function crearEstilos() {
    const estilos = document.createElement("style");
    estilos.id = idEstilos;
    estilos.textContent = `
      #${idPopup} {
        position: fixed;
        right: 24px;
        bottom: 24px;
        z-index: 9999;
        width: 360px;
        padding: 28px 24px 24px;
        box-sizing: border-box;
        background-color: ${blanco};
        color: ${negro};
        border-top: 6px solid ${amarillo};
        border-radius: 1rem;
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.25);
        font-family: ${fuente};
        transform: translateX(120%);
        transition: transform ${duracionAnimacion}ms ease-out;
      }

      #${idPopup} h2 {
        margin: 0 0 10px;
        font-size: 22px;
        text-transform: uppercase;
      }

      #${idPopup} p {
        margin: 0 0 16px;
        font-size: 15px;
        line-height: 1.5;
      }

      #${idPopup} input {
        width: 100%;
        padding: 12px;
        box-sizing: border-box;
        font-family: ${fuente};
        font-size: 15px;
        border: 2px solid ${grisClaro};
        border-radius: 8px;
      }

      #${idPopup} a {
        display: block;
        margin-top: 16px;
        padding: 14px;
        text-align: center;
        text-decoration: none;
        font-weight: bold;
        color: ${negro};
        background-color: ${amarillo};
        border-radius: ${radioBoton};
        text-transform: uppercase;
      }

      #${idPopup} button {
        position: absolute;
        top: 10px;
        right: 12px;
        border: none;
        background: none;
        font-size: 22px;
        font-family: ${fuente};
        cursor: pointer;
      }
    `;
    document.head.appendChild(estilos);
  }

  function crearPopup() {
    const popup = document.createElement("div");
    popup.id = idPopup;

    const botonCerrar = document.createElement("button");
    botonCerrar.textContent = "✕";

    const titulo = document.createElement("h2");
    titulo.textContent = "¡Vuela por menos con nuestra newsletter!";

    const texto = document.createElement("p");
    texto.textContent = "Suscríbete y recibe antes que nadie nuestras ofertas exclusivas, descuentos en vuelos y las mejores ideas para tu próximo viaje.";

    const inputEmail = document.createElement("input");
    inputEmail.type = "email";
    inputEmail.placeholder = "Tu correo electrónico";

    const mensaje = document.createElement("p");

    const botonSuscribir = document.createElement("a");
    botonSuscribir.href = urlNewsletter;
    botonSuscribir.textContent = "Quiero suscribirme";

    popup.appendChild(botonCerrar);
    popup.appendChild(titulo);
    popup.appendChild(texto);
    popup.appendChild(inputEmail);
    popup.appendChild(mensaje);
    popup.appendChild(botonSuscribir);

    document.body.appendChild(popup);
    return popup;
}

crearEstilos();
    const popup = crearPopup();
    console.log("Pop-up creado");
}

iniciarBannerVueling();
