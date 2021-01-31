const login = require("../pages/login.po");
const systemStatus = require("../pages/systemStatus.po");
const frontendHelper = require("../helpers/frontendHelper");

describe("Login page ", () => {
  beforeAll(() => {
    browser.waitForAngularEnabled(false);
  });

  afterAll((done) => {
    frontendHelper.teardown(browser).then(done).catch(done);
  });

  it("expect 'sign in' button is present after navigating to base url", () => {
    login.openBaseUrl();
    login.verifyBaseUrl();
  });

  it("expect that argyle logo is present after successfully login in", () => {
    login.verifyHomePageUrl();
  });

  it("expect that are up and running", () => {
    systemStatus.verifyAllSystemsLive();
  });
});
