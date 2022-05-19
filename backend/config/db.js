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
/* User.sync();
Product.sync();
Image.sync();
Category.sync(); */

// link user and product
User.hasMany(Product, {
   foreignKey: "user_id",
});
Product.belongsTo(User);

// link product and category
Category.hasMany(Product, {
   foreignKey: "category_id"
});
Product.belongsTo(Category);

// link product and image
Product.hasMany(Image, {
   foreignKey: 'product_id'
 });
Image.belongsTo(Product);

db.sync(() => console.log(`Tables created!`));

module.exports = db;