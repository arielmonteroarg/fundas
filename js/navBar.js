
  // Agregar esta función en tu archivo navbar.js
  function setupHeaderTop() {
    const closeButton = document.querySelector('.close-button');
    const headerTop = document.querySelector('.header-top');
    
    if (closeButton && headerTop) {
        closeButton.addEventListener('click', () => {
            headerTop.style.display = 'none';
        });
    }
}

export function renderNavbar() {
    const navbar = document.getElementById('navbar');
    navbar.innerHTML = `
      <div class="header-top">Descuentos Por ordenes superiores a $15000.00 🚚✈️🌎 
        <button class="close-button" aria-label="Cerrar mensaje">×</button>
        </div>
   
    <nav class="nav-container">
     <div class="logo"><a href="index.html" ><img src="img/logo.png" alt="logo"></a></div>
        <div class="search-box">
            <input type="search" placeholder="Buscar productos..." aria-label="Buscar">
        </div>
        
        
        <div class="nav-icons">
            <a href="login.html" class="user-icon">
                <i class="fas fa-user"></i><span class="login-text">Sign in / Create account</span>
            </a>
                <div >
                    <a href="addCart.html" class="cart-icon">
                        <i class="fas fa-shopping-cart"></i>
                        <span id="contador-carrito" class="contador">(0)</span>
                    </a>
                 </div>
        </div>
    </nav>
`;
 setupHeaderTop();
  }
 
  renderNavbar();

