


import express, { Request, Response } from 'express';


const app = express()

import { login } from './login.controller';
import postRouter from './post';

app.get('/home', (req, res, next) => {
    console.log("This is my middleware");

    const loggedIn = true
    if (loggedIn)
        next()
    else
        res.status(401).send('Unauthorized')
}, (req: Request, res: Response) => {
    res.json({
        message: 'Hello World'
    })
})

app.listen(12345, () => {
    console.log('Server started on port 3000');
})