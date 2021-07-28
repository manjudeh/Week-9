const express = require('express');
const User = require('../models/usermodel');
const router = express.Router();

router.post ('/signup', async (req, res) => {
     
        let { firstName, lastName, email, password} = req.body

        const checkEmail = await User.findOne({email});

        if(checkEmail) {
            return res.json({
                status: "failed",
                message: 'Email already exist',
            });
        }



        const newUser = {firstName, lastName, email, password};

        const createUser = await User.create(newUser);

res.status(201).json({
    status: 'success',
    data: {
        id: createUser._id,
        firstName: createUser.fisrtName,
        lastName: createUser.lastName,
        email: createUser.email,
    },
})

    
});






module.exports = router;        