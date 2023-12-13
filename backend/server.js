const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const app = express()
const port = 3000

app.use(cors())
// store courses in a array called items
let items = [{
    name: "Swimming 101",
    subject: "Swim",
    creditHours: 3,
    description: "Learn the basics of how to swim."
},
{
    name: "Swimming 201",
    subject: "Swim",
    creditHours: 3,
    description: "Learn advance swimming skills"
},
{
    name: "Social Media 101",
    subject: "Social",
    creditHours: 3,
    description: "Learn the basics of growing your brand and personal image."
},
{
    name: "Social Media 201",
    subject: "Social",
    creditHours: 3,
    description: "Learn the advance parts of growing your brand and personal image."
}
]

app.use(bodyParser.json());

app.get('/courses', (req, res) => {
    res.send(items)
})
//gets a new course
app.post('/courses', (req, res) => {
    let newCourse = req.body

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
app.put('/courses/:name', (req, res) => {
    console.log('got')
    const courseName = req.params.name;
    const updatedCourse = req.body;
    const index = items.findIndex(c => c.name === courseName);

    if (index > -1) {
        items[index] = updatedCourse;
        res.send(`Course '${courseName}' updated successfully`);
    } else {
        res.status(404).send('Course not found');
    }
});

app.listen(port, () => {
    console.log('app running')
})

