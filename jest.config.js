module.exports = {
  testMatch: [
    "**/__tests__/**/*.+(ts|tsx|js)",
    "**/?(*.)+(spec|test).+(ts|tsx|js)"
  ],
  transform: {
    '^.+\\.svelte$': 'svelte-jester',
    '^.+\\.js$': 'babel-jest',
    "^.+\\.(ts|tsx)$": "ts-jest",
  },
  moduleFileExtensions: ['js','ts', 'svelte'],
}