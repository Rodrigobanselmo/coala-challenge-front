const nextJest = require('next/jest')

const createJestConfig = nextJest({
    // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
    dir: './',
})

// Add any custom config to be passed to Jest
/** @type {import('jest').Config} */
const config = {
    // Add more setup options before each test is run
    setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
    testEnvironment: 'jest-environment-jsdom',
    preset: 'ts-jest',
    collectCoverageFrom: [
        '**/*.{js,jsx,ts,tsx}',
        '!**/index.{js,jsx,ts,tsx}',
        '!**/styles.{js,jsx,ts,tsx}',
        '!**/types.{js,jsx,ts,tsx}',
        '!**/*.d.ts',
        '!**/node_modules/**',
        '!**/.next/**',
        '!**/public/**',
        '!**/configs/**',
        '!**/constants/**',
        '!**/enums/**',
        '!**/interfaces/**',
        '!**/services/**',
        '!./jest.config.js',
        '!./jest.setup.js',
        '!./loadershim.js',
        '!./*.config.js',
        '!./*.config.*.js',
        '!./**/*.styled.ts',
        '!./**/*.styles.ts',
        '!./**/Styles.ts',
      ],
}

// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
module.exports = createJestConfig(config)