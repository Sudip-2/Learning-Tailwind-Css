import axios from 'axios'
import express from 'express'
const app = express()
const port = 3000
const apiUrl = `https://secrets-api.appbrewery.com/random`

app.use(express.static('public'))

app.listen(port,() => {
    console.log(`server started on port ${port}`)
})

app.get('/',async(req,res) => {
    try{
        const result = await axios.get(apiUrl)
        const finalResult = result.data.secret
        const userName = result.data.username
        res.render('index.ejs',{secret:finalResult,user:userName})
    }
    catch(error){
        console.log(error.message)
    }
})