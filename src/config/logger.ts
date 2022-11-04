import { PrettyOptions } from 'pino-pretty';

// still want to make this one better
export const loggerSetup: IloggerSetup = {
  transport: {
    target: 'pino-pretty',
    options: {
      destination: 1,
      colorize: true,
      translateTime: 'HH:MM:ss.l',
      ignore: 'pid,hostname',
    },
  },
};

interface IloggerSetup {
  transport: {
    target: string;
    options: PrettyOptions;
  };
}
