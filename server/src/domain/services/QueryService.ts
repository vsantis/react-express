/* eslint-disable @typescript-eslint/no-explicit-any */
import QueryReturn, { Item } from '../objects/QueryReturn';
import QueryRepository from '../repositories/QueryRepository';

const getCategories = (iterable: any) => {
  const categoryFilter = 'category';
  const categories = iterable
    .filter((element: { id: string }) => element.id === categoryFilter)
    .map((element: any[]) => element.values)
    // @ts-ignore
    .reduce((pv, cv) => {
      return [...pv, ...cv.map((value: { name: any }) => value.name)];
    }, []) as never as string[];
  const categoriesSet = new Set(categories);
  return Array.from(categoriesSet);
};

export const executeQueryService =
  (repository: QueryRepository) =>
  async (args: { name: string; lastname: string; query: string }): Promise<QueryReturn> => {
    try {
      const result = await repository.executeQuery(args.query);
      const filters = getCategories(result.filters);
      const availableFilters = getCategories(result.available_filters);
      const categories = [...filters, ...availableFilters];
      const items = result.results.map<Item>((element) => ({
        id: element.id,
        title: element.title,
        price: {
          currency: element.currency_id,
          amount: element.price,
          decimals: 0,
        },
        picture: element.thumbnail,
        condition: element.condition,
        free_shipping: element.shipping.free_shipping,
      }));
      return {
        author: {
          name: args.name,
          lastname: args.lastname,
        },
        categories,
        items,
      };
    } catch (error) {
      throw Error(error.message);
    }
  };
