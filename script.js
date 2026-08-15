const fs = require("fs");
const path = require("path");

const filePath = path.join(__dirname, "../data/products.json");

function getProducts() {
    const data = fs.readFileSync(filePath, "utf-8");
    return JSON.parse(data);
}

function showProducts() {
    const products = getProducts();

    console.log("\n========== PRODUCT MENU ==========")

    products.forEach(product => {
        console.log(
            `${product.id}. ${product.name} | ${product.category} | ৳${product.price} | Stock: ${product.stock}`
        );
    });
}

module.exports = {
    getProducts,
    showProducts
};
function addProduct(name, category, price, stock) {
    const products = getProducts();

    const newProduct = {
        id: products.length > 0
            ? products[products.length - 1].id + 1
            : 1,
        name: name,
        category: category,
        price: price,
        stock: stock
    };

    products.push(newProduct);

    fs.writeFileSync(
        filePath,
        JSON.stringify(products, null, 2)
    );

    console.log("\nProduct added successfully! ✅");
}
