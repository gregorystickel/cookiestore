const Sequelize = require("sequelize");
//const db = require("../util/database");
const { Products, Users } = require("./util/models");

module.exports = {
  allProducts: (req, res) => {
    Products.findAll()
      .then((dbRes) => {
        res.status(200).send(dbRes)
      })
      .catch((err) => console.log("error finding all products", err));
  },
  addUser: (req, res) => {
        
   
    const row = Users.findOrCreate({ 
        where : {
        username: req.body.user_name,
        password: req.body.password,
        fullname: req.body.full_name,
        street: req.body.street_address,
        city: req.body.city,
        state: req.body.state,
        postal: req.body.postal,
        email: req.body.email,
        phone: req.body.phone
        }
        
        
      })
      .then((dbRes) => {
        
        res.status(200).send(dbRes)
      })
      .catch((err) => console.log("error submitting form", err));
      
  }, 
  getCart: (req, res) => {
        
   
    Cart.findAll({ 
        
        
        
        
      })
      .then((dbRes) => {
        
        res.status(200).send(dbRes)
      })
      .catch((err) => console.log("error getting cart", err));
      
  }, 
};
