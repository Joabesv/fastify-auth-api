import {
  PrismaClientInitializationError,
  PrismaClientKnownRequestError,
} from '@prisma/client/runtime/index.js';
import { prismaClient as prisma } from '../../database/connection.mjs';

export async function deleteStack(request, reply) {
  const { id } = request.params;

  try {
    const stack = await prisma.stack.delete({
      where: {
        id: Number(id),
      },
    });

    if (!stack) {
      return reply.notFound('the specified id was not found');
    }

    return reply.status(200).send({
      statusCode: 200,
      msg: `the resource ${id} was successfully deleted`,
    });
  } catch (err) {
    if (err instanceof PrismaClientInitializationError) {
      // erro com o db
      return reply.send(err);
    }
    if (err instanceof PrismaClientKnownRequestError) {
      // erro com ações aos dados
      return reply.send(err);
    }
    // erros do server
    return reply.send(err);
  }
}
