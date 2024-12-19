import http from 'http';

const server = http.createServer((req, res) => {
  console.log(req);
  console.log(req.url);

  res.writeHead(201, 'ok');
  res.end('content');
});

server.listen(8080, () => {
  console.log('connecté !');
});
