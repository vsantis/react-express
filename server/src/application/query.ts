import { Request, Response, NextFunction } from 'express';
import { executeQueryService } from '../domain/services/QueryService';
import QueryRepository from '../infrastructure/QueryApi';

const repository = new QueryRepository();

export const executeQueryApplication = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<unknown> => {
  try {
    // @ts-ignore
    const { name, lastname } = req.signature;
    const { q } = req.query;
    const executeQuery = executeQueryService(repository);
    const result = await executeQuery({ name, lastname, query: q as string });
    return res.json(result);
  } catch (error) {
    return next(error);
  }
};
