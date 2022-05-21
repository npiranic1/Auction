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

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server is running on PORT: ${PORT}`));