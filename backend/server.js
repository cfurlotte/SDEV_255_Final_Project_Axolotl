const express = require('express');
const cors = require('cors');
const { MongoClient, ObjectId } = require('mongodb');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require('dotenv').config();

const app = express();
app.use(express.json());
app.use(cors());

// MongoDB URI and Client
const uri = process.env.MONGO_URI;
const client = new MongoClient(uri);

// Database Name
const dbName = 'Cluster0';

async function main() {
    try {
        // Connect to the MongoDB cluster
        await client.connect();
        console.log("Connected to MongoDB");

        // Reference to your database and collection
        const db = client.db(dbName);
        const coursesCollection = db.collection('courses');
        const usersCollection = db.collection('users');

        // READ: Get all courses
        app.get('/courses', async (req, res) => {
            const courses = await coursesCollection.find().toArray();
            res.json(courses);
        });

        // CREATE: Add a new course
        app.post('/courses', async (req, res) => {
            const newCourse = req.body;
            try {
                const result = await coursesCollection.insertOne(newCourse);
                const insertedCourse = await coursesCollection.findOne({ _id: result.insertedId });
                res.status(201).json(insertedCourse);
            } catch (error) {
                console.error('Failed to insert course:', error);
                res.status(500).send('Error inserting the course');
            }
        });

        // DELETE: Delete a course by ID
        app.delete('/courses/:id', async (req, res) => {
            const id = req.params.id;
            const result = await coursesCollection.deleteOne({ _id: ObjectId(id) });
            if (result.deletedCount === 1) {
                res.status(204).send();
            } else {
                res.status(404).send('Course not found');
            }
        });

        // User Signup
        app.post('/api/signup', async (req, res) => {
            try {
                const { firstName, lastName, userName, email, password } = req.body;
                const hashedPassword = await bcrypt.hash(password, 10);
                await usersCollection.insertOne({ firstName, lastName, userName, email, password: hashedPassword });
                res.status(201).send('User registered successfully');
            } catch (error) {
                console.error('Signup error:', error);
                res.status(500).send('Error registering new user');
            }
        });

        // User Login
        app.post('/api/login', async (req, res) => {
            try {
                const { userName, password } = req.body;
                const user = await usersCollection.findOne({ userName });
                if (user && await bcrypt.compare(password, user.password)) {
                    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
                    res.json({ token });
                } else {
                    res.status(401).send('Invalid credentials');
                }
            } catch (error) {
                console.error('Login error:', error);
                res.status(500).send('Error logging in user');
            }
        });

    } finally {
        // client.close(); // Optional: Depends on your use case
    }
}

main().catch(console.error);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
