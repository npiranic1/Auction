const Sequelize = require("sequelize");
const dotenv = require("dotenv")
// access to .env variables
dotenv.config()

const db = new Sequelize(process.env.DATABASE, process.env.USER, process.env.PASSWORD, {
   host: process.env.HOST,
   dialect: "mysql",
   logging: console.log
}); 
/*
const db = new Sequelize("auction", "root", "auctionpass", {
	host: "localhost",
	dialect: "mysql"
});*/

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
   as: "category",
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
   foreignKey: "residence_id",
	sourceKey: "id"
});

// link bid and user
User.hasMany(Bid, {
    foreignKey: "user_id",
	sourceKey: "id"
});
Bid.belongsTo(User, {
    foreignKey: "user_id",
	sourceKey: "id"
});

// link bid and product
Product.hasMany(Bid, {
	as: "bids",
   	foreignKey: "product_id",
	sourceKey: "id"
});
Bid.belongsTo(Product, {
	as: "products",
   foreignKey: "product_id",
	sourceKey: "id"
});
// link wishlist and user
User.hasMany(Wishlist, {
   	foreignKey: "user_id",
	sourceKey: "id"
});
Wishlist.belongsTo(User, {
   foreignKey: "user_id",
	sourceKey: "id"
});

// link wishlist and product
Product.hasMany(Wishlist, {
   foreignKey: "product_id",
	sourceKey: "id"
});
Wishlist.belongsTo(Product, {
   foreignKey: "product_id",
	sourceKey: "id"
});
db.sync(() => console.log(`Tables created!`));

// add db initialization
/* 
db.sync({ force: true })
.then(function() {
	dataBaseInitialization().then(function() {
		console.log('Database & tables created!');
		process.exit();
	});
});

function dataBaseInitialization() {
	return new Promise(function(resolve, reject) {
		Promise.all([
			Category.create({id: 1, name: "Shoes Collection"}),
			Category.create({id: 2, name: "Flip Flops Collection"}),
         Category.create({id: 3, name: "Sandals Collection"}),
			Category.create({id: 4, name: "High Heels Collection"}),
			Category.create({id: 5, name: "Boots Collection"})
		]).then( res => {
			Promise.all([
				Residence.create({id: 1, address: 'Beverly Rd', city: 'Minhen', zip_code: '11207', state: 'Bavaria', country: 'Germany'}),
				Residence.create({id: 1, address: 'Fifth Ave', city: 'Minhen', zip_code: '11207', state: 'Bavaria', country: 'Germany'})
			]).then( res => { }) 
				Promise.all([
					User.create({id: 1, first_name: 'Jhonny', last_name: 'Christie', username: 'jchristie1', email: 'jcristie1@gmail.com', password: 'password', gender: 'male', phone_number: '91838478', residence_id: 1, image_url: ''}),
				   User.create({id: 2, first_name: 'Elsa', last_name: 'Salvatore', username: 'esalvatore1', email: 'esalvatore1@gmail.com', password: 'pass1', gender: 'female', phone_number: '918384753', residence_id: 2, image_url: ''}),
				   User.create({id: 3, first_name: 'Amelia', last_name: 'Gilbert', username: 'agilbert1', email: 'agilbert1@gmail.com', password: 'password1', gender: 'female', phone_number: '14349537', residence_id: 2, image_url: ''})
				]).then( res => { 
               /* Promise.all([
                  Product.create()...
               ]) 
            }).catch(err => {console.log(err)})
			   .catch(err => {console.log(err)});
      }).catch(err => {console.log(err)});
	});
} */

module.exports = { db, User, Image, Product, Category, Residence, Bid, Wishlist };