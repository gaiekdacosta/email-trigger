import express from 'express';
import cors from 'cors'
import routes from './routes';

const app = express();
app.use(express.json());
app.use(cors());
app.use(routes)

app.use((err: any, res: any) => {
    res.status(err.status || 500);
    res.json({ error: err.message });
});

const port = 4569;

app.listen(port, () => {
    console.log(`Running in ${port}`);
})
