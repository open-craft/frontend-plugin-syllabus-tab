const { createConfig } = require('@openedx/frontend-build');

module.exports = createConfig('jest', {
  // setupFilesAfterEnv is used after the jest environment has been loaded.  In general this is what you want.
  // If you want to add config BEFORE jest loads, use setupFiles instead.
  coveragePathIgnorePatterns: [
    'src/setupTest.js',
    'src/i18n',
  ],
});
