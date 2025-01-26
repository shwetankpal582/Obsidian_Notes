const mongoose = require('mongoose');

// defining COnnection
const mongoURL = 'mongodb://localhost:27017/hotel';

mongoose.connect(mongoURL, { 
    useNewUrlParser: true, 
    useUnifiedTopology: true 
});

// Defining event listeners for DB conneciton

db.on('connected', () => {
    console.log('Connected to MongoDB server')
})

db.on('error', () => {
    console.log('Error in MongoDB server')
})

db.on('connected', () => {
    console.log('Connected to MongoDB server')
})