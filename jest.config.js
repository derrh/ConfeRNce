const jestPreset = require('@testing-library/react-native/jest-preset');
module.exports = Object.assign(jestPreset, {
  setupFiles: [...jestPreset.setupFiles, './testSetup.js'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  transformIgnorePatterns: [
    'node_modules/(?!react-native-svg|react-native|react-navigation|@react-navigation/.*)',
  ],
  setupFilesAfterEnv: ['@testing-library/react-native/cleanup-after-each'],
});
