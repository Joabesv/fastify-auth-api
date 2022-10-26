import { prismaClient as prisma } from '../../database/connection.mjs';

export async function postStacks(request, reply) {
  const { tech, content } = request.body;
  const stacks = await prisma.stack.findMany();
  const stackAlreadyExists = stacks.some(stack => stack.tech === tech);
  const newStack = await prisma.stack.create({
    data: {
      tech,
      content,
    },
  });

  if (stackAlreadyExists) {
    return reply.badRequest('Stack already created');
  }

  return reply.status(201).send(newStack);
}
