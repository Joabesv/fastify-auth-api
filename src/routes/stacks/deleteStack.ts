import { FastifyRequest, FastifyReply } from 'fastify';
import {
  PrismaClientInitializationError,
  PrismaClientKnownRequestError,
} from '@prisma/client/runtime/index.js';
import { prismaClient as prisma } from '../../database/connection';
import { server } from '../../server';

const { log } = server;

export async function deleteStack(
  request: FastifyRequest<{ Params: Params }>,
  reply: FastifyReply
): Promise<void> {
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
  } catch (error) {
    if (error instanceof PrismaClientInitializationError) {
      // erro com o db
      log.error(`Error in Db Connection ${error.message}`);
      return reply.status(502).send({
        msg: `Error in Database Connection, please make sure your database is running`,
      });
    }
    if (error instanceof PrismaClientKnownRequestError) {
      // erro com ações aos dados
      log.error(`Error in Delete execution ${error.message}`);
      return reply.status(502).send({
        msg: `Error while trying to delete, please confirm the resource exists`,
      });
    }
    log.error(`Error trying to setup route ${error}`);
    return reply.send(error);
  }
}

interface Params {
  id: string;
}
