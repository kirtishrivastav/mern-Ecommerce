const express = require('express');
const connectDb = require('./config/db');
const bodyParser = require('body-parser');
const productRoutes = require('./Routes/Product.route.js');
const userRoutes= require('./Routes/User.route.js');
const cartRoutes= require('./Routes/Cart.route.js');
const orderRoutes= require('./Routes/Order.route.js');
const CategoryRoute=require('./Routes/Category.route.js');
const adminRoute=require('./Routes/Admin.route.js')
// const subCategoryRoute=require('./Routes/SubCategory.route.js');
const cors = require('cors');


const app = express();
// Middleware
app.use(bodyParser.json());

app.use(cors());

// Server port
const PORT = 5000;


// Routes
app.use('/api/user',userRoutes);
app.use('/api/products', productRoutes);
app.use('/api/cart', cartRoutes);
app.use('/api/order', orderRoutes);
app.use('/api/category', CategoryRoute);
app.use('/api/admin', adminRoute);
// app.use('/api/subcategory', subCategoryRoute);

const startServer = async () => {
    try {
        await connectDb();
        console.log('Database connection successful');

        app.listen(PORT, () => {
            console.log(`Server started on port ${PORT}`);
        });
    } catch (err) {
        console.error('Database connection error', err);
       
    }
};

startServer();

