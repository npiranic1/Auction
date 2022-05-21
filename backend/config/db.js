const Sequelize = require("sequelize");

const db = new Sequelize("auction", "root", "", {
   host: "localhost",
   dialect: "mysql"
});

db.authenticate().then(()=> {
   console.log('Connection has been established successfully.');
}).catch(err => {
   console.log('error:' + err);
})

const Product = require('../models/Product')(db, Sequelize);
const Image = require('../models/Image')(db, Sequelize);
const Category = require('../models/Category')(db, Sequelize);
const User = require('../models/User')(db, Sequelize);
const Residence = require("../models/Residence")(db, Sequelize);
const Bid = require("../models/Bid")(db, Sequelize);
const Wishlist = require("../models/Wishlist")(db, Sequelize);

// link user and product
User.hasMany(Product, {
   foreignKey: "user_id",
   sourceKey: "id"
});
Product.belongsTo(User, {
	foreignKey: "user_id",
	sourceKey: "id"
});

// link product and category
Category.hasMany(Product, {
   foreignKey: "category_id",
   sourceKey: "id"
});
Product.belongsTo(Category, {
	foreignKey: "category_id",
	sourceKey: "id"
});

// link product and image
Product.hasMany(Image, {
   as: "images",
   foreignKey: 'product_id',
   sourceKey: "id"
 });
Image.belongsTo(Product, {
   foreignKey: "product_id",
   sourceKey: "id"
});

// link user and residence
Residence.hasMany(User, {
	foreignKey: "residence_id",
	sourceKey: "id"
});
User.belongsTo(Residence, {
	foreignKey: "residence_ id",
	sourceKey: "id"
});

// link bid 
// link wishlist

db.sync(() => console.log(`Tables created!`));

module.exports = { db, User, Image, Product, Category, Residence, Bid, Wishlist };