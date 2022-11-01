import glob from 'tiny-glob';
import { build } from 'esbuild';
import esbuildPluginPino from 'esbuild-plugin-pino';
import { pino } from 'pino';

(async () => {
  const entryPoints = await glob('src/**/*.ts');

  await build({
    entryPoints,
    logLevel: 'info',
    outdir: 'bundle',
    bundle: true,
    minify: true,
    platform: 'node',
    format: 'cjs',
    sourcemap: true,
    plugins: [esbuildPluginPino({ transports: ['pino-pretty'] })],
  });
})().catch((err) => {
  const logger = pino();
  logger.error('error while trying to build!', err);
  process.exit(1);
});
