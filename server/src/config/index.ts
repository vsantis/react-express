import dotenv from 'dotenv';

dotenv.config();

export const api = { port: process.env.PORT || '3001' };

export const tokenSecret = process.env.TOKEN_SECRET || '';
