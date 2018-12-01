module.exports = {
  rootDir: ".",
  roots: ['src/client'],
  preset: 'jest-preset-angular',
  setupTestFrameworkScriptFile: './src/client/jest.setup.ts',
  globals: {
    'ts-jest': {
      tsConfigFile: './src/client/tsconfig.spec.json'
    },
    __TRANSFORM_HTML__: true
  },
  coverageDirectory: './coverage/client',
  collectCoverageFrom: ['src/client/**/*.{ts,js,jsx}'],
};
