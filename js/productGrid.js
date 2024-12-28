import { createElement } from './funcionesExtras.js';
import { cartState } from './cart.js';

// Renderizar todos los productos al cargar la página
const productGrid = document.getElementById('product-grid');

// Input de búsqueda
const searchInput = document.getElementById('search-box');



// Lista de productos
let products = [];

// Función para obtener los productos desde un archivo JSON
async function fetchProducts() {
  try {
    const response = await fetch('http://127.0.0.1:5500/shopFundas/product.json');
    if (!response.ok) {
      throw new Error('Error al cargar los productos');
    }
    products = await response.json();
    renderAllProducts();
  } catch (error) {
    console.error(error);
    productGrid.innerHTML = '<p>Error al cargar los productos. Inténtalo más tarde.</p>';
  }
}


export function renderProductGrid(product = ' ' ) {

  const productCard = createElement("div", { className: "product-card" });

  const img = createElement("img", {
    attributes: { src: product.image, alt: product.title }
  });
  const description = createElement("p", { textContent: product.description });
  
  const title = createElement("h3", { textContent: product.title });

  const category = createElement("span", {
    className: "category",
    textContent: product.category
  });

  const priceTag = createElement("div", {
    className: "price",
    textContent: `$${product.price.toFixed(2)}`
  });

  const priceTwo= createElement("p", {textContent: ` $ ${ product.price}` });
  const details = createElement("div", { className: "details" });

  const addToCartButton = createElement("button", {
    className: "add-to-cart",
    textContent: "Agregar al Carrito"
  });

  addToCartButton.addEventListener("click", () => {
    cartState.addToCart(product);
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: `Se Agrego ${product.title} al carrito.`,
      showConfirmButton: false,
      timer: 1500
    });
  });


  details.append(title, description, category,priceTwo, addToCartButton );
  productCard.append(img, priceTag, details);

  return productCard; 
  }
  
// Renderizar todos los productos al cargar la página
function renderAllProducts() {
  productGrid.innerHTML = ''; // Limpiar la cuadrícula
  products.forEach(product => {
    const productCard = renderProductGrid(product);
    productGrid.appendChild(productCard);

  });
}

// Función para buscar productos
function searchRecords() {
  const searchTerm = searchInput.value.trim().toLowerCase();

  // Filtrar los productos que coincidan con el término de búsqueda
  const filteredProducts = products.filter(product => {
    const title = product.title ? product.title.toLowerCase() : '';
    const description = product.description ? product.description.toLowerCase() : '';
    return title.includes(searchTerm) || description.includes(searchTerm);
  });


  productGrid.innerHTML = ''; // Limpiar la cuadrícula

  if (filteredProducts.length === 0) {
    // Mostrar mensaje si no hay resultados
    productGrid.innerHTML = '<p>No se encontraron productos que coincidan con la búsqueda.</p>';
    return;
  }

  // Renderizar los productos filtrados
  filteredProducts.forEach(product => {
    const productCard = renderProductGrid(product);
    productGrid.appendChild(productCard);
  });
}

if (searchInput && productGrid) {
  // Inicializar el renderizado de productos
 renderAllProducts();

  // Agregar evento de búsqueda
  searchInput.addEventListener("input", () => {
    const searchTerm = searchInput.value ? searchInput.value.trim() : '';
    if (searchTerm.length >= 3 || searchTerm.length === 0) {
      searchRecords();
    }
  });
}

// Inicializar renderizado de productos
/* renderAllProducts(); */
fetchProducts();