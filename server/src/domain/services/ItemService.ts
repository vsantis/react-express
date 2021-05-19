import ItemReturn from '../objects/ItemReturn';
import ItemRepository from '../repositories/ItemRepository';

export const getItemService =
  (repository: ItemRepository) =>
  async (args: { name: string; lastname: string; id: string }): Promise<ItemReturn> => {
    try {
      const item = repository.getItem(args.id);
      const itemDescription = repository.getItemDescription(args.id);
      const [itemResult, itemDescriptionResult] = await Promise.all([item, itemDescription]);
      return {
        author: {
          name: args.name,
          lastname: args.lastname,
        },
        item: {
          id: itemResult.id,
          title: itemResult.title,
          price: {
            currency: itemResult.currency_id,
            amount: itemResult.price,
            decimals: 0,
          },
          picture: itemResult.pictures[0].url,
          condition: itemResult.condition,
          free_shipping: itemResult.shipping.free_shipping,
          sold_quantity: itemResult.sold_quantity,
          description: itemDescriptionResult.plain_text,
        },
      };
    } catch (error) {
      throw Error(error.message);
    }
  };
