import express from 'express'
import cors from 'cors';
import mongoose from 'mongoose'
import router from './routes/user.js';

const url = "mongodb://localhost:27017/signuplogin"
const app = express()
const port = 3000
let a = await mongoose.connect(url)

app.use(cors());
app.use(express.json())
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"))
app.use('/', router);

app.get('/', async(req, res) => {
    res.send("Hello world")
})

app.listen(port, () => {
    console.log(`server running on port ${port}`)
})