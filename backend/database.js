const { Sequelize } = require('sequelize')

/* Conexión a la base de datos */
const sequelize = new Sequelize('INGWEB', 'ingweb', 'Iweb1234_', {
    host: 'localhost',
    dialect: 'mysql',
    pool: {
        max: 5,
        min: 0,
        idle: 10000
    },
    port: 3306,
    dialectOptions: {
        encrypt: true
    }
})

const connectDB = async() => {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
      } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}

module.exports = {connectDB, sequelize}