import Fastify from 'fastify';
import Autoload from '@fastify/autoload';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { setupLogger } from '../config/logger.mjs';

const server = Fastify({ logger: setupLogger });
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

server.register(Autoload, {
  dir: join(__dirname, '../plugins'),
});

server.register(Autoload, {
  dir: join(__dirname, '../routes'),
});

export { server };
