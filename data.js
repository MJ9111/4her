// define products data
const products = [
  { id: 1, name: "Product 1", description: "This is product 1", price: 10.99, image: "product1.jpg", category: "Tops" },
  { id: 2, name: "Product 2", description: "This is product 2", price: 9.99, image: "product2.jpg", category: "Dresses" },
  { id: 3, name: "Product 3", description: "This is product 3", price: 12.99, image: "product3.jpg", category: "Skirts" },
  // ...
];

// define categories data
const categories = [
  { id: 1, name: "Tops" },
  { id: 2, name: "Dresses" },
  { id: 3, name: "Skirts" },
  // ...
];

// define users data
const users = [
  { id: 1, email: "user1@example.com", password: "password1", name: "User 1" },
  { id: 2, email: "user2@example.com", password: "password2", name: "User 2" },
  // ...
];

// define orders data
const orders = [
  { id: 1, userId: 1, orderDate: "2023-03-01" },
  { id: 2, userId: 1, orderDate: "2023-03-15" },
  // ...
];

// define order items data
const orderItems = [
  { id: 1, orderId: 1, productId: 1, quantity: 2 },
  { id: 2, orderId: 1, productId: 2, quantity: 1 },
  // ...
];

// function to generate product grid
function generateProductGrid() {
  const productGrid = document.querySelector(".product-grid");
  productGrid.innerHTML = "";
  products.forEach((product) => {
      const productCard = document.createElement("div");
      productCard.innerHTML = `
          <img src="${product.image}" alt="${product.name}">
          <h2>${product.name}</h2>
          <p>${product.description}</p>
          <p>Price: ${product.price}</p>
          <button>Add to Cart</button>
      `;
      productGrid.appendChild(productCard);
  });
}

// function to generate product list
function generateProductList() {
  const productList = document.querySelector(".product-list");
  productList.innerHTML = "";
  products.forEach((product) => {
      const productListItem = document.createElement("li");
      productListItem.innerHTML = `
          <img src="${product.image}" alt="${product.name}">
          <h2>${product.name}</h2>
          <p>${product.description}</p>
          <p>Price: ${product.price}</p>
      `;
      productList.appendChild(productListItem);
  });
}

//