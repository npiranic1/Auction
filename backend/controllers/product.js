"use strict";
const { db } = require("../config/db");
const { Product, Image } = require('../config/db')

// GET method for random product details
exports.getProductDetails = async (req, res) => {
    // dodati uslov da je main 1
    const { QueryTypes } = require('sequelize');
    const result = await db.query(
        'SELECT product.id, product.name, product.price, product.description, image.url FROM product INNER JOIN image ON image.product_id = product.id where image.main = 1',
        {
          replacements: { status: 'active' },
          type: QueryTypes.SELECT
        }
      );
      res.send(result);  

     
    /* Product.findAll({
        /* limit: 1,
        order: Sequelize.literal('rand()'), 
        include: [ {model: Image}]
    })
         .then(product => {
             res.send(product);
        }).catch(err => 
            res.status(500).send(err)
        ); */
            
 
}; 

// GET method for new arrivals
exports.getNewArrivals = (req, res) => {
    Product.findAll({ 
        limit: 8 ,
        order: [
            ['start_date', 'DESC']
        ]
    })
        .then((product) => {
            res.send(product);
        })
            .catch(err => {
                res.status(500).send({
                    message: "Error getting new arrivals!"
                });
            });
};  

// GET method for last chance

// ograničiti end_date u budućnosti
exports.getLastChance = (req, res) => {
    Product.findAll({
        limit: 8,
        order: [
            ['end_date', 'ASC']
        ] 
    })
        .then((product) => {
            res.send(product);
        })
            .catch(err => {
                res.status(500).send({
                    message: err
                });
            });
};