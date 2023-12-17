// LED products list with prices
const ledProducts = [
  { id: 1, name: 'LED Light', price: 800 },
  { id: 2, name: 'Panel Light', price: 1200 },
  { id: 3, name: 'LED Strips', price: 1000 },
  { id: 4, name: 'Downlights', price: 1500 }
];

// Function to display products on the webpage
function displayProducts() {
  const productsContainer = document.getElementById('products-container');

  ledProducts.forEach(product => {
    const productElement = document.createElement('div');
    productElement.classList.add('product');
    productElement.innerHTML = `
      <img src="${getImageUrl(product.name)}" alt="${product.name}">
      <h3>${product.name}</h3>
      <p class="price">Rs. ${product.price}</p>
      <button onclick="addToCart(${product.id}, '${product.name}', ${product.price})">Add to Cart</button>
    `;
    productsContainer.appendChild(productElement);
  });
}

// Function to get image URL based on product name
function getImageUrl(productName) {
  // Replace this with the actual path or URL of your images
  return `${productName.toLowerCase().replace(' ', '_')}.jpg`;
}

// Function to add products to the cart
function addToCart(productId, productName, productPrice) {
  alert(`Added ${productName} to cart. Price: Rs. ${productPrice}`);
  // Implement your cart logic here, e.g., update a shopping cart object or make an API call.
}

// Display products when the page loads
document.addEventListener('DOMContentLoaded', displayProducts);
