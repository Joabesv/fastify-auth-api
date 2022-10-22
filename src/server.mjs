import Fastify from 'fastify';
import { PrismaClient } from '@prisma/client';

const fastify = Fastify({ logger: true });
const prisma = new PrismaClient();

fastify.get('/stack', async (request, reply) => {
  const stacks = await prisma.stack.findMany();
  await reply.send(stacks);
});

fastify.post('/stack', async (request, reply) => {
  const { tech, content } = request.body;
  const stack = await prisma.stack.create({
    data: {
      tech,
      content,
    },
  });
  return reply.send(stack);
});

fastify.put('/stack/:id', async (request, reply) => {
  const { id } = request.params;
  console.log(request.params);

  const stack = await prisma.stack.update({
    where: { id: parseInt(id) },
    data: { version: 'ES8' },
  });
  return reply.send(stack);
});

const start = async () => {
  try {
    await fastify.listen({ port: 5000 });
  } catch (err) {
    console.log(`error on start ${err}`);
    process.exit(1);
  }
};

start();
