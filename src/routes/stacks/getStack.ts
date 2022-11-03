import { FastifyReply, FastifyRequest } from 'fastify';
import { prismaClient as prisma } from '../../database/connection';

export async function getStack(
  request: FastifyRequest<{ Params: Params }>,
  reply: FastifyReply
): Promise<void> {
  const { id } = request.params;
  try {
    const stack = await prisma.stack.findUnique({
      where: { id: Number(id) },
    });
    if (stack === null) {
      return reply.notFound('the specified id was not found');
    }
    return reply.status(200).send(stack);
  } catch (err) {
    return reply.internalServerError(`${err}`);
  }
}

interface Params {
  id: string;
}
