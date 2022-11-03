import { prismaClient as prisma } from '../../database/connection';
export async function getStacks(request, reply) {
  const stacks = await prisma.stack.findMany();
  return reply.status(200).send(stacks);
}
