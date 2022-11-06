import { server } from '../../../src/server';

test('should return success', async () => {
  const request = await server.inject({
    method: 'GET',
    url: '/',
  });
  const response = { msg: 'Welcome to my api' };
  expect(request).toBe(response);
});
