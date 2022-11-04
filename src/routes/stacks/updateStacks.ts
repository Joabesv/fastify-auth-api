import { FastifyReply, FastifyRequest } from 'fastify';
import { prismaClient as prisma } from '../../database/connection';

export async function updateStacks(
  request: FastifyRequest<{ Params: Params }>,
  reply: FastifyReply
): Promise<void> {
  const { id } = request.params;
  const newInfos = request.body as any;

  await prisma.stack.update({
    data: newInfos,
    where: { id: parseInt(id) },
  });

  const updatedStack = await prisma.stack.findUnique({
    where: { id: parseInt(id) },
  });

  return reply.status(204).send(updatedStack);
}

interface Params {
  id: string;
}
