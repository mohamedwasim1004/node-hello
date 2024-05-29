const http = require('http');
const port = process.env.MY_PORT ;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  const msg = 'Hello Node! Deployed from jenkins\n'
  res.end(msg);
});

server.listen(port, () => {
  console.log(`Server running on http://localhost:${port}/`);
});
