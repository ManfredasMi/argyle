/* eslint-disable no-console */
const DEFAULT_BASE_URL = "https://console.argyle.io";
const timeouts = require("./staticValues/constants.json");

exports.config = {
  framework: "jasmine2",
  seleniumAddress: "http://localhost:4444/wd/hub",
  directConnect: false,

  suites: {
    systemStatusPage: "./test/systemStatus.spec.js"
  },

  params: {
    baseUrl: DEFAULT_BASE_URL
  },

  capabilities: {
    browserName: 'chrome',
  },

  getPageTimeout: timeouts.getPageTimeout,
  jasmineNodeOpts: {
    defaultTimeoutInterval: timeouts.jasmineTimeout,
    isVerbose: false
  }
};
