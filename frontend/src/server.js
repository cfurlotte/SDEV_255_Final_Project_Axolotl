const express = require('express');
const cors = require('cors');
const { MongoClient, ObjectId } = require('mongodb');

const app = express();
app.use(express.json());
app.use(cors());

// MongoDB URI and Client
const uri =  "mongodb+srv://avaquera:Missymuffinmiley4@cluster0.khwgmbd.mongodb.net/?retryWrites=true&w=majority"; // Replace with your MongoDB URI
const client = new MongoClient(uri);

// Database Name
const dbName = 'Cluster0'; // Replace with your database name

async function main() {
    try {
        // Connect to the MongoDB cluster
        await client.connect();
        console.log("Connected to MongoDB");

        // Reference to your database and collection
        const db = client.db(dbName);
        const coursesCollection = db.collection('courses');

        // READ: Get all courses
        app.get('/courses', async (req, res) => {
            const courses = await coursesCollection.find().toArray();
            res.json(courses);
        });

        // CREATE: Add a new course
        
        // UPDATE: Update a course by ID
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

    } finally {
        // Ensures that the client will close when you finish/error
        // client.close(); // You may want to keep the connection open or handle it differently
    }
}

main().catch(console.error);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
