import sensible from '@fastify/sensible';
import FastifyPlugin from 'fastify-plugin';

export default FastifyPlugin(async (fastify, opts) => {
  fastify.register(sensible);
});
