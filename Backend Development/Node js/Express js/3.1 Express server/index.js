// HTTP Protocols
// Get - when requesting a resource from server
// Post - sending resource to the server
// Put - Replacing something in server by something that is sent currently to server
// Patch - Patch up a resource
// Delete - Deleting a resource in serverimport express from 'express'

// Creating server
import express from 'express'
const app = express()
const port = 3000
app.get("/",(req,res) => {
    res.send("Hello world")
})
app.get("/about",(req,res) => {
    res.send("about page of sudip")
})
app.get('/contact',(req,res) => {
    res.send("<h1>contact num of sudip</h1>")
})
app.listen(port,() => {
    console.log(`server running on ${port}`)
})
