import glob from 'tiny-glob';
import { build } from 'esbuild';
import esbuildPluginPino from 'esbuild-plugin-pino';
import { pino } from 'pino';
import { loggerSetup } from './src/config/logger';

(async () => {
  const entryPoints = await glob('src/**/*.ts');

  await build({
    entryPoints,
    logLevel: 'info',
    outdir: 'dist',
    bundle: true,
    platform: 'node',
    format: 'cjs',
    sourcemap: true,
    plugins: [esbuildPluginPino({ transports: ['pino-pretty'] })],
  });
})().catch((err) => {
  const logger = pino(loggerSetup);
  logger.error('error while trying to build!', err);
  process.exit(1);
});
