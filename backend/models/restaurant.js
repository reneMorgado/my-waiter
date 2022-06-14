const { DataTypes } = require('sequelize')
const {sequelize} = require('../database')

const Users = sequelize.define('Users',{
    Id_User:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
    },
    User_Email: {
        type: DataTypes.STRING,
        allowNull: false
    },
    User_Name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    User_Lastname: {
        type: DataTypes.STRING,
        allowNull: false
    },
    Password:{
        type: DataTypes.STRING,
        allowNull: false
    },
    Is_Admin:{
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue:false
    }
})

const Categories = sequelize.define('Categories',{
    Id_Category:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
    },
    Category_Title:{
        type: DataTypes.STRING,
        allowNull: false
    },
    Category_Image:{
        type: DataTypes.STRING,
        allowNull: false
    }
})

const Products = sequelize.define('Products',{
    Id_Product:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
    },
    Id_Category:{
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'Categories',
            key: 'Id_Category'
        }
    },
    Product_Name:{
        type: DataTypes.STRING,
        allowNull: false
    },
    Product_Description:{
        type: DataTypes.STRING,
        allowNull: false
    },
    Product_Image:{
        type: DataTypes.STRING,
        allowNull: false
    },
    Product_Price:{
        type: DataTypes.STRING,
        allowNull: false
    }
})

const Favorites = sequelize.define('Favorites',{
    Id_User:{
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'Users',
            key: 'Id_User'
        }
    },
    Id_Product:{
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'Products',
            key: 'Id_Product'
        }
    }
})

const Tickets = sequelize.define('Tickets',{
    Id_Ticket:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
    },
    Id_User:{
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'Users',
            key: 'Id_User'
        }
    },
    Ticket_Status:{
        type: DataTypes.ENUM({
            values: ['0','1','2','3']
        }),
        allowNull: false,
        defaultValue: '0'
    }
})

const Orders = sequelize.define('Orders',{
    Id_Ticket:{
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'Tickets',
            key: 'Id_Ticket'
        }
    },
    Id_Product:{
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'Products',
            key: 'Id_Product'
        }
    },
    Order_Comment:{
        type: DataTypes.STRING,
        allowNull: false
    },
})

const syncTables = async () => {
    await Users.sync()
    await Categories.sync()
    await Products.sync()
    await Favorites.sync()
    await Tickets.sync()
    await Orders.sync()
}

module.exports = {syncTables, Users, Categories, Products, Favorites, Tickets, Orders}