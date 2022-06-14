const express = require('express')
const app = express()
const cors = require('cors')
const port = process.env.PORT || 4000
const morgan = require('morgan')

const bodyParser = require('body-parser')

const {connectDB} = require('./database')
const {syncTables} = require('./models/restaurant')

const UsersAPI = require('./routes/users')
const CategoriesAPI = require('./routes/categories')
const ProductsAPI = require('./routes/products')
const FavoritesAPI = require('./routes/favorites')
const TicketsAPI = require('./routes/tickets')
const OrdersAPI = require('./routes/orders')

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())
app.use(cors())
app.use(morgan('dev'))

app.use('/users', UsersAPI)
app.use('/categories', CategoriesAPI)
app.use('/products', ProductsAPI)
app.use('/favorites', FavoritesAPI)
app.use('/tickets', TicketsAPI)
app.use('/orders', OrdersAPI)

app.listen(port, ()=>{
    console.log('App corriendo en el puerto ' + port);
    try {
        connectDB()
        syncTables()
    } catch (error) {
        console.log(error)
    }
})