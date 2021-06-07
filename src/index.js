const http = require('http');

const requestListener = function(req, res) {
  console.log('hit');
  res.writeHead(200);
  res.end('Hello, World');
}

const server = http.createServer(requestListener);
console.log('Server started');
server.listen(3008);
