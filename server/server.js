// this is your server
const express = require('express')
const cors = require('cors')
const server = express()
const db = require('./util/database')
const { seed } = require('./seed/seed')
const { Products, Cart, Users, Order_item, Orders } = require('./util/models.js')
const { allProducts, addUser, getCart } = require('./controller')
const fileupload = require("express-fileupload");
// middleware
server.use(express.json())
server.use(cors())
server.use(fileupload());
// Endpoints

Cart.belongsTo(Users)
Cart.hasMany(Products)
Users.hasMany(Orders)
Orders.hasMany(Order_item)
Orders.belongsTo(Users)

//db.sync({force:true})
server.post("/seed", seed);
server.post("/adduser", addUser)
server.get("/allProducts", allProducts )
server.get("/getCart", getCart)
//Tell your server to listen
server.listen(4000, () => console.log('Port running on 4000'))