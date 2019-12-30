require('dotenv').config();
const { createServer } = require('restify');
const quotesAPI = require('./quotesAPI/quotes');
const twitterAPI = require('./twitter/statuses');

const server = createServer();

// Authentication
server.use((req, res, next) => {
  if (req.header('api-key') === process.env.API_KEY) {
    next();
  } else {
    res.send(401, 'Not authorized');
  }
});

server.post('/message', async (req, res) => {
  try {
    const message = await quotesAPI.getTodayQuote();
    const tweet = await twitterAPI.postMessage(message);
    res.send(200, tweet);
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log(error);
    res.send(500, error);
  }
});

server.listen(process.env.PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Server running on PORT: ${process.env.PORT}`);
});
