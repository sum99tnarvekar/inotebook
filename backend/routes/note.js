const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const User = require('../models/User');
const Note = require('../models/Notes');
var jwt = require('jsonwebtoken');
const { body, validationResult } = require('express-validator')


router.post('/addnote',
    body('title').isLength({ min: 3 }).withMessage('Please check your note title!'),
    body('description').isLength({ min: 6 }).withMessage('Please enter description in detail!'),
    async (req, res) => {
        const token = req.header('auth-token')
        console.log(token)
        const errors = validationResult(req)
        if (!token) {
            return res.status(401).json({ error: 'Please authenticate using a valid json!' });
        } else if (!errors.isEmpty()) {
            return res.json({ errors: errors.array() });
        }

        try {
            const data = jwt.verify(token, 'jwttoken')
            const user = await User.findById(data.id)

            // create and save note
            const note = new Note({
                user: user.id,
                title: req.body.title,
                description: req.body.description
            })
            await note.save();
            return res.status(200).json(note); // Send the request body back to the client
        } catch (error) {
            console.error('Error saving email:', error);
            return res.status(500).json({ error: 'Failed to save note' });
        }
    })

router.get('/fetchallnotes', async (req, res) => {
    const token = req.header('auth-token')
    if (!token) {
        return res.status(401).json({ error: 'Please authenticate using a valid token!' });
    }

    try {
        const data = jwt.verify(token, 'jwttoken')
        const userId = new mongoose.Types.ObjectId(data.id);
        const userNote = await Note.find({ user: userId })
        return res.status(201).json(userNote); // Send the request body back to the client
    } catch (error) {
        console.error('Error saving email:', error);
        return res.status(500).json({ error: 'Failed to save user' });
    }
})

router.post('/updatenote/:id', async (req, res) => {
    let newData = {};
    const token = req.header('auth-token')
    const noteId = req.params.id;
    if (!token) {
        return res.status(401).json({ error: 'Please set and authenticate using a valid token!' });
    } else if (!noteId) {
        return res.status(401).json({ error: 'Note id not found!!' });
    }
    if (req.body.title) newData.title = req.body.title;
    if (req.body.description) newData.description = req.body.description;
    if (req.body.tag) newData.tag = req.body.tag;

    try {
        const noteData = await Note.findById(noteId)
        if (!noteData) {
            return res.status(404).json({ error: 'Data not found; please check your id!!' });
        }
        const data = jwt.verify(token, 'jwttoken')
        const userId = new mongoose.Types.ObjectId(data.id);

        if (!userId.equals(noteData.user)) {
            return res.status(401).json({ error: "This user not allowed to perform this operation" }); // Send the request body back to the client
        }
        // Update the data
        const updatedNote = await Note.findByIdAndUpdate(noteId, newData, { new: true, runValidators: true })
        return res.status(200).json(updatedNote);

        // return res.status(201).json(userNote); // Send the request body back to the client
    } catch (error) {
        console.error('Error updating the data:', error);
        return res.status(500).json({ error});
    }
})

router.post('/deletenote/:id', async (req, res) => {
    const token = req.header('auth-token')
    const noteId = req.params.id;
    if (!token) {
        return res.status(401).json({ error: 'Please set and authenticate using a valid token!' });
    } else if (!noteId) {
        return res.status(401).json({ error: 'Note id not found!!' });
    }

    try {
        const noteData = await Note.findById(noteId)
        if (!noteData) {
            return res.status(404).json({ error: 'Data not found; please check your id!!' });
        }
        const data = jwt.verify(token, 'jwttoken')
        const userId = new mongoose.Types.ObjectId(data.id);

        if (!userId.equals(noteData.user)) {
            return res.status(401).json({ error: "This user not allowed to perform this operation" }); // Send the request body back to the client
        }
        // Update the data
        const deletenote = await Note.findByIdAndDelete(noteId)
        // const updatedNote = await Note.findByIdAndUpdate(noteId, newData, { new: true, runValidators: true })
        return res.status(200).json(deletenote);

        // return res.status(201).json(userNote); // Send the request body back to the client
    } catch (error) {
        console.error('Error saving email:', error);
        return res.status(500).json({ error});
    }
})



module.exports = router