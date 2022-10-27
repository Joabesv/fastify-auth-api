import { getStack } from './getStack.mjs';
import { getStacks } from './getStacks.mjs';
import { postStacks } from './postStacks.mjs';

export default async fastify => {
  fastify.get('/', getStacks);
  fastify.get('/:id', getStack);
  fastify.post('/', postStacks);
};
