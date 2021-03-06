const EC = protractor.ExpectedConditions;
const timeouts = require("../staticValues/constants.json");
const validation = require("./validation");

module.exports = {
  ...validation,
  navigate(url, timeout = timeouts.requestTimeouts) {
    browser.get(url, timeout).catch(() => {
      browser.sleep(timeouts.tolerance);
      browser
        .switchTo()
        .alert()
        .accept()
        .catch(() => {});
      browser.switchTo().defaultContent();
    });
    browser.sleep(timeouts.tolerance);
  },

  teardown(browser) {
    return Promise.all([
      browser.manage().deleteAllCookies(),
      browser.executeScript("window.sessionStorage.clear();"),
      browser.executeScript("window.localStorage.clear();"),
    ]);
  },

  expectElementPresence(element, errorMessage, presence = true) {
    element.isPresent().then((status) => {
      this.expectCondition(status, presence, errorMessage);
    });
  },

  enterInput(inputElement, value) {
    inputElement.click().clear().sendKeys(value);
  },

  clickElement(pageElement) {
    this.waitUntilElementPresent(pageElement, timeouts.tolerance);
    pageElement.click();
    browser.sleep(timeouts.clickAction);
  },

  waitUntilElementPresent(pageElement, customTimeout) {
    let timeout = timeouts.shortTimeout;
    if (customTimeout) timeout = customTimeout;
    browser.wait(EC.presenceOf(pageElement), timeout).catch(() => {});
  },

  waitUntilElementAppears(pageElement, customTimeout) {
    let timeout = timeouts.shortTimeout;
    if (customTimeout) timeout = customTimeout;
    browser.wait(EC.visibilityOf(pageElement), timeout).catch(() => {});
  },
};
