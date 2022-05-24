export default {
  // Automatically clear mock calls, instances and results before every test
  clearMocks: true,

  // Indicates whether the coverage information should be collected while executing the test
  collectCoverage: false,

  // An array of regexp pattern strings used to skip coverage collection
  coveragePathIgnorePatterns: ['<rootDir>/node_modules/'],

  // Indicates which provider should be used to instrument code for coverage
  coverageProvider: 'v8',

  // An array of file extensions your modules use
  moduleFileExtensions: [
    'js',
    'jsx',
    'ts',
    'tsx',
    'json',
    // "node"
  ],

  // An array of directory names to be searched recursively up from the requiring module's location
  moduleDirectories: ['node_modules', 'src'],

  // A map from regular expressions to module names or to arrays of module names that allow to stub out resources with a single module
  moduleNameMapper: {
    '\\.(gif|ttf|eot|svg|png)$': '<rootDir>/src/__tests__/__mocks__/fileMock.ts',
  },

  /**
   * A preset that is used as a base for Jest's configuration
   *
   * 1. `ts-jest/presets/default` or `ts-jest`
   * TypeScript files (.ts, .tsx) will be transformed by ts-jest to CommonJS syntax,
   * leaving JavaScript files (.js, jsx) as-is.
   *
   * 2. `ts-jest/presets/default-esm` TypeScript files (.ts, .tsx) will be transformed
   * by ts-jest to ESM syntax, leaving JavaScript files (.js, jsx) as-is.
   *
   * 3. `ts-jest/presets/js-with-ts`
   * TypeScript and JavaScript files (.ts, .tsx, .js, .jsx) will be transformed by ts-jest
   * to CommonJS syntax. You'll need to set allowJs to true in your tsconfig.json file.
   *
   * 4. `ts-jest/presets/js-with-ts-esm`
   * TypeScript and JavaScript files (.ts, .tsx, .js, .jsx, .mjs) will be transformed by ts-jest to ESM syntax.
   * You'll need to set allowJs to true in your tsconfig.json file.
   *
   * 5. `ts-jest/presets/js-with-babel`
   * TypeScript files (.ts, .tsx) will be transformed by ts-jest to CommonJS syntax, and JavaScript files (.js, jsx) will be transformed by babel-jest.
   *
   * 6. `ts-jest/presets/js-with-babel-esm`
   * TypeScript files (.ts, .tsx) will be transformed by ts-jest to ESM syntax, and JavaScript files (.js, jsx, .mjs) will be transformed by babel-jest.
   */
  preset: 'ts-jest',

  // A list of paths to modules that run some code to configure or set up the testing framework before each test
  setupFilesAfterEnv: ['<rootDir>/src/setupTests.ts'],

  // A list of paths to snapshot serializer modules Jest should use for snapshot testing
  // snapshotSerializers: [],
  snapshotFormat: {
    printBasicPrototype: false,
  },

  // The test environment that will be used for testing
  testEnvironment: 'jsdom',

  // The glob patterns Jest uses to detect test files
  testMatch: [
    '<rootDir>/src/**/__tests__/**/*test.{js,jsx,ts,tsx}',
    '<rootDir>/src/**/*.{spec,test}.{ts,tsx}',
  ],

  // A map from regular expressions to paths to transformers
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
};
