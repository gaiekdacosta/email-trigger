import express, { Request, Response } from 'express'
import sendMail from '../controller/sendMail';

const routes = express.Router()

routes
    .get('/sendMail/:indexMessage/:inputs', async (req: Request, res: Response) => {
        const sales = await sendMail(req)
        res.json(sales)
    })

export default routes;
