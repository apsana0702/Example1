var http = require('http');
var fs = require('fs');
http.createServer((req, res) =>{
res.write('hellooo!!!!!!Welcome to node.js');
  res.end();
}).listen(8080);