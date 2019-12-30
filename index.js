const { createServer } = require('restify');

const server = createServer();

// Authentication
server.use((req, res, next) => {
  next();
});

server.post('/message', (req, res) => {
  res.send(200);
});
