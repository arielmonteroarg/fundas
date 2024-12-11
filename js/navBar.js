  
 
  // Agregar esta función en tu archivo navbar.js
  function setupHeaderTop() {
    const closeButton = document.querySelector('.close-button');
    const headerTop = document.querySelector('.header-top');
    const slider = document.querySelector('.vtex-slider-layout-0-x-sliderTrack');
    const slides = document.querySelectorAll('.vtex-slider-layout-0-x-slide');
  
    let currentIndex = 0; // Índice actual del slider
    const slideCount = slides.length;
  
    // Duplicar los primeros slides al final para un efecto continuo
    slides.forEach(slide => {
      const clonedSlide = slide.cloneNode(true);
      slider.appendChild(clonedSlide);
    });
  
    if (closeButton && headerTop) {
      closeButton.addEventListener('click', () => {
        headerTop.style.display = 'none'; // Oculta la barra superior
      });
    }
  
    function moveToNextSlide() {
      const slideWidth = slides[0].offsetWidth; // Calcula el ancho de un slide
      currentIndex++;
      slider.style.transition = 'transform 0.5s ease-in-out';
      slider.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
  
      // Volver al inicio sin transición si se alcanza el final
      if (currentIndex === slideCount) {
        setTimeout(() => {
          slider.style.transition = 'none';
          currentIndex = 0;
          slider.style.transform = `translateX(0)`;
        }, 500); // El tiempo debe coincidir con la duración de la transición
      }
    }
  
    // Configura el slider para pasar automáticamente cada 3 segundos
    setInterval(moveToNextSlide, 2000);
  
    // Ajustar el slider al redimensionar la ventana
    window.addEventListener('resize', () => {
      const slideWidth = slides[0].offsetWidth;
      slider.style.transition = 'none'; // Evitar animación durante el ajuste
      slider.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
    });
  }




export function renderNavbar() {
    const navbar = document.getElementById('navbar');
    navbar.innerHTML = `
  <div class="header-top">
  <div class="header-top-left"></div> <!-- Columna vacía para balancear -->
  <div class="header-top-center">
    <button class="close-button" aria-label="Cerrar mensaje">×</button>
    <section aria-label="slider" class="vtex-slider-layout-0-x-sliderLayoutContainer">
      <div class="vtex-slider-layout-0-x-sliderTrackContainer">
        <div class="vtex-slider-layout-0-x-sliderTrack">
          <div class="vtex-slider-layout-0-x-slide">😜📢🤳Descuentos por órdenes superiores a $1000.00 🔥🔥🔥 😎😎⏳⏳⏳</div>
          <div class="vtex-slider-layout-0-x-slide">🚀🛍️ Descuento de temporada: ¡aprovecha ahora! 🕒💰</div>
          <div class="vtex-slider-layout-0-x-slide">🎉📣 Grandes descuentos en toda la tienda 💥🔥</div>  
        </div>     
      </div> 
    </section>
  </div>
  <div class="header-top-right"></div> <!-- Columna vacía para balancear -->
</div>
    <nav class="nav-container">
      <div class="logo"><a href="index.html"><img src="img/logo.png" alt="logo"></a></div>
      <div class="search-box">
        <input id="search-box" type="search" placeholder="Buscar productos..." aria-label="Buscar">
      </div>
      <div class="nav-icons">
        <a href="login.html" class="user-icon" id="user-link">
          <i class="fas fa-user"></i><span class="login-text" id="login-text">Sign in / Create account</span>
        </a>
        <div>
          <a href="addCart.html" class="cart-icon">
            <i class="fas fa-shopping-cart"></i>
            <span id="contador-carrito" class="contador">(0)</span>
          </a>
        </div>
      </div>
    </nav>
`;

      const storedUser = localStorage.getItem('username') || "";
      const storedEmail = localStorage.getItem('email') || "";
      //const storedPassword = localStorage.getItem('password') || "";
    // Verificar si los datos del usuario están en localStorage

    if (storedUser && storedEmail) {
      // Cambiar el texto del enlace de login para mostrar el nombre y el correo
      //const userLink = document.getElementById('user-link');
      const loginText = document.getElementById('login-text');
      loginText.textContent = `${storedUser} (${storedEmail})`; // Muestra el nombre y email
        //userLink.href = "profile.html"; // Redirige al perfil en lugar de login
    } else {
      // Si no existen o están vacíos, dejar el texto por defecto
      const loginText = document.getElementById('login-text');
      loginText.textContent ="Sign in / Create account"; // Valor predeterminado
    
    }



 setupHeaderTop();
  }
 
  renderNavbar();
  document.addEventListener("DOMContentLoaded", () => {

 
  });


