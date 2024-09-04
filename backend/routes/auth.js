const express = require('express');
const router = express.Router();
const User = require('../models/User');
var bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');
// const Name = require('../models/Name');
// const Email = require('../models/Email');
const { body, validationResult } = require('express-validator')

const checkEmailUnique = async (email) => {
    const user = await User.findOne({ email });
    if (user) {
        throw new Error('Email is already in use');
    }
    return user;
};

router.post('/createuser',
    body('email').isEmail().withMessage('Please check your email').custom(checkEmailUnique),
    body('password').optional().isLength({ min: 6 }).withMessage('Password must be at least 6 characters long').matches(/[A-Z]/).withMessage('Password must contain at least one uppercase letter').matches(/[!@#$%^&*(),.?":{}|<>]/).withMessage('Password must contain at least one special character'),
    async (req, res) => {
        const errors = validationResult(req)
        if (!errors.isEmpty()) {
            return res.json({ errors: errors.array() });
        }

        try {
            // secure the password
            var salt = await bcrypt.genSalt(10);
            var hashPassword = await bcrypt.hash(req.body.password, salt);

            // create and save user
            const user = new User({
                name: req.body.name,
                email: req.body.email,
                password: hashPassword
            })
            await user.save();
            return res.status(201).json(user); // Send the request body back to the client
        } catch (error) {
            console.error('Error saving email:', error);
            return res.status(500).json({ error: 'Failed to save user' });
        }

        // try {
        //     const { name, email } = req.body; // Generate a new ObjectId for the user

        //     // Store name
        //     const newName = new Name({ name});
        //     await newName.save();

        //     // Store email
        //     const newEmail = new Email({ email});
        //     await newEmail.save();

        //     res.status(201).json({ message: 'User created successfully' });
        // } catch (error) {
        //     console.error('Error saving email:', error);
        //     res.status(500).json({ error: 'Failed to create user' });
        // }
    })

router.post('/userlogin',
    body('email').notEmpty().withMessage('Email cannot be empty'),
    body('password').notEmpty().withMessage('Email cannot be empty'),
    async (req, res) => {
        const errors = validationResult(req)
        if (!errors.isEmpty()) {
            return res.json({ errors: errors.array() });
        }

        try {
            const user = await User.findOne({"email": req.body.email});
            if (!user) {
                // throw new Error('Invalid Username or email!');
                return res.status(400).json({ error: 'Invalid Username or email!' });
            }
            
            let jwtAuthToken = jwt.sign({ id: user.id }, 'jwttoken');
            

            // validate the password
            const isMatch = await bcrypt.compare(req.body.password, user.password);
            if (!isMatch) {
                return res.status(400).json({ error: 'Invalid Username or email!' });
            }
            return res.status(201).json(jwtAuthToken); 
        } catch (error) {
            console.error('Error saving email:', error);
            return res.status(500).json({ error: 'Failed to save user' });
        }
    })


    router.post('/getuser',
        async (req, res) => {
            const token = req.header('auth-token')
            if (!token) {
                return res.status(401).json({ error: 'Please authenticate using a valid json!' });
            }
    
            try {
                const data = jwt.verify(token , 'jwttoken')
                const user = await User.findById(data.id)
                console.log()
                return res.status(200).json(user.id)
            } catch (error) {
                console.error('Error saving email:', error);
                return res.status(500).json({ error: 'Failed to save user' });
            }
        })

module.exports = router