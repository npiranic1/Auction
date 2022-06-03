"use strict";
const express = require("express")
const { User } = require('../config/db')
const Sequelize = require("sequelize");
const router = express.Router()

router.get("/user", (req, res) => {
    User.findAll({
        limit: 1,
        order: Sequelize.literal('rand()')
    }).then(user => {
        res.send(user);
    }).catch(err => {
        res.status(500).send(err);
    });
}); 

module.exports = router;