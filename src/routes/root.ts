import { FastifyPluginAsync } from 'fastify';

const root: FastifyPluginAsync = async (fastify, opts) => {
  fastify.get('/', async (request, reply) => {
    return await reply.code(200).send({ msg: 'Welcome to my api' });
  });
};

export default root;
