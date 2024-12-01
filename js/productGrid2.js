import { createElement } from './funcionesExtras.js';
import { cartState } from './cart.js';

export function renderProductGrid() {
    const products = [
        { id: 1, title: 'RIDING PHOTO', description: 'Phone Case - Fox', price: '$34.99 - $44.99', image: './img/img1.webp' },
        { id: 2, title: 'YOUR PHOTO', description: 'Phone Case - Fox', price: '$34.99 - $44.99', image: './img/img2.webp' },
        { id: 3, title: 'FASTHOUSE', description: 'Phone Case - Fox', price: '$29.99 - $39.99', image: './img/img3.webp' },      
        
        { id: 4, title: 'RIDING PHOTO', description: 'Phone Case - Fox', price: '$34.99 - $44.99', image: './img/img1.webp' },
        { id: 5, title: 'YOUR PHOTO', description: 'Phone Case - Fox', price: '$34.99 - $44.99', image: './img/img2.webp' },
        { id: 6, title: 'FASTHOUSE', description: 'Phone Case - Fox', price: '$29.99 - $39.99', image: './img/img3.webp' },

        { id: 7, title: 'RIDING PHOTO', description: 'Phone Case - Fox', price: '$34.99 - $44.99', image: './img/img1.webp' },
        { id: 8, title: 'YOUR PHOTO', description: 'Phone Case - Fox', price: '$34.99 - $44.99', image: './img/img2.webp' },
        { id: 9, title: 'FASTHOUSE', description: 'Phone Case - Fox', price: '$29.99 - $39.99', image: './img/img3.webp' },
    ];
  
    const productGrid = document.getElementById('product-grid');
    products.forEach((product) => {
      const productCard = document.createElement('div');
      productCard.className = 'product-card';
      productCard.innerHTML = `
        <img src="${product.image}" alt="${product.title}">
        <span>${product.description}</span>
        <h3>${product.title}</h3>
        <p>${product.price}</p>
        <button>Customize Now</button>
      `;
      productGrid.appendChild(productCard);
    });
  }
  
  renderProductGrid();
