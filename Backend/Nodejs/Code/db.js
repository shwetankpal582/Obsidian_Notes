const mongoose = require('mongoose');

// defining COnnection
const mongoURL = 'mongodb://localhost:27017/hotel';

mongoose.connect(mongoURL, { 
    useNewUrlParser: true, 
    useUnifiedTopology: true 
});

// Defining 