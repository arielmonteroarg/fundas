export function renderFooter() {
    const footer = document.getElementById('footer');
    footer.innerHTML = `   
    <div class="social-media">
  <h3>SIGUENOS EN NUESTRAS REDES</h3>
  <div class="social-icons">
    <a href="https://facebook.com" target="_blank" aria-label="Facebook">
      <i class="fab fa-facebook"></i>
    </a>
    <a href="https://twitter.com" target="_blank" aria-label="Twitter">
      <i class="fab fa-twitter"></i>
    </a>
    <a href="https://instagram.com" target="_blank" aria-label="Instagram">
      <i class="fab fa-instagram"></i>
    </a>
    <a href="https://linkedin.com" target="_blank" aria-label="LinkedIn">
      <i class="fab fa-linkedin"></i>
    </a>
  </div>
</div>

    <div class="footer-content">
      <div class="footer-section">
        <h3>PRODUCTOS</h3>
        <ul>
          <li><a href="#">Fundas Celulares </a></li>
          <li><a href="#">Pendientes de Auto </a></li>
          <li><a href="#">Llaveros</a></li>
          <li><a href="#">Stickers</a></li>
          <li><a href="#">Stickers para PC</a></li>
          <li><a href="#">Seguimiento de Pedido</a></li>
        </ul>
      </div>
      <div class="footer-section">
        <h3>INFORMACION</h3>
        <ul>
          <li><a href="#">FAQ</a></li>
        </ul>
      </div>
      <div class="footer-section">
      <h3>CONTACTO</h3>
        <ul class="contact-info">
          <li><i class="fas fa-phone"></i> +54 (9) 98134-4547</li>
          <li><i class="fas fa-envelope"></i> micarrito@gmail.com</li>
          <li><i class="fas fa-map-marker-alt"></i> San Martin, 144 - CABA/Buenos Aires - Argentina</li>
        </ul>
      </div>
    </div>
    
    <div class="footer-bottom">
      <p>© 2024 - All rights reserved.</p>
    </div>
`;

  }
 

  renderFooter(); 
  
/*   
  <div class="stay-in-touch">
      <h3>STAY IN TOUCH</h3>
      <form class="footer-form">
        <input type="email" placeholder="Enter your email address">
        <button type="submit">SUBMIT</button>
      </form>
    </div> */