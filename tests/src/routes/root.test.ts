import { server } from '../../../src/server';

describe('Testing root route', () => {
  test('should return body with success', async () => {
    const request = await server.inject({
      method: 'GET',
      url: '/',
    });
    const { body } = request;
    expect(request.body).toBe(body);
  });
});
