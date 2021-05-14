import express from 'express';
import cors from 'cors';
import routes from './routes';
import '../database'

const app = express();
const port = 3001;

app.use(express.json());
app.use(
    express.urlencoded({
        extended: true
    })
);
app.use(cors());
app.use(routes);

app.listen(port, () => {
    console.log(`App running on port ${port}`);
});