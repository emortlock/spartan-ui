module.exports = {
  testMatch: ['<rootDir>/src/**/*.(spec|test).{ts,tsx,js,jsx}'],
  setupFilesAfterEnv: ['<rootDir>/build/setupTests.ts'],
  collectCoverageFrom: ['<rootDir>/src/**/*.{ts,tsx,js,jsx}'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  transform: {
    '.(ts|tsx)': require.resolve('ts-jest/dist'),
    '.(js|jsx)': require.resolve('babel-jest'),
  },
  transformIgnorePatterns: ['[/\\\\]node_modules[/\\\\].+\\.(js|jsx)$'],
  testURL: 'http://localhost',
  globals: {
    'ts-jest': {
      packageJson: 'package.json',
    },
  },
}
