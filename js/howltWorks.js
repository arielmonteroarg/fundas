const processIcons = {
  package: "https://cdn-icons-png.flaticon.com/512/1554/1554591.png",
  palette: "https://cdn-icons-png.flaticon.com/512/1940/1940922.png",
  cart: "https://cdn-icons-png.flaticon.com/512/833/833314.png",
  truck: "https://cdn-icons-png.flaticon.com/512/2721/2721407.png",
  box: "https://cdn-icons-png.flaticon.com/512/1554/1554593.png"
};

export function renderHowItWorks() {
  const howItWorks = document.getElementById('how-it-works');
  howItWorks.className = 'how-it-works';
  howItWorks.innerHTML = `
      <h2>¿CÓMO FUNCIONA?</h2>
      <div class="steps-container">
        <div class="step">
          <img src="${processIcons.package}" class="step-icon" alt="Paquete">
          <p>ELIGE TU DISEÑO FAVORITO</p>
        </div>
        <div class="step">
          <img src="${processIcons.palette}" class="step-icon" alt="Paleta">
          <p>PERSONALÍZALO A TU GUSTO</p>
        </div>
        <div class="step">
          <img src="${processIcons.cart}" class="step-icon" alt="Carrito">
          <p>AGREGAR AL CARRITO Y PAGAR</p>
        </div>
        <div class="step">
          <img src="${processIcons.truck}" class="step-icon" alt="Camión">
          <p>PEDIDO ENVIADO A PRODUCCIÓN</p>
        </div>
        <div class="step">
          <img src="${processIcons.box}" class="step-icon" alt="Caja">
          <p>PEDIDO EMPACADO Y ENVIADO</p>
        </div>
      </div>
  `;
}

renderHowItWorks();