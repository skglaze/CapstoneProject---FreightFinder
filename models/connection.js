const mongoose = require('mongoose');

const connectionString = process.env.MONGODB_URI || 'mongodb+srv://test:test@cluster0-qp860.gcp.mongodb.net/test?retryWrites=true&w=majority';

mongoose.connect(connectionString, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("connected to mongo at: " + connectionString);
    });

module.exports = mongoose
