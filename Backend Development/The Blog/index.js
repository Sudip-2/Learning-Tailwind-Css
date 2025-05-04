import express from 'express'
import bodyParser from 'body-parser';
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({extended:true}))

const data = [{img:"",
                writer:"Sudip Paul",
                date:"1 Jan 2024",
                heading:"The Northern Lights",
                desc:" This natural phenomenon occurs near the polar regions and is caused by charged particles from the sun interacting with Earth's magnetic field",
                tagOne:"Design",
                tagTwo:"Research",
                tagThree:""},
                {
                    img:"https://example.com/northern-lights.jpg",
                writer:"Sudip Paul",
                Date:"1 Jan 2024",
                heading:"The Northern Lights",
                desc:" This natural phenomenon occurs near the polar regions and is caused by charged particles from the sun interacting with Earth's magnetic field",
                tagOne:"Design",
                tagTwo:"Research",
                tagThree:""}
                ]

app.use(express.static('public'))
app.listen(port,() => {
    console.log(`server running successfully on port ${port}`)
})

app.get('/',(req,res) => {
    res.render("index.ejs",{article:data})
})

app.post('/create', (req,res) => {
    data.unshift(req.body)
    console.log(req.body)
    res.redirect("/")
})

app.delete()