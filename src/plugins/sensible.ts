import { FastifyPluginAsync } from 'fastify';
import FastifyPlugin from 'fastify-plugin';
import sensible, { SensibleOptions } from '@fastify/sensible';
import { server } from '../server';
const { log } = server;

const sensiblePlugin: FastifyPluginAsync<SensibleOptions> = async (
  fastify,
  opts
): Promise<void> => {
  try {
    await fastify.register(sensible);
  } catch (err: Error | unknown) {
    log.error({
      msg: '[SENSIBLE]: Error registering sensible plugin',
      err,
    });
    process.exit(1);
  }
};

export default FastifyPlugin(sensiblePlugin);
