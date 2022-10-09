const http = require('http');
// ---------------------------opcion 1---------------------------------------
// function rqListener(reque, respo) {
  
  // }
  
  // http.createServer(rqListener);
  // ---------------------------opcion 2---------------------------------------
  // http.createServer(function (reque, respo){
    
  // });
  // ---------------------------opcion 3---------------------------------------
const server = http.createServer((reque, respo)=>{
  console.log(reque.url, reque.method);
  respo.setHeader('Content-Type', 'text/html')
  respo.write('<html>');
  respo.write('<head><title>My First Node Page</title></head>');
  respo.write('<body><h1>Primera Página de Node.js</h1></body>');
  respo.write('</html>');
  respo.end();
});

server.listen(2500);