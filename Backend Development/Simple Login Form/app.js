import express from 'express'
import mongoose from 'mongoose'
import { user } from './models/users.js';
import cors from 'cors';

const url = "mongodb://localhost:27017/user"
const app = express()
const port = 3000
let a = await mongoose.connect(url)

app.use(cors());
app.use(express.json())
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.send("Hello world")
})

app.post('/signup', async(req, res) => {
    try {
        const newUser = new user({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password
        })
        await newUser.save()
        res.send('Go Back To Login Page Now')
    }
    catch (error) {
        console.log(error.message)
    }
})

app.post('/login',async(req, res) => {
    try {
        let alreadyUser = await user.findOne({ email: req.body.email }, { password: 1 })
        if (alreadyUser.password == req.body.password) {
            res.send("You are Logged in")
        }
    }
    catch(error){
        console.log(error.message)
    }
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})