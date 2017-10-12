const express = require('express')
const router = express.Router();
const { User } = require('../db/Schema');

router.get('/', async (req, res) => {
    try {
        const users = await User.find({})
        res.json(users)
    } catch (error) {
        res.send(error)
    }
})

router.post('/', async (req, res) => {
    try {
        const newUser = new User(req.body.user)
        const saved = await newUser.save();
        res.json(saved)
    } catch (error) {
        res.send(error)
    }
})
module.exports = router