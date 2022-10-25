import Fastify from 'fastify';
import Autoload from '@fastify/autoload';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { prismaClient as prisma } from '../database/connection.mjs';
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const server = Fastify({ logger: true });
server.register(Autoload, {
  dir: join(__dirname, '../plugins'),
});

server.register(Autoload, {
  dir: join(__dirname, '../routes'),
});

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
