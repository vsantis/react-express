import { Request, Response, NextFunction } from 'express';
import { getItemService } from '../domain/services/ItemService';
import ItemRepository from '../infrastructure/ItemApi';

const repository = new ItemRepository();

export const getItemApplication = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<unknown> => {
  try {
    // @ts-ignore
    const { name, lastname } = req.signature;
    const { id } = req.params;
    const getItem = getItemService(repository);
    const result = await getItem({ name, lastname, id: id });
    return res.json(result);
  } catch (error) {
    return next(error);
  }
};
