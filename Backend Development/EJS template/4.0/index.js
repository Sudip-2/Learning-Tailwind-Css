import express from 'express'

const app = express()
const port = 3000
let newDate = new Date()
let day = newDate.getDay()
function week (day){
    if (day > 0 && day <= 4){
        return {statement : "weekday , it's time to work hard"}
    }
    else{
        return {statement : "weekend , it's time to have fun"}
    }
}

app.get('/',(req,res) => {
    res.render("index.ejs",week(day))
})

app.listen(port, () => {
    console.log(`Server started on port ${port}`)
})