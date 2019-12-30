const fetch = require('node-fetch');

module.exports = {
  async getTodayQuote() {
    const result = await fetch('http://quotes.rest/qod.json?category=inspire');
    const json = await result.json();
    if (!json.success) {
      throw json;
    }
    const message = json.contents.quotes[0].quote;

    return message;
  },
};
