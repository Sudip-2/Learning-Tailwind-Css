import mongoose from 'mongoose'
import express from 'express'
import {Todo} from './models/todo.js'

const url = "mongodb://localhost:27017/Todo"
const app = express()

let a = await mongoose.connect(url)

app.get('/', (req, res) => {
    const todo = new Todo({task:"Complete my project"})
    todo.save()
    res.send('Hello World!');
});

app.get('/a', async (req,res) => {
    const todo = await Todo.find({},{task:1})
    res.json(todo)
})

// Start the server on port 3000
const port = 3000;
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});