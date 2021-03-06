"use strict";
const express = require("express")
const { Product, Image } = require('../config/db')
const Sequelize = require("sequelize");
const router = express.Router()

// GET method for random product details
router.get("/products/random", (req, res) => {  
    Product.findAll({
        limit: 1,
        order: Sequelize.literal('rand()'),
        include: [ { 
            model: Image, 
            as: 'images',
            attributes: ['url'],
            where: { main: 1 }
        }]
    })
         .then(product => {
             res.send(product);
        }).catch(err => 
            res.status(500).send(err)
        );  
}); 

// GET method for new arrivals
router.get("/products/new-arrivals", (req, res) => {
    Product.findAll({ 
        limit: 8 ,
        order: [
            ['start_date', 'DESC']
        ], 
        include: [{ 
            model: Image, 
            as: 'images',
            attributes: ['url'],
            limit: 1,
            where: { main: 1 },
        }]
    })
        .then((product) => {
            res.send(product);
        })
            .catch(err => {
                res.status(500).send({
                    message: "Error getting new arrivals!"
                });
            });
});  

// GET method for last chance

router.get("/products/last-chance", (req, res) => {
    Product.findAll({
        limit: 8,
        order: [
            ['end_date', 'ASC']
        ],
        include: [{ 
            model: Image, 
            as: 'images',
            attributes: ['url'],
            limit: 1,
            where: { main: 1 },
        }]
    })
        .then((product) => {
            res.send(product);
        })
            .catch(err => {
                res.status(500).send({
                    message: err
                });
            });
});

// GET method for single product
router.get("/products/single-product/:id", (req, res) => {
    const id = req.params.id;
    Product.findByPk(id, {
        include: [{
            model: Image,
            as: 'images',
            attributes: ['id', 'url'],
            group: 'id'
        }]
    }).then(product => {
        res.send(product);
    }).catch(err => {
        res.status(500).send(err);
    })
    
}); 

module.exports = router;