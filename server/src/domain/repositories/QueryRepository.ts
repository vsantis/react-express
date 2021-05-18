import QueryReturn from '../objects/QueryReturn';

export default interface QueryRepository {
  executeQuery: () => Promise<QueryReturn>;
}
