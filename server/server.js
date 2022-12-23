// this is your server
const express = require('express')
const cors = require('cors')
const server = express()
const db = require('./util/database')
const { seed } = require('./seed/seed')
const { Products, Users, Order_items, Orders } = require('./util/models.js')
const { allProducts, addUser, login, getUser, addOrder, getOrders } = require('./controller')
const fileupload = require("express-fileupload");
// middleware
server.use(express.json())
server.use(cors())
server.use(fileupload());
// Endpoints


Users.hasMany(Orders)
Orders.belongsTo(Users)
Order_items.belongsTo(Orders)
Orders.hasMany(Order_items)



// db
//     .sync({force:true})
//     .then(() => seed())
server.post("/seed", seed);
server.post("/adduser", addUser)
server.post("/login", login)
server.post("/getuser", getUser)
server.post("/addOrder", addOrder)
server.get("/allProducts", allProducts )
server.get("/getOrders?:userId", getOrders)


//server.get("/getCart", getCart)

//Tell your server to listen
server.listen(4000, () => console.log('Port running on 4000'))