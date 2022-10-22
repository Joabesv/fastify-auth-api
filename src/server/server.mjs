import Fastify from 'fastify';
import { PrismaClient } from '@prisma/client';

const server = Fastify({ logger: true });
const prisma = new PrismaClient();

server.get('/stack', async (request, reply) => {
  const stacks = await prisma.stack.findMany();
  await reply.send(stacks);
});

server.post('/stack', async (request, reply) => {
  const { tech, content } = request.body;
  const stack = await prisma.stack.create({
    data: {
      tech,
      content,
    },
  });
  return reply.send(stack);
});

server.put('/stack/:id', async (request, reply) => {
  const { id } = request.params;
  console.log(request.params);

  const stack = await prisma.stack.update({
    where: { id: parseInt(id) },
    data: { version: 'ES8' },
  });
  return reply.send(stack);
});

export { server };
