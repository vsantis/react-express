import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import { tokenSecret } from '../config';

export const generateAccessToken = (req: Request, res: Response, next: NextFunction): unknown => {
  try {
    const { name, lastname } = req.body;
    if (!name || !lastname) {
      return res.status(401).json({ message: 'unauthorized' });
    }
    const token = jwt.sign({ name, lastname }, tokenSecret, { expiresIn: '120s' });
    return res.json({ token });
  } catch (error) {
    return next(error);
  }
};
