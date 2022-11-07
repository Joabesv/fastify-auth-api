import glob from 'tiny-glob';
import { build } from 'esbuild';
import esbuildPluginPino from 'esbuild-plugin-pino';
import { server } from './src/server';
const { log } = server;

(async () => {
  const entryPoints = await glob('src/**/*.ts');

  await build({
    entryPoints,
    logLevel: 'info',
    outdir: 'dist',
    platform: 'node',
    format: 'cjs',
    sourcemap: true,
    plugins: [esbuildPluginPino({ transports: ['pino-pretty'] })],
  });
})().catch((err) => {
  log.error({
    msg: '[ESBUILD]: Error building app',
    err,
  });
  process.exit(1);
});
