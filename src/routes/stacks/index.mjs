import { getStacks } from './getStacks.mjs';
import { postStacks } from './postStacks.mjs';

export default async fastify => {
  fastify.get('/', getStacks);
  fastify.post('/', postStacks);
};
