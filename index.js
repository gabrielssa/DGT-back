const express = require('express');
const app = express();
const dotenv = require('dotenv');
const mongoose = require('mongoose');

//Import routes
const authRoute = require('./routes/auth');

dotenv.config();
//Connect to db
mongoose.connect(process.env.DB_CONNECT, { useNewUrlParser: true,useUnifiedTopology: true }, () => console.log("Connect to db"));
//Middlewares
app.use(express.json());

//Routes Middlewares
app.use('/api/user', authRoute);

app.listen(3000, () => console.log("Server up and running"));