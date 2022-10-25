export default async function (fastify, opts) {
  fastify.get('/', async (request, reply) => {
    return reply.code(200).send({ msg: 'Welcome to my api' });
  });
}
