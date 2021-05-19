import QueryApi from '../../../infrastructure/QueryApi';
import { executeQueryService } from '../QueryService';
import fakeData from './queryFakeData.json';

jest.mock('../../../infrastructure/QueryApi');

describe('Query Service', () => {
  it('Should return formatted response', async () => {
    // @ts-ignore
    QueryApi.mockImplementation(() => ({ executeQuery: jest.fn().mockResolvedValue(fakeData) }));

    const repository = new QueryApi();
    const executeQuery = executeQueryService(repository);

    const result = await executeQuery({ name: 'Jasmine', lastname: 'Jest', query: 'Test' });
    expect(result).toMatchObject({
      author: {
        name: 'Jasmine',
        lastname: 'Jest',
      },
      categories: ['Muebles para el Hogar'],
      items: [
        {
          id: 'MLA670899102',
          title: 'Mesa Nordica Escandinava 60x100 Comedor Cocina Maciza',
          price: {
            currency: 'ARS',
            amount: 6599,
            decimals: 0,
          },
          picture: '',
          condition: 'new',
          free_shipping: false,
        },
        {
          id: 'MLA872158753',
          title: 'Mesa Nórdico Escandinavo Comedor Cocina 1.00 X 60 Cm.',
          price: {
            currency: 'ARS',
            amount: 6000,
            decimals: 0,
          },
          picture: '',
          condition: 'new',
          free_shipping: false,
        },
      ],
    });
  });

  it('Should return error', async () => {
    const errorMessage = 'Test Error';
    // @ts-ignore
    QueryApi.mockImplementation(() => ({
      executeQuery: jest.fn().mockRejectedValue(errorMessage),
    }));

    const repository = new QueryApi();
    const executeQuery = executeQueryService(repository);

    const result = await executeQuery({ name: 'Jasmine', lastname: 'Jest', query: 'Test' });

    expect(result).toBe(errorMessage);
  });
});
