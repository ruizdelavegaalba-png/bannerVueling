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
        font-family: inherit;
        transform: translateX(120%);
        transition: transform ${duracionAnimacion}ms ease-out;
      }

      #${idPopup} h2 {
        margin: 0 0 10px;
        font-size: 22px;
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
        font-family: inherit;
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
      }

      #${idPopup} button {
        position: absolute;
        top: 10px;
        right: 12px;
        border: none;
        background: none;
        font-size: 22px;
        cursor: pointer;
      }
    `;
    document.head.appendChild(estilos);
  }

  crearEstilos();
  console.log("Estilos del banner cargados");
}

iniciarBannerVueling();
