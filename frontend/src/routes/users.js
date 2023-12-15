const express = require('express');
const router = express.Router();
const User = require('../models/User'); // Adjust path as necessary
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

// Register a new user
router.post('/register', async (req, res) => {
  try {
    // Create a new user
    const newUser = new User(req.body);
    await newUser.save();
    res.status(201).send({ message: 'User registered successfully' });
  } catch (error) {
    res.status(400).send(error);
  }
});

// User login
router.post('/login', async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({ username });
    if (!user) {
      return res.status(404).send({ message: 'User not found' });
    }
    // Check if password matches
    const isMatch = await user.comparePassword(password);
    if (!isMatch) {
      return res.status(401).send({ message: 'Invalid credentials' });
    }

    // Create a token
    const token = jwt.sign({ _id: user._id }, 'secretKey'); // Replace 'secretKey' with a real secret key
    res.status(200).send({ token });
  } catch (error) {
    res.status(500).send(error);
  }
});

// Export the router
module.exports = router;
