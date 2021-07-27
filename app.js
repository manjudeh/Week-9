const express = require('express');
const app = express();
port = process.env.PORT || 4500;
const members = require('./Members/members');

app.use(express.json());

// app.get( '/api/users', (req,res) => {

//     res.send('welcome to my api');

// });

const userroutes = require('./routes/userroutes');

app.use('./api/routes', userroutes);

app.listen(port, () => console.log( `server running on ${port}`));