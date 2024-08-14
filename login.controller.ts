



import db from './prisma';
import  { Request, Response } from 'express'

export const login = async (req: Request, res : Response) => {
    const user = await db.user.findFirst({
        where : {
            id: 1
        }
    })

    

    console.log(user);
    res.json(user)
}   