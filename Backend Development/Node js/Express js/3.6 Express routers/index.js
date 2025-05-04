import express from 'express'
import router from './routes/user.js'
const app = express()
const port = 3000

app.use(express.static("public"))
app.use('/users', router);
// respond with "hello world" when a GET request is made to the homepage
app.get('/', (req, res) => {
  res.send('hello world')
}).post('/',(req,res) => {
    res.send('post request served')
}).put('/',(req,res) => {
    console.log("It's Put Request")
    res.send('put request served')
}).patch('/',(req,res) => {
    res.send('patch request served')
}).delete('/',(req,res) => {
    res.send('delete request served')
})

app.listen(port,() => {
    console.log(`Listening on port ${port}`)
})