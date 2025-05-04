import express from 'express'
import { user } from '../models/users.js';
import bcrypt from 'bcrypt'

const router = express.Router()

router.use(express.static("public"))

router.post('/signup', async (req, res) => {
    const salt = bcrypt.genSaltSync(10)
    const hash = bcrypt.hashSync(req.body.password, salt)
    let alreadyuser = await user.findOne({ email: req.body.email })
    if (alreadyuser === null) {
        try {
            const newUser = new user({
                name: req.body.name,
                email: req.body.email,
                password: hash
            })
            await newUser.save()
            res.status(201).send("signed up , now log in")
        }
        catch (error) {
            console.log(error.message)
        }
    }
    else {
        res.status(409).send("User already exists with same Email")
    }

})

router.post('/login', async (req, res) => {
    try {
        let alreadyUser = await user.findOne({ email: req.body.email })
        if (alreadyUser === null) {
            res.status(404).send("User not found Signup")
        }
        const match = await bcrypt.compare(req.body.password, alreadyUser.password);
        if (match) {
            res.status(200).send("You are Logged in")
        }
        else {
            res.status(401).send("Wrong Password")
        }
    }
    catch (error) {
        console.log(error.message)
    }
})

export default router