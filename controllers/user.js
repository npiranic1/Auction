"use strict";
const express = require("express");
const { User } = require("../config/db");
const Sequelize = require("sequelize");
const router = express.Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
// access to .env variables
dotenv.config();

// post method for creating user (register)
router.post("/user/register", (req, res) => {
  const { first_name, last_name, email, password } = req.body;

  const salt = bcrypt.genSaltSync();
  const hashedPassword = bcrypt.hashSync(password, salt);
  const user = {
    first_name,
    last_name,
    email,
    password: hashedPassword,
    salt,
  };
  User.create(user)
    .then((data) => {
      const payload = data.dataValues;
      delete payload.password;
      delete payload.salt;
      let token = jwt.sign(payload, process.env.ACCESS_TOKEN_SECRET);
      res.json({ user: payload, accessToken: token });
    })
    .catch((err) => {
      res.send({
        message: err,
      });
    });
});

// get method for login
router.post("/user/login", (req, res) => {
  const { email, password } = req.body;
  User.findOne({
    where: {
      email: email,
    },
  })
    .then((user) => {
      const hashedPassword = bcrypt.hashSync(password, user.salt);
      if (hashedPassword == user.password) {
        const payload = user.dataValues;
        delete payload.password;
        delete payload.salt;
        let token = jwt.sign(payload, process.env.ACCESS_TOKEN_SECRET);
        res.send({ user: payload, accessToken: token });
      } else res.send(null);
    })
    .catch((err) => {
      res.send({
        message: err,
      });
    });
});

module.exports = router;
