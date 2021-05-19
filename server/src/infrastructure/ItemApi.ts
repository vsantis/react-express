import axios, { AxiosInstance } from 'axios';
import ItemDescriptionResponse from '../domain/objects/ItemDescriptionResponse';
import ItemIdResponse from '../domain/objects/ItemIdResponse';
import ItemRepository from '../domain/repositories/ItemRepository';

export default class ItemApi implements ItemRepository {
  private axiosInstance: AxiosInstance = axios.create({ baseURL: 'https://api.mercadolibre.com' });

  public async getItem(id: ItemIdResponse['id']): Promise<ItemIdResponse> {
    try {
      const result = await this.axiosInstance.get<ItemIdResponse>(`/items/${id}`);
      return result.data;
    } catch (error) {
      throw Error(error.message);
    }
  }

  public async getItemDescription(id: ItemIdResponse['id']): Promise<ItemDescriptionResponse> {
    try {
      const result = await this.axiosInstance.get<ItemDescriptionResponse>(
        `/items/${id}/description`
      );
      return result.data;
    } catch (error) {
      throw Error(error.message);
    }
  }
}
