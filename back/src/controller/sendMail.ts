import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

const sendMail = async (id: number, addressee: string) => {
    console.log(id, addressee);

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'pelipe.gaiek1701@gmail.com',
            pass: 'isrwqrrtbdceozny',
        },
    });

    const mailOptions: nodemailer.SendMailOptions = {
        to: addressee,
        subject: 'Disparador de emails',
        html: `
            <html lang="pt-BR">
                <head>
                    <style>
                        * {
                            font-family: Verdana, Geneva, Tahoma, sans-serif;
                            text-align: center;
                        }

                        header {
                            background-color: #4299E1;
                            height: 35px;
                            align-items: center;
                        }

                        img {
                            height: 35px;
                            width: 35px
                        }

                        footer {
                            background-color: #4299E1;
                            width: 100%;
                            height: 35px;
                            margin-top: 10%;
                            text-align: center;
                        }

                        p {
                            color: white;
                        }
                    </style>
                </head>
                <body>
                    <header>
                        <p>📨 Disparador de emails</p>
                    </header>
                        <p>test</p>
                    <footer>
                        <p>Developed by gaiek da costa</p>
                    </footer>
                </body>
            </html>`,
    };

    try {
        await transporter.sendMail(mailOptions);
        console.log('E-mail enviado com sucesso!');
    } catch (error) {
        console.error('Erro ao enviar o email:', error);
        throw error;
    }
};

export default sendMail;
