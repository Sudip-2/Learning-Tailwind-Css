import mongoose from 'mongoose'
import express from 'express'
import { Dummy } from './models/dummy.js'

const url = "mongodb://localhost:27017/Dummy"
const app = express()
let dummy;
let a = await mongoose.connect(url)

let nameArr = ["Sudip", "Code With Harry", "Chai Aur Code", "PrimeAgen"]
let salaryArr = [45000, 100000, 60000, 90000, 150000]
let languageArr = ["Python", "JavaScript", "Lua", "C#", "Java", "Rust"]
let CityArr = ["Kolkata", "Mumbai", "Delhi", "Noida", "L.A", "NewYork"]
let isManagerArr = [true, false]

app.use(express.static('public'))

app.get('/', (req, res) => {
    res.sendFile('index.html')
})

app.get('/create', async(req, res) => {
    if(await Dummy.countDocuments({})){
        await Dummy.deleteMany({})
    }
    for (let i = 0; i < 10; i++) {
        dummy = new Dummy({
            name: nameArr[Math.floor((Math.random() * nameArr.length))],
            salary: salaryArr[Math.floor((Math.random() * salaryArr.length))],
            language: languageArr[Math.floor((Math.random() * languageArr.length))],
            city: CityArr[Math.floor((Math.random() * CityArr.length))],
            isManager: isManagerArr[Math.floor((Math.random() * isManagerArr.length))]
        })
        dummy.save()
    }
    res.send("Data Saved")
})

// Start the server on port 3000
const port = 3000;
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});