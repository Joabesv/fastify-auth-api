import { prismaClient as prisma } from '../../database/connection.mjs';

export async function getStack(request, reply) {
  const { id } = request.params;
  try {
    const stack = await prisma.stack.findUnique({
      where: { id: Number(id) },
    });
    if (!stack) {
      return reply.notFound('the specified id was not found');
    }
    return reply.status(200).send(stack);
  } catch (err) {
    return reply.internalServerError(err);
  }
}
