import {products} from "./db/products.js";

const productContainer = document.getElementById("products");

for(let product of products){
    // Html using JavaScript
    const cardContainer = document.createElement("div");
    cardContainer.classList.add("card", "card-vertical", "d-flex", "direction-column", "relative", "shadow");
    cardContainer.innerText="Product Card";
    productContainer.appendChild(cardContainer);
}