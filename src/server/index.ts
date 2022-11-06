import Fastify from 'fastify';
import Autoload from '@fastify/autoload';
import { join } from 'node:path';
import { logger } from '../config/logger';

const server = Fastify({ logger });

// eslint-disable-next-line
server.register(Autoload, {
  dir: join(__dirname, '../plugins'),
});

// eslint-disable-next-line
server.register(Autoload, {
  dir: join(__dirname, '../routes'),
});

export { server };
