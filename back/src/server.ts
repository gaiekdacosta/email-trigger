import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import dotenv from 'dotenv';

dotenv.config();
import routes from './routes'

const app = express();
app.use(express.json());
app.use(cors());
app.use(helmet())
app.use(morgan('combined'));
app.use(routes)

app.use((err: any, req: any, res: any, next: any) => {
    res.status(err.status || 500);
    res.json({ error: err.message });
});

const port = process.env.PORT;

app.listen(port, () => {
    console.log(`➜ Server running in port: ${port}`);
});