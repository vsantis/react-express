/* eslint-disable @typescript-eslint/no-explicit-any */
import QueryReturn, { Item } from '../objects/QueryReturn';
import QueryRepository from '../repositories/QueryRepository';

export const executeQueryService =
  (repository: QueryRepository) =>
  async (args: { name: string; lastname: string; query: string }): Promise<QueryReturn> => {
    try {
      const result = await repository.executeQuery(args.query);
      const [firstResult] = result.filters.filter((element) => element.id === 'category');
      const categories =
        firstResult && firstResult.values
          ? firstResult.values[0]['path_from_root'].map((element) => element.name)
          : ([] as string[]);
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
