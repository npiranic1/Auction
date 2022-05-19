const express = require("express");
const bodyParser = require("body-parser");
const path = require('path')
const app = express();

//
const urlencodedParser = bodyParser.urlencoded({ extended: false });
app.use(urlencodedParser);
app.use(bodyParser.json());

// Static files
app.use(express.static(path.join(__dirname, "public")));

const sequelize = require("./config/db");
const { Sequelize } = require("sequelize");

const db = require('./config/db');
db.sync(() => console.log(`Tables created!`));

// import controller
const productController = require("./controllers/productController");

// app route for product Details
// app.get("/products/random", productController.getProductDetails);
// app route for new arrivals testing
app.get("products/new-arrivals", productController.getNewArrivals);
// app route for last chance testing
app.get("products/last-chance", productController.getLastChance);


const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Server is running on PORT: ${PORT}`));