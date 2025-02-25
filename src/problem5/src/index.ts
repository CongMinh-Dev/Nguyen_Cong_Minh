import express from 'express';
import rootRouter from './routes/rootRouter'
import cors from 'cors'

const app = express();

app.use(cors())
app.use(express.json());


app.use(rootRouter)

app.listen(8080)

