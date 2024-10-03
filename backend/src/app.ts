import express from 'express';
import config from 'config';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import routes from './routes';
import connect from './utils/connect.util';
import logStatus from './utils/log.util';
import { corsOptions } from './utils/whitelist.util';

const port = config.get<number>('port')

const app = express();

app.use(cookieParser())
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors(corsOptions));

app.listen(port, async () => {
    logStatus.info(`App is running at http://localhost:${port}`)
    await connect();
    routes(app);
})