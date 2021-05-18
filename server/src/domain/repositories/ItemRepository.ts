import ItemDescriptionResponse from '../objects/ItemDescriptionResponse';
import ItemIdResponse from '../objects/ItemIdResponse';

export default interface ItemRepository {
  getItem: (id: ItemIdResponse['id']) => Promise<ItemIdResponse>;
  getItemDescription: (id: ItemIdResponse['id']) => Promise<ItemDescriptionResponse>;
}
