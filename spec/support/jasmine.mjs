export default {
  spec_dir: 'src',
  spec_files: ['**/*[sS]pec.ts'],
  helpers: ['../spec/helpers/ts-node.js', '../spec/helpers/allure-reporter.js'],
  env: {
    stopSpecOnExpectationFailure: false,
    random: true,
    forbidDuplicateNames: true,
  },
};
