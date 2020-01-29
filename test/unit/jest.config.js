module.exports = {
  rootDir: '../..',
  moduleFileExtensions: [
    'js'
  ],
  moduleNameMapper: {
    '^src/(.*)$': '<rootDir>/src/$1',
    '^test/(.*)$': '<rootDir>/test/$1'
  },
  testRegex: '/test/unit/.*\\.spec\\.(jsx?|tsx?)$',
  transform: {
    '^.+\\.js$': 'babel-jest'
  },
  setupFilesAfterEnv: [
    '<rootDir>/test/unit/setup.js'
  ],
  transformIgnorePatterns: ['<rootDir>/node_modules/'],
  collectCoverageFrom: [
    'app/vuex/*.js',
    '!**/node_modules/**'
  ],
  coverageReporters: [
    'html',
    'json',
    'lcov',
    'text-summary'
  ]
}
