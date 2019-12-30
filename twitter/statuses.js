/* eslint-disable no-console */
const twitter = require('./oauth');

module.exports = {
  postMessage(message) {
    return twitter.post('statuses/update', {
      status: `Motivation message of the day:\n${message}`,
    })
      .then((tweet) => tweet)
      .catch((error) => {
        throw error;
      });
  },
};
