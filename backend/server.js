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

app.post('/courses', (req, res) => {
    let newCourse = req.body

    items.push(newCourse)
    console.log(newCourse)
    console.log('course added')
})

app.listen(port, () => {
    console.log('app running')
})