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
    Order_item: db.define("order_item", {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        order_id: DataTypes.INTEGER,
        product_id: DataTypes.INTEGER
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