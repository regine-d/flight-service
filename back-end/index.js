const express = require('express');
const mongoose = require('mongoose');
const logger = require('./middleware/logger');
require('dotenv').config(); 
const cors = require('cors'); 

const app = express();
const PORT = process.env.PORT || 8080; 
app.use(express.json()); 
app.use(cors());
app.use(logger);

const flightRouter =  require('./routes/flight.routes');

app.use('/flights', flightRouter);

app.all('*', (req, res) => {
    res.status(404).send('We don\'t have the resource you\'re looking for.');
});

mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        console.log('Successfully connected to MongoDB!');
    })
    .catch(err => {
        console.error(err);
        // Options
        // Connect to fallback database
        // OR
        // Terminate process
        process.exit(1);
    });

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}!`);
});