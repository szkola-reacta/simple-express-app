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
  const VALID_EMAIL = 'patryk.omiotek@gmail.com';
  const VALID_PASSWORD = 'admin1';

  const { email, password } = req.body;

  if (email === VALID_EMAIL && password === VALID_PASSWORD) {
    res.status(200).json({ status: 'ok' });
  } else {
    res.status(403).json({ error: 'invalid credentials' });
  }
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
