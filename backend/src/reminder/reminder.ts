import { Request, Response, Router } from "express";
const express = require('express')
const router: Router = express.Router()

router.get('/', (req: Request, res: Response) => {
    res.send('hello')
})

router.post('/add-reminder', async(req: Request, res: Response) => {
    const body = await req.body
    console.log(body)
})

router.post('/add-reminder')

module.exports = router