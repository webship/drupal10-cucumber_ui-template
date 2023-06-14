var reporter = require('cucumber-html-reporter');

var options = {
  theme: 'simple',
  jsonFile: 'tests/reports/index.json',
  output: 'tests/reports/index.html',
  reportSuiteAsScenarios: true,
  scenarioTimestamp: true,
  launchReport: true,
  metadata: {
    "App Version": "7.1.0",
    "Test Environment": "development",
    "Browser": "Google Chrome",
    "Platform": "Linux",
    "Parallel": "Scenarios",
    "Executed": "Remote"
  },
  failedSummaryReport: true,
};

reporter.generate(options);