const mongoose = require('mongoose');

// MongoDB connection URL
const mongoURL = "mongodb://127.0.0.1:27017/Ecommerce";

const connectDb = async () => {
    try {
        await mongoose.connect(mongoURL, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log("MongoDB Connected");
    } catch (err) {
        console.error("Connection error", err);
        process.exit(1); // Exit process with failure
    }
};

// Add event listeners for debugging
mongoose.connection.on('connected', () => {
    console.log('Mongoose connected to ' + mongoURL);
});

mongoose.connection.on('error', (err) => {
    console.error('Mongoose connection error:', err);
});

mongoose.connection.on('disconnected', () => {
    console.log('Mongoose disconnected');
});

module.exports = connectDb;
