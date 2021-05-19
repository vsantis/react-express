import QueryResponse from '../objects/QueryResponse';

export default interface QueryRepository {
  executeQuery: (query: string) => Promise<QueryResponse>;
}
