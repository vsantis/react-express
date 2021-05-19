/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from 'axios';
import QueryApi from '../QueryApi';

jest.mock('axios');

describe('QueryApi Infrastructure', () => {
  it('Should return api response', async () => {
    const query = 'mesa';
    // @ts-ignore
    axios.create.mockImplementation((config: any) => axios);
    // @ts-ignore
    axios.get.mockImplementation(() => {
      return {
        data: { query },
      };
    });

    const queryRepository = new QueryApi();
    const result = await queryRepository.executeQuery(query);

    expect(result.query).toBe(query);
  });

  it('Should return error', async () => {
    const query = 'mesa';
    const errorMessage = 'Test Error';
    // @ts-ignore
    axios.create.mockImplementation((config: any) => axios);
    // @ts-ignore
    axios.get.mockImplementation(() => {
      throw new Error(errorMessage);
    });

    const queryRepository = new QueryApi();
    const result = await queryRepository.executeQuery(query);
    // @ts-ignore
    expect(result.message).toBe(errorMessage);
  });
});
