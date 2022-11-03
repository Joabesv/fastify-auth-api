import { FastifyInstance } from 'fastify';
import { getStack } from './getStack';
import { getStacks } from './getStacks';
import { postStacks } from './postStacks';
import { updateStacks } from './updateStacks';
import { deleteStack } from './deleteStack';

export default async (fastify: FastifyInstance): Promise<void> => {
  fastify.get('/', getStacks);
  fastify.post('/', postStacks);
  fastify.get('/:id', getStack);
  fastify.put('/:id', updateStacks);
  fastify.delete('/:id', deleteStack);
};
