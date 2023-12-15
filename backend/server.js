const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const jwt = require('jsonwebtoken');
const app = express()
const port = 3000

app.use(cors())
// store courses in a array called items
let items = [{
    name: "Swimming 101",
    subject: "Swim",
    creditHours: 3,
    description: "Learn the basics of how to swim.",
    id: '001',
},
{
    name: "Swimming 201",
    subject: "Swim",
    creditHours: 3,
    description: "Learn advance swimming skills",
    id: '002',
},
{
    name: "Social Media 101",
    subject: "Social",
    creditHours: 3,
    description: "Learn the basics of growing your brand and personal image."
    ,
    id: '003',
},
{
    name: "Social Media 201",
    subject: "Social",
    creditHours: 3,
    description: "Learn the advance parts of growing your brand and personal image."
    ,
    id: '004',
}
]
//keep track of ID
let id = 101
app.use(bodyParser.json());

app.get('/courses', (req, res) => {
    res.send(items)
})
//gets a new course
app.post('/courses', (req, res) => {
    let newCourse = req.body
    id += 1
    newCourse.id = id
    items.push(newCourse)
    console.log(newCourse)
    console.log('course added')
})
//delete the course
app.delete('/courses/:name', (req, res) => {
    const courseName = req.params.name;
    const index = items.findIndex(c => c.name === courseName);

    if (index > -1) {
        items.splice(index, 1);
        res.send(`Course '${courseName}' deleted successfully`);
    } else {
        res.status(404).send('Course not found');
    }
});
//edit the course
app.put('/courses/:id', (req, res) => {
    const courseId = req.params.id;
    const updatedCourse = req.body;
    const index = items.findIndex(c => c.id === courseId);

    if (index > -1) {
        items[index] = updatedCourse;
        res.send(`Course '${courseId}' updated successfully`);
    } else {
        res.status(404).send('Course not found');
    }
});
// register
app.post('/register', (req, res) => {
    const { firstName, lastName, userName, email, password } = req.body;

    const newUser = { firstName, lastName, userName, email, password }; // In real applications, you should hash the password
    users.push(newUser);
    res.status(201).send('User registered successfully');
});

app.post('/login', (req, res) => {
    const { userName, password } = req.body;
    const user = users.find(u => u.userName === userName && u.password === password);

    if (user) {
        const token = jwt.sign({ userId: user.userName }, 'yourSecretKey'); // Replace 'yourSecretKey' with a real secret key
        res.json({ token });
    } else {
        res.status(401).send('Invalid credentials');
    }
});


app.listen(port, () => {
    console.log('app running')
})

