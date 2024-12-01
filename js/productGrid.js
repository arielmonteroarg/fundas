import { createElement } from './funcionesExtras.js';
import { cartState } from './cart.js';

    const products = [
      { id: 1, title: 'RIDING PHOTO',category: "Funda", description: 'Phone Case - Fox', price: 29.99, image: './img/img1.webp' },
      { id: 2, title: 'YOUR PHOTO',category: "Funda",     description: 'Phone Case - Fox', price: 44.99, image: './img/img2.webp' },
        { id: 3, title: 'FASTHOUSE',category: "Funda", description: 'Phone Case - Fox', price: 34.99, image: './img/img3.webp' },

        { id: 4, title: 'RIDING PHOTO',category: "Funda", description: 'Phone Case - Fox', price: 29.99, image: './img/img1.webp' },
        { id: 5, title: 'YOUR PHOTO',category: "Funda",     description: 'Phone Case - Fox', price: 44.99, image: './img/img2.webp' },
          { id: 6, title: 'FASTHOUSE',category: "Funda", description: 'Phone Case - Fox', price: 34.99, image: './img/img3.webp' },

        { id: 7, title: 'RIDING PHOTO',category: "Funda", description: 'Phone Case - Fox', price: 34.99, image: './img/img1.webp' },
        { id: 8, title: 'YOUR PHOTO',category: "Funda", description: 'Phone Case - Fox', price: 44.99, image: './img/img2.webp' },
        { id: 9, title: 'FASTHOUSE',category: "Funda", description: 'Phone Case - Fox', price: 29.99, image: './img/img3.webp' },
    ];

     const productGrid = document.getElementById('product-grid');

     if (productGrid) {
      products.forEach(product => {
        const productCard = renderProductGrid(product);
        productGrid.appendChild(productCard);
      });
    } else {
      console.error("El contenedor de productos no se encontró.");
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

  const priceTwo= createElement("p", { textContent: product.price });
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
  
  renderProductGrid();
