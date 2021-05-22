import Items from '../objects/Items';
import ItemDetail from '../objects/ItemDetail';

export default interface ItemRepository {
  getItems: (query: string) => Promise<Items>;
  getItemDetail: (id: string) => Promise<ItemDetail>;
}
