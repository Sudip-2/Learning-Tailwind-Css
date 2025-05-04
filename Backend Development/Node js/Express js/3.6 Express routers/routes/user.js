import express from 'express'
const router = express.Router()

router.get('/',(req,res) => {
    res.json({1:"Sudip",2:"Ankit"})
})

export default router