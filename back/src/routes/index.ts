import express, { Request, Response } from 'express'
import sendMail from '../controller/sendMail';
import showMessages from '../controller/showMessages';

const routes = express.Router()

interface emailData {
    id: number,
    addressee: string,
}

    routes.get('/showMessages/:id', (req: Request, res: Response) => {
        try {
            const { id } = req.params;

            const email = showMessages(Number(id));

            if (email) {
                res.json([email]);
            } else {
                res.status(404).json({ error: 'E-mail não encontrado' });
            }
        } catch (error) {
            console.error('Erro ao obter o e-mail:', error);
            res.status(500).json({ error: 'Erro ao obter o e-mail' });
        }
    });

    routes.post('/sendMail/:id/:addressee', async (req: Request, res: Response) => {
        try {
            const { id, addressee } = req.params;

            const emailData: emailData = {
                id: Number(id),
                addressee: addressee,
            };

            sendMail(emailData.id, emailData.addressee);

            res.json({ message: 'Verifique a caixa de entrada!' });
        } catch (error) {
            console.error('Erro ao enviar o email:', error);
            res.status(500).json({ error: 'Erro ao enviar o email' + error });
        }
    });
export default routes;
