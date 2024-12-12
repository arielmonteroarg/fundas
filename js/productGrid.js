import { createElement } from './funcionesExtras.js';
import { cartState } from './cart.js';

const products = [
    { id: 1, title: 'RIDING PHOTO',category: "Funda", description: 'Phone Case - Fox', price: 10.00, image: './img/img1.webp' },
    { id: 2, title: 'Samsung',category: "Funda",     description: 'Phone Case - Fox', price: 9.99, image: './img/img2.webp' },
      { id: 3, title: 'FASTHOUSE',category: "Funda", description: 'Phone Case - Fox', price: 9.99, image: './img/img3.webp' },

      { id: 4, title: 'Samsung',category: "Funda", description: 'Phone Case - Fox', price: 29.99, image: './img/img4.webp' },
      { id: 5, title: 'Xiaomi',category: "Funda",     description: 'Phone Case - Fox', price: 44.99, image: './img/img5.webp' },
        { id: 6, title: 'Oppo',category: "Funda", description: 'Phone Case - Fox', price: 34.99, image: './img/img6.webp' },

      { id: 7, title: 'Motorola',category: "Funda", description: 'Phone Case - Fox', price: 34.99, image: './img/img7.webp' },
      { id: 8, title: 'Huawei',category: "Funda", description: 'Phone Case - Fox', price: 44.99, image: './img/img8.webp' },
      { id: 9, title: 'Realme',category: "Funda", description: 'Phone Case - Fox', price: 29.99, image: './img/img9.webp' },
    ];

    // Renderizar todos los productos al cargar la página
     const productGrid = document.getElementById('product-grid');

     // Input de búsqueda
const searchInput = document.getElementById('search-box');

/* 
     if (productGrid) {
      productGrid.innerHTML = ''; // Limpiar la cuadrícula
      products.forEach(product => {
        const productCard = renderProductGrid(product);
        productGrid.appendChild(productCard);
      });
    } else {
      console.error("El contenedor de productos no se encontró.");
    } */


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
renderAllProducts();
