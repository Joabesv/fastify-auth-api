import type { Config } from 'jest';

export default async (): Promise<Config> => {
  return {
    transform: {
      '^.+\\.ts?$': [
        'esbuild-jest',
        {
          sourcemap: true,
          loaders: {
            '.spec.ts': 'ts',
          },
        },
      ],
    },
    testEnvironment: 'node',
    // preset: 'ts-jest',
    verbose: true,
  };
};
