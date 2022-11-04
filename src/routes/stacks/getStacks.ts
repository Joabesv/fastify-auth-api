import { FastifyReply, FastifyRequest } from 'fastify';
import { prismaClient as prisma } from '../../database/connection';

export async function getStacks(
  request: FastifyRequest,
  reply: FastifyReply
): Promise<void> {
  const stacks = await prisma.stack.findMany();
  return reply.status(200).send(stacks);
}
