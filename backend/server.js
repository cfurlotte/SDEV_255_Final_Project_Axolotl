const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const app = express()
const port = 3000

app.use(cors())
// store courses in a array called items
let items = [{
    title: 'Test',
    subtitle: 'Test 2'
},
{
    title: 'Test title',
    subtitle: 'Test text'
},
{
    title: 'Test title',
    subtitle: 'Test text'
},
]


app.get('/courses', (req, res) => {
    res.send(items)
})

app.post('/courses', (req, res) => {
    let newCourse = req.body

    items.push(newCourse)

    console.log('course added')
})

app.listen(port, () => {
    console.log('app running')
})