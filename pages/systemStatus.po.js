const { element } = require("protractor");
const frontendHelper = require("../helpers/frontendHelper");
const timeouts = require("../staticValues/constants.json");

const systemStatus = {
  allSystemsLiveLogo: element(by.css(".sc-izUgoq")),
  buttonSystemStatus: element(by.css('[data-hook="nav-system-status"]')),

  clickSystemStatusButton() {
    frontendHelper.clickElement(this.buttonSystemStatus);
  },

  verifyAllSystemsLive() {
    this.clickSystemStatusButton();
    frontendHelper.waitUntilElementPresent(
      this.allSystemsLiveLogo,
      timeouts.clickAction
    );
    frontendHelper.expectElementPresence(
      this.allSystemsLiveLogo,
      "not all of the systems are up and running"
    );
  },
};
module.exports = systemStatus;
