const http = require('http');
const fs = require('fs');

const server = http.createServer((reque, respo)=>{
  const url = reque.url;
  const method = reque.method;
  if (url === '/') {
    respo.write('<html>');
    respo.write('<head><title>Enter Message</title></head>');
    respo.write('<body><form action ="/message" method="POST"><input type="text" name="message"><button type="submit">send</button></form></body>');
    respo.write('</html>');
    return respo.end();
  }
  if (url === '/message' && method === 'POST') {
    const body = [];
    reque.on('data', (chunky) => {
      console.log(chunky);
      body.push(chunky);
     }
    );
    reque.on('end', ()=> {
      const parsedBody = Buffer.concat(body).toString();
      const message = parsedBody.split('=')[1];
      fs.writeFileSync('message.txt', message)
    })
    respo.statusCode = 302;
    respo.setHeader('Location', '/');
    return respo.end();
  }
  respo.setHeader('Content-Type', 'text/html')
  respo.write('<html>');
  respo.write('<head><title>My First Node Page</title></head>');
  respo.write('<body><h1>Primera Página de Node.js</h1></body>');
  respo.write('</html>');
  respo.end();
});

server.listen(2500);