const mongoose = require('mongoose');
// defining COnnection
const mongoURL = 'mongodb://localhost:27017/hotel';

// mongoose.connect(mongoURL, { 
//     useNewUrlParser: true, 
//     useUnifiedTopology: true 
// });

// Define Connection
const db = mongoose.connection;

// Defining event listeners for DB conneciton

db.on('connected', () => {
    console.log('Connected to MongoDB server')
})

db.on('error', () => {
    console.log('Connection Error')
})

db.on('disconnected', () => {
    console.log('disconnected to MongoDB server')
})


module.exports = db;