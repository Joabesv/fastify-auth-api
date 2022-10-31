import { getStack } from './getStack.mjs';
import { getStacks } from './getStacks.mjs';
import { postStacks } from './postStacks.mjs';
import { updateStacks } from './updateStacks.mjs';
import { deleteStack } from './deleteStack.mjs';

export default async fastify => {
  fastify.get('/', getStacks);
  fastify.get('/:id', getStack);
  fastify.post('/', postStacks);
  fastify.put('/:id', updateStacks);
  fastify.delete('/:id', deleteStack);
};
