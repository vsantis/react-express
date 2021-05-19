import axios, { AxiosInstance } from 'axios';
import QueryResponse from '../domain/objects/QueryResponse';
import QueryRepository from '../domain/repositories/QueryRepository';

export default class QueryApi implements QueryRepository {
  private axiosInstance: AxiosInstance = axios.create({ baseURL: 'https://api.mercadolibre.com' });

  public async executeQuery(query: string): Promise<QueryResponse> {
    try {
      const result = await this.axiosInstance.get<QueryResponse>('/sites/MLA/search', {
        params: { q: query },
      });
      return result.data;
    } catch (error) {
      throw Error(error.message);
    }
  }
}
