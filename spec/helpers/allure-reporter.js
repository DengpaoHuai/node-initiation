const AllureJasmineReporter = require('allure-jasmine');
jasmine.getEnv().addReporter(
  new AllureJasmineReporter({
    resultsDir: 'allure-results',
  }),
);
