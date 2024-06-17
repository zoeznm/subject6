const http = require('http');
const fs = require('fs');

const server = http.createServer(function(request, response) {
  if(request.method === 'GET') {
    console.log(request.url);
    
    if(request.url === '/') {
      const first = fs.readFileSync("./index.html", "utf8");
      response.statusCode = 200;
      response.setHeader('Content-Type', 'text/html; charset=utf-8');
      response.write(first);
      response.end();

    } else if(request.url === "/style.css") {
      const second = fs.readFileSync("./style.css", "utf8");
      response.statusCode = 200;
      response.setHeader('Content-Type', 'text/css; charset=utf-8');
      response.write(second);
      response.end();

    } else if(request.url === "/server.js") {
      const third = fs.readFileSync("./server.js", "utf8");
      response.statusCode = 200;
      response.setHeader('Content-Type', 'text/javascript; charset=utf-8');
      response.write(third);
      response.end();
    } 
    
    console.log(request.url);
  }
});

server.listen(4000);
