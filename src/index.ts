import { server } from './server/server';

const start = async (): Promise<void> => {
  try {
    await server.listen({ port: 5000 });
  } catch (err: Error | unknown) {
    server.log.error(err);
    process.exit(1);
  }
};

// eslint-disable-next-line
start();
