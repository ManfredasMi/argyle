const { element } = require("protractor");
const frontendHelper = require("../helpers/frontendHelper");
const timeouts = require("../staticValues/constants.json");
const scenarioData = require("../staticValues/scenarioData.json").frontend;

const login = {
  buttonSignIn: element(by.css('[type="submit"]')),
  logoArgyle: element(by.css('[data-hook="argyle-logo-home-page"]')),
  emailInputField: element(by.id("sign-in-email")),
  passwordInputField: element(by.id("sign-in-passowrd")),

  openBaseUrl() {
    frontendHelper.navigate(`${browser.params.baseUrl}`);
  },

  clickSignInButton() {
    frontendHelper.clickElement(this.buttonSignIn);
  },

  verifyBaseUrl() {
    frontendHelper.expectElementPresence(
      this.buttonSignIn,
      "sign in button is missing on base url"
    );
  },

  verifyHomePageUrl() {
    frontendHelper.enterInput(
      this.emailInputField,
      scenarioData.loginPage.username
    );
    frontendHelper.enterInput(
      this.passwordInputField,
      scenarioData.loginPage.password
    );
    this.clickSignInButton();
    frontendHelper.waitUntilElementPresent(
      this.logoArgyle,
      timeouts.loginTimeout
    );
    frontendHelper.expectElementPresence(
      this.logoArgyle,
      "argyle logo missing after successfully logging in"
    );
  },
};
module.exports = login;
