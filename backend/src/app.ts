import express from 'express';
import cors from 'cors';
import { corsOptions } from './utils/whitelist';
import routes from './routes';

const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors(corsOptions));

app.use('/api', routes);

export default app;
