import { HTTPClient } from '../HTTPClient';

const BASE_URL = 'https://jsonplaceholder.typicode.com';

export const ApiConnect = {
  async getPosts() {
    const url = `${BASE_URL}/posts`;
    try {
      const response = await HTTPClient(url, {
        headers: { },
      });
      return response;
    } catch (err) {
      throw new Error('Nao conseguiu trazer os post do user', err);
    }
  },
};
