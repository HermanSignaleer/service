const http = require('http'),
      httpProxy = require('http-proxy');


httpProxy.createServer(function(req, res) {
    proxy.web(req, res, { target: 'localhost: 4008' }).listen();
});

http.createServer(function (req, res) {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.write('request successfully proxied!' + '\n' + JSON.stringify(req.headers, true, 2));
  res.end();
}).listen(4008);


  