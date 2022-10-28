import { prismaClient as prisma } from '../../database/connection.mjs';

export async function deleteStack(request, reply) {
  const { id } = request.params;
  const stack = await prisma.stack.delete({
    where: {
      id: Number(id),
    },
  });

  if (!stack) {
    return reply.notFound('the specified id was not found');
  }

  return reply
    .status(200)
    .send({
      statusCode: 200,
      msg: `the resource ${id} was successfully deleted`,
    });
}
