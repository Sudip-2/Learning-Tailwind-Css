import express from 'express'
import cookieParser from 'cookie-parser'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
const app = express()
const port = 3000

app.use(cookieParser())
// respond with "hello world" when a GET request is made to the homepage
app.get('/', async(req, res) => {
    // res.cookie("name", "Sudip")
    //  const salt = bcrypt.genSaltSync(10); // This generates a salt, which is a random value added to the password before hashing. 
    // //  It helps protect against rainbow table attacks (precomputed lookup tables for cracking passwords).
    // console.log(salt)
    //  const hash = bcrypt.hashSync('sudip@22', salt); // The function hashSync() is used to generate a hash from the password and salt.
    // console.log(hash)
    // const match = await bcrypt.compare('sudip@22', hash); // TO compare the password because you cannot decrypt a hashed password

    // if(match) {
    //     res.send('hello world')
    // }
    let token = jwt.sign({email:"p452570@gmail.com"},"secret"); // Encrypts the email into a string using secret as a key to a algorithm 
    res.cookie("token",token)
    res.send("done")
})

app.get('/user1', (req, res) => {
    res.send('User 1')//even though we are not sending on this route the cookie will automatically go to every route from now on 
    //It's a Difference with authorisation header and cookie that cookie goes everyroute automatically but autorisation header not go
    //we have make it go
    let data = jwt.verify(req.cookies.token,"secret") // Gets the jwt token from cookie and decrypt it 
    console.log(req.cookies.token)
    console.log(data)
})

app.listen(port, () => {
    console.log(`server running on port ${port}`)
})