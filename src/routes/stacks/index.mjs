import { getStacks } from './getStacks.mjs';

export default async fastify => {
  fastify.get('/', getStacks);
};
