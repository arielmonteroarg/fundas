import { createElement } from './funcionesExtras.js';
import { updateCartCounter } from './cartCounter.js';
import { cartState } from './cart.js';

const paymentIcons = {
  paypal: "https://cdn.iconscout.com/icon/free/png-256/free-paypal-54-675727.png",
  mastercard: "https://cdn.iconscout.com/icon/free/png-256/free-mastercard-3521564-2944982.png",
  visa: "https://cdn.iconscout.com/icon/free/png-256/free-visa-credit-card-banking-emv-payment-card-32261.png",
  amex: "https://cdn.iconscout.com/icon/free/png-256/free-american-express-credit-card-banking-emv-payment-card-32262.png",
  applepay: "https://cdn.iconscout.com/icon/free/png-256/free-apple-pay-5822959-4875454.png",
  googlepay: "https://cdn.iconscout.com/icon/free/png-256/free-google-pay-2038779-1721670.png"
};
// Renderizar productos en el carrito
export function renderCartItems() {
  cartState.init(); // Inicializar desde localStorage

  const cartContainer = document.getElementById("cart-container");
  const cartTotalElement = document.getElementById("cart-total");

  // Limpiar contenedor antes de renderizar
  cartContainer.innerHTML = "`<h2>Productos</h2>`";

  // Si no hay productos en el carrito
  if (cartState.items.length === 0) {
    cartContainer.innerHTML = "<p>El carrito está vacío.</p>";
    cartTotalElement.textContent = "0.00";
    return;
  }
    // Contenedor principal
    const cartContent = createElement("div", { className: "cart-content" });
  
    // Sección de productos
    const productsSection = createElement("div", { className: "products-section" });
    productsSection.innerHTML = `<h2>Medios de Pago</h2>`;

  // Renderizar productos del carrito
  cartState.items.forEach((item) => {


    const cartItem = createElement("div", { className: "cart-item" });

    // Estructura de cada producto
    cartItem.innerHTML = `
      <div class="cart-item-image">
        <img src="${item.image}" alt="${item.title}" />
      </div>
      <div class="cart-item-info">
        <h3>${item.title}</h3>
        <p class="cart-item-price">$${item.price.toFixed(2)}</p>
        <div class="cart-item-quantity">
          <button class="decrease-quantity">-</button>
          <input type="text" value="${item.quantity}" class="quantity-input" />
          <button class="increase-quantity">+</button>
        </div>
        <p>Est. shipping <span>FREE</span></p>
        <p class="free-shipping-note">You get FREE SHIPPING!</p>
        <p class="cart-item-subtotal">Subtotal: $${(item.price * item.quantity).toFixed(2)}</p>
      </div><button class="remove-item">Eliminar</button>
    `;

    // Botón para eliminar el producto
    const removeButton = cartItem.querySelector(".remove-item");
    removeButton.addEventListener("click", () => {
      cartState.removeFromCart(item.id);
      renderCartItems(); // Re-renderizar después de eliminar
      Swal.fire({
        position: "top-end",
        icon: "error",
        title: "Se Elimino Un item",
        showConfirmButton: false,
        timer: 1500
      });
    });

    // Botones para aumentar/disminuir cantidad
    const decreaseButton = cartItem.querySelector(".decrease-quantity");
    const increaseButton = cartItem.querySelector(".increase-quantity");
    const quantityInput = cartItem.querySelector(".quantity-input");

    // Disminuir cantidad
    decreaseButton.addEventListener("click", () => {
      if (item.quantity > 1) {
        item.quantity--;
        cartState.updateItem(item.id, item.quantity);
        renderCartItems();
        Toastify({
          text: "Producto eliminado del carrito",
          duration: 1500,
          gravity: "top",
          position: "right",
             style: {
            background: "linear-gradient(to right, #ff5f6d, #ffc3a0)"  // Usando style.background
          }
        }).showToast();
      }
    });

    // Aumentar cantidad
    increaseButton.addEventListener("click", () => {
      item.quantity++;
      cartState.updateItem(item.id, item.quantity);
      renderCartItems();
      Toastify({
        text: "Producto agregado al carrito!",
        duration: 1500,
        gravity: "top",
        position: "right",
        style: {
          background: "linear-gradient(to right, #00b09b, #96c93d)" // Usando style.background
        }
      }).showToast();
    });

    // Cambiar cantidad manualmente
    quantityInput.addEventListener("change", (event) => {
      const newQuantity = parseInt(event.target.value, 10);
      if (!isNaN(newQuantity) && newQuantity > 0) {
        item.quantity = newQuantity;
        cartState.updateItem(item.id, item.quantity);
        renderCartItems();
      } else {
        event.target.value = item.quantity; // Restaurar el valor anterior
      }
    });
    cartContainer.appendChild(cartItem);
  });


    productsSection.innerHTML = `
      <div class="payment-methods">
        <h2>Medios de pago incluido</h2>
        <div class="payment-icons">
       <img src="${paymentIcons.paypal}" alt="PayPal">
        <img src="${paymentIcons.mastercard}" alt="Mastercard">
        <img src="${paymentIcons.visa}" alt="Visa">
        <img src="${paymentIcons.amex}" alt="American Express">
        <img src="${paymentIcons.applepay}" alt="Apple Pay">
        <img src="${paymentIcons.googlepay}" alt="Google Pay">
        </div>
      </div>
    `;





      // Mostrar el total 
      cartContent.appendChild(productsSection);
      cartContainer.appendChild(cartContent); 
  cartTotalElement.textContent = cartState.total.toFixed(2);
}
// Renderizar los productos al cargar la página
document.addEventListener("DOMContentLoaded", () => {
  cartState.init(); // Inicializa el carrito al cargar
  renderCartItems(); // Renderiza los productos
  updateCartCounter();
});
