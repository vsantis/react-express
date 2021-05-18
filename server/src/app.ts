import compression from 'compression';
import cors from 'cors';
import express, { json, Request, Response } from 'express';
import helmet from 'helmet';
import { api } from './config';

const app = express();

app.use(compression());
app.use(helmet());
app.use(cors());
app.use(json());

app.get('/ping', (req: Request, res: Response) => {
  res.send('pong');
});

app.listen(api.port, () => {
  console.log(`API Listening on port ${api.port}`);
});
