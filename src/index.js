const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());
const PORT = 3008;

app.get('/', (_req, res) => {
  res.send('Hello world!');
});

app.get('/users', (_req, res) => {
  res.json([{
    id: 1,
    name: 'Jan'
  }, {
    id: 2,
    name: 'Marzena'
  }]);
});

app.post('/auth', (req, res) => {
  console.log(req.body);
  res.status(200).json({})
});

app.listen(PORT, () => {
  console.log(`Server started on port: ${PORT}`);
});

// const http = require('http');

// const requestListener = function(req, res) {
//   console.log('hit');
//   res.writeHead(200);
//   res.end('Hello, World');
// }

// const server = http.createServer(requestListener);
// console.log('Server started');
// server.listen(3008);
