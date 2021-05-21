import compression from 'compression';
import cors from 'cors';
import express, { json, Request, Response } from 'express';
import helmet from 'helmet';
import { getItemApplication } from './application/item';
import { executeQueryApplication } from './application/query';
import { generateAccessToken } from './application/token';
import { api } from './config';
import authenticateToken from './middleware/authenticateToken';
import errorHandler from './middleware/errorHandler';

const app = express();

app.use(compression());
app.use(helmet());
app.use(cors());
app.use(json());
app.use(authenticateToken);

app.get('/ping', (req: Request, res: Response) => {
  res.send('pong');
});

app.post('/api/token', generateAccessToken);
app.get('/api/items', executeQueryApplication);
app.get('/api/items/:id', getItemApplication);

app.use(errorHandler);

app.listen(api.port, () => {
  console.log(`API Listening on port ${api.port}`);
});
