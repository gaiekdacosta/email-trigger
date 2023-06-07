import express, { Request, Response } from 'express'
import sendMail from '../controller/sendMail';

const routes = express.Router()

interface emailData {
    indexMessage: number,
    addressee: string,
}

    routes.post('/sendMail/:indexMessage/:addressee', (req: Request, res: Response) => {
        try {
            const { indexMessage, addressee } = req.params;

            const emailData: emailData = {
                indexMessage: Number(indexMessage),
                addressee: addressee,
            };

            sendMail(emailData.indexMessage, emailData.addressee);

            res.json({ message: 'Verifique a caixa de entrada!' });
        } catch (error) {
            console.error('Erro ao enviar o email:', error);
            res.status(500).json({ error: 'Erro ao enviar o email' });
        }
    });
export default routes;
