"use strict";
const express = require("express");
const { db, Bid, Product, User} = require('../config/db');
const router = express.Router();
const moment = require('moment');
const jwt= require("jsonwebtoken");
const authentificateToken = require("../authentification/auth.js")
 
// GET method for bids
router.get("/bids/:id", (req, res) => {
    const id = req.params.id;
    Bid.findAll({
        where: {
            product_id: id
        },
        include: [{
            model: User
        }],
        order: [['date', 'DESC']]
    }).then(bids => {
        res.send(bids);
    }).catch(err => {
        res.status(500).send({
            message: "error getting bids"
        });
    });   
}); 

// POST method for creating bid
router.post("/bid/product/:productId", (req, res) => {
    authentificateToken(req, res);
    const user = req.user;
    const productId = req.params.productId;
    Bid.count({
        where: {
            product_id: productId
        },
        include: [{
            model: Product,
            as: "products"
        }]
    }).then(count => {
        if(count==0){
            Product.findByPk(productId).then(product => {
                const currentDate = moment();
                // checking if the bidder is the seller of the product
                if(user.id === product.user_id){
                    res.send("You can't bid the product you are selling!");
                } else if(moment(product.end_date).isBefore(currentDate)){
                    res.send("The auction has ended!")
                } else if(req.body.price <= product.price){
                    res.send("Price needs to be higher than: $" + product.price + "!");
                } else{    
                    const bid = {
                        price: req.body.price,
                        product_id: req.params.productId,
                        user_id: user.id,
                        date: currentDate
                    };
                    Bid.create(bid).then(bid => {
                        res.send("");
                    }).catch(err => {
                        res.status(500).send({message: err});
                    });
                }  
            }).catch(err => {
                res.status(500).send(err);
            });
        } else{
            Product.findByPk(productId, {
                include: [{
                    model: Bid,
                    as: 'bids',
                    attributes: [
                    'id',
                    'user_id',
                    [db.Sequelize.fn('max', db.Sequelize.col('bids.price')), 'highest']
                ],
                group: ['id']
                }]
            }).then(product => {
                const highest = product.bids[0].dataValues.highest;
                const currentDate = moment();
                
                // checking if the bidder is the seller of the product
                if(user.id === product.user_id){
                    res.send("You can't bid the product you are selling!");
                } else if(moment(product.end_date).isBefore(currentDate)){
                    res.send("The auction has ended!");
                } else if(req.body.price<=highest){
                    res.send("Price needs to be higher than: $" + highest + "!");
                } else{    
                    const bid = {
                        price: req.body.price,
                        product_id: req.params.productId,
                        user_id: user.id,
                        date: currentDate
                    };
                    Bid.create(bid).then(bid => {
                        res.send("");
                    }).catch(err => {
                        res.status(500).send({message: err});
                    });
                }  
            }).catch(err => {
                res.status(500).send(err);
            });
        }
    }).catch(err => {
        res.status(500).send(err);
    });   
}); 

module.exports = router;