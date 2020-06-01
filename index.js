const express = require('express');
const app = express();
const dotenv = require('dotenv');
const mongoose = require('mongoose');

//Import routes
const authRoute = require('./routes/auth');
const taskRoute = require('./routes/tasks');

dotenv.config();
//Connect to db
mongoose.connect(
    process.env.DB_CONNECT,
    { 
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false
    },
    () => console.log("Connected to db"));
//Middlewares
app.use(express.json());

//Routes Middlewares
app.use('/api/user', authRoute); 
app.use('/api/tasks', taskRoute);

const PORT = process.env.PORT || 5555;
app.listen(PORT, () => console.log("Server up and running"));