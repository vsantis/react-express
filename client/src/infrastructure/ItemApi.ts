import axios from '../middleware/axiosInstance';
import ItemRepository from '../domain/repositories/ItemRepository';
import Items from '../domain/objects/Items';
import ItemDetail from '../domain/objects/ItemDetail';

export default class ItemApi implements ItemRepository {
  public async getItems(query: string): Promise<Items> {
    const result = await axios.get<Items>('/items', {
      params: {
        q: query,
      },
    });
    return result.data;
  }

  public async getItemDetail(id: string): Promise<ItemDetail> {
    const result = await axios.get<ItemDetail>(`/items/${id}`);
    return result.data;
  }
}
