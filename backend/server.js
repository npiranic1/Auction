const express = require("express");
const bodyParser = require("body-parser");
const path = require('path');
const cors = require('cors');

const {db} = require('./config/db');
// import controllers 
const product = require("./controllers/product");
const bid = require("./controllers/bid");
const user = require("./controllers/user");

const urlencodedParser = bodyParser.urlencoded({ extended: false });
const app = express();
app.use(express.static(path.join(__dirname, "public")));
app.use(urlencodedParser);
app.use(bodyParser.json());
// for communication beetween servers
app.use(cors());
// routes
app.use(product);
app.use(bid);
app.use(user);

db.sync(() => console.log(`Tables created!`));

const PORT = process.env.PORT || 3030;
app.listen(PORT, () => console.log(`Server is running on PORT: ${PORT}`));