const express = require("express");
const bodyParser = require("body-parser");
const path = require('path');

const {db} = require('./config/db');
// import controllers 
const product = require("./controllers/product");

const urlencodedParser = bodyParser.urlencoded({ extended: false });
const app = express();
app.use(express.static(path.join(__dirname, "public")));
app.use(urlencodedParser);
app.use(bodyParser.json());
// routes
app.use(product);

db.sync(() => console.log(`Tables created!`));

// app route for product Details
/* app.get("/products/random", product.getProductDetails);
// app route for new arrivals testing
app.get("products/new-arrivals", product.getNewArrivals);
// app route for last chance testing
app.get("products/last-chance", product.getLastChance); */


const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Server is running on PORT: ${PORT}`));