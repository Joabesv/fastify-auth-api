import { server } from './server';

const start = async (): Promise<void> => {
  try {
    await server.listen({ port: 5000 });
  } catch (error: Error | unknown) {
    server.log.error({
      msg: 'Error on server startup',
      error,
    });
    process.exit(1);
  }
};

// eslint-disable-next-line
start();
