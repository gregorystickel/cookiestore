const Sequelize = require("sequelize");
//const db = require("../util/database");
const { Products, Users, Orders, Order_items } = require("./util/models");
const bcrypt = require("bcrypt");
const saltRounds = 12;

module.exports = {
  allProducts: (req, res) => {
    Products.findAll()
      .then((dbRes) => {
        res.status(200).send(dbRes);
      })
      .catch((err) => console.log("error finding all products", err));
  },

  addUser: async (req, res) => {
    const {
      user_name,
      password,
      full_name,
      street_address,
      city,
      state,
      postal,
      email,
      phone,
    } = req.body;

    const encryptedPassword = await bcrypt.hash(password, saltRounds);

    console.log("Encrypted Password:",encryptedPassword);

    const row = Users.findOrCreate({
      where: { username: user_name },
      defaults: {
        password: encryptedPassword,
        fullname: full_name,
        street: street_address,
        city: city,
        state: state,
        postal: postal,
        email: email.toLowerCase(),
        phone: phone,
      },
    })

      .then((dbRes) => {
        res.status(200).send(dbRes);
      })
      .catch((err) => console.log("error submitting form", err));
  },

  login: async (req, res) => {
    //console.log(req)
    const {
      user_name,
      password
     } = req.body;
    console.log(user_name, password)
    const user =  await Users.findOne({where: {username: user_name}});
    if(!user) return res.status(403).send({message: 'Invalid username!!!'});
    const passwordMatch = await bcrypt.compare(password, user.password);
    console.log(passwordMatch)
    if (!passwordMatch) return res.status(403).json({message: 'Invalid password!!!'});
    res.status(200).json({success: true, user});
    
  },
  getUser: async (req, res) => {
    //console.log(req)
    const {
      user_name,
      
     } = req.body;
    console.log(user_name)
    const user =  await Users.findOne({where: {username: user_name}},);
    
    res.status(200).json({success: true, user});
    
  },
  addOrder: (req, res) => {
    
    
    const {
      userId,
      salesTax,
      subTotal,
      total,
      paymentType,
      newCart
    } = req.body;
    console.log("Cart", newCart)
    //console.log("Req.Body", req.body)
    //console.log("Add Order Controllers UserId", req.body.userId)
    Orders.create({
      userId: userId,
      salesTax: salesTax,
      subTotal: subTotal,
      total: total,
      paymentType: paymentType,      
      order_items: newCart

       
    }, {
      include: [{
        model: Order_items,
        }]
    }
    )
    .then((dbRes) => {
      res.status(200).send(dbRes);
    })
    .catch((err) => console.log("error", err)); 

  },
  getOrders:  (req, res) => {
    console.log(req.query)
    console.log("getOrders userId", req.query.userId)
  const response =  Orders.findAll({ 
    where: {
        userId: req.query.userId
    },
    include: [{ model: Order_items, required: true }]
    } 
  
    
  )
    .then((dbRes) => {
      res.status(200).send(dbRes);
      
      
    })
    .catch((err) => {console.log("error", err)});
    
    
  }
  
};
