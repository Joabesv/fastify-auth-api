import { prismaClient as prisma } from '../../database/connection.mjs';

export async function updateStacks(request, reply) {
  const { id } = request.params;
  const newInfos = request.body;

  await prisma.stack.update({
    data: newInfos,
    where: { id: parseInt(id) },
  });

  const updatedStack = await prisma.stack.findUnique({
    where: { id: parseInt(id) },
  });

  return reply.status(204).send(updatedStack);
}
