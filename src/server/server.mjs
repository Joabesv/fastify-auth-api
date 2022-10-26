import Fastify from 'fastify';
import Autoload from '@fastify/autoload';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const server = Fastify({ logger: true });
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

server.register(Autoload, {
  dir: join(__dirname, '../plugins'),
});

server.register(Autoload, {
  dir: join(__dirname, '../routes'),
});

// server.post('/stack', async (request, reply) => {
//   const { tech, content } = request.body;
//   const stack = await prisma.stack.create({
//     data: {
//       tech,
//       content,
//     },
//   });
//   return reply.send(stack);
// });

// server.put('/stack/:id', async (request, reply) => {
//   const { id } = request.params;
//   console.log(request.params);

//   const stack = await prisma.stack.update({
//     where: { id: parseInt(id) },
//     data: { version: 'ES8' },
//   });
//   return reply.send(stack);
// });

export { server };
