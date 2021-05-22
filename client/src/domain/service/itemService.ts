import ItemRepository from '../repositories/ItemRepository';

export const getItemsService = (repository: ItemRepository) => async (query: string) => {
  const result = repository.getItems(query);
  return result;
};

export const getItemDetailService = (repository: ItemRepository) => async (id: string) => {
  const result = repository.getItemDetail(id);
  return result;
};
