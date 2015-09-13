'use strict';

const runtime = require('runtimejs');
const eshttp = require('eshttp');
const server = new eshttp.HttpServer();
const response = new eshttp.HttpResponse(200, { 'server': 'runtimejs' }, 'Hello World!');

server.onrequest = request => {
  request.respondWith(response);
};

server.listen(9000);
console.log('listening to port 9000');
