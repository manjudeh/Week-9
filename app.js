const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv')
dotenv.config();


port = process.env.PORT || 4500;
// const db = require('./config/db')




app.use(express.json());



 mongoose.connect('process.env.DB_CONNECT',
    { useNewUrlParser: true },


    () =>  console.log('connected to database')

   

);

//import users
const members = require('./Members/members');

// app.get( '/api/users', (req,res) => {

//     res.send('welcome to my api');

// });

const userroutes = require('./routes/userroutes');

app.use('/api/routes', userroutes);

app.listen(port, () => console.log( `server running on ${port}`));