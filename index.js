const http = require('http');

const server = http.createServer((req, res) => {
  res.end(' hhh Hello sz again from Node.js app github action!');
});

server.listen(3000, () => {
  console.log('Server running on port 3000');
});

