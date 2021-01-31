const axios = require("axios");

const root = `https://console.argyle.io`;
const timeouts = require("../staticValues/constants.json");

const request = axios.create({
  timeout: timeouts.requestTimeout,
});

module.exports = {
  request,

  postRequestWithHeader(payload, url, header = {}) {
    return request
      .post(url, payload, { headers: header })
      .catch((error) => error.response);
  },

  login(loginPayload) {
    return this.postRequestWithHeader(loginPayload, root);
  },
};
