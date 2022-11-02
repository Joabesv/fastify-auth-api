import sensible, { SensibleOptions } from '@fastify/sensible';
import FastifyPlugin from 'fastify-plugin';

export default FastifyPlugin<SensibleOptions>(async (fastify, opts) => {
  try {
    await fastify.register(sensible);
  } catch (err: Error | unknown) {
    console.log('error registering Sensible plugin', err);
    process.exit(1);
  }
});
