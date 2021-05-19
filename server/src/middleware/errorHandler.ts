import { NextFunction, Request, Response } from 'express';

const errorHandler = (
  err: Error,
  req: Request,
  res: Response,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  next: NextFunction
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
): unknown => {
  return res.status(500).json({ message: err.message, stack: err.stack });
};

export default errorHandler;
