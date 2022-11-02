import sensible, { SensibleOptions } from '@fastify/sensible';
import { FastifyPluginAsync } from 'fastify';
import FastifyPlugin from 'fastify-plugin';

const sensiblePlugin: FastifyPluginAsync<SensibleOptions> = async (
  fastify,
  opts
): Promise<void> => {
  try {
    await fastify.register(sensible);
  } catch (err: Error | unknown) {
    console.log('error registering Sensible plugin', err);
    process.exit(1);
  }
};

export default FastifyPlugin(sensiblePlugin);
