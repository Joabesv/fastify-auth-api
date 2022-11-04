import { Stack } from '@prisma/client';
import { FastifyReply, FastifyRequest } from 'fastify';
import { prismaClient as prisma } from '../../database/connection';

export async function postStacks(
  request: FastifyRequest<{ Body: Body }>,
  reply: FastifyReply
): Promise<void> {
  const { tech, content, version } = request.body;
  const stacks = await prisma.stack.findMany();
  const stackAlreadyExists = stacks.some((stack) => stack.tech === tech);
  if (stackAlreadyExists) {
    return reply.badRequest('Stack already created');
  }
  const newStack = await prisma.stack.create({
    data: {
      tech,
      content,
      version,
    },
  });

  return reply.status(201).send(newStack);
}

// gotta make this one better
type Body = Stack;
