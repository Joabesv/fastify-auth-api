import { pino } from 'pino';

const { cwd } = process;
const pinoTransport = {
  targets: [
    {
      level: 'info',
      target: 'pino-pretty',
      options: {
        destination: 1,
        colorize: true,
        translateTime: 'HH:MM:ss.l',
        ignore: 'pid,hostname',
      },
    },
    {
      level: 'error',
      target: 'pino/file',
      options: {
        destination: `${cwd()}/src/tmp/errors.log`,
        mkdir: true,
      },
    },
  ],
};

export const logger = pino({ transport: pinoTransport });
