const db = require('./database');
const {DataTypes} = require('sequelize');

module.exports = {
    Products: db.define("products", {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        image_url: DataTypes.STRING,
        name: DataTypes.STRING,
        description: DataTypes.STRING,
        price: DataTypes.INTEGER,
        quantity: DataTypes.INTEGER

    }),
    
    Users: db.define("users", {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        username: DataTypes.STRING,
        password: DataTypes.STRING,
        fullname: DataTypes.STRING,
        street: DataTypes.STRING,
        city: DataTypes.STRING,
        state: DataTypes.STRING,
        postal: DataTypes.INTEGER,
        email: DataTypes.STRING,
        phone: DataTypes.STRING

    }),
    Order_items: db.define("order_items", {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        product_id: DataTypes.INTEGER,
        product_image_url: DataTypes.STRING,
        product_name: DataTypes.STRING,
        product_price: DataTypes.INTEGER,
        product_quantity: DataTypes.INTEGER,
    }),
    Orders: db.define("orders", {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        salesTax: DataTypes.FLOAT(2),
        subTotal: DataTypes.FLOAT(2),
        total: DataTypes.FLOAT(2),
        paymentType: DataTypes.STRING
        
    }),


}