import { server } from './server/server.mjs';

const start = async () => {
  try {
    await server.listen({ port: 5000 });
  } catch (err) {
    console.log(`error on start ${err}`);
    process.exit(1);
  }
};

start();
