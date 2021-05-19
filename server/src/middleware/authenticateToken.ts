import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import { tokenSecret } from '../config';

const allowedUrl = '/api/token';
const allowedMethod = 'get';

const authenticateToken = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<unknown> => {
  try {
    if (req.originalUrl === allowedUrl && req.method.toLowerCase() === allowedMethod) {
      return next();
    }
    const { authorization } = req.headers;
    const token = authorization && authorization.split(' ')[1];
    if (!token) {
      return res.sendStatus(401);
    }
    const decoded = jwt.verify(token, tokenSecret);
    // @ts-ignore
    req['signature'] = decoded;
    return next();
  } catch (error) {
    return next(error);
  }
};

export default authenticateToken;
