const fs = require('fs');

const requestHandler = (reque, respo) => {
  const url = reque.url;
  const method = reque.method;
  if (url === '/') {
    respo.setHeader('Content-Type', 'text/html')
    respo.write('<html>');
    respo.write('<head><title>First Assignment</title></head>');
    respo.write('<body><form action ="/create-user" method="POST"><input type="text" placeholder = "Nuevo Usuario" name="create-user"><button type="submit">Create</button></form></body>');
    respo.write('</html>');
    return respo.end();
  }
    if (url === '/create-user' && method === 'POST') {
    const body = [];
    reque.on('data', (chunky) => {
      body.push(chunky);
    }
    );
    reque.on('end', ()=> {
      const parsedBody = Buffer.concat(body).toString();
      const user = parsedBody.split('=')[1];
      fs.readFile('users.txt','utf8', function(err,data){fs.writeFileSync('users.txt', `${data}\n${user}`) })

    })
    respo.statusCode = 302;
    respo.setHeader('Location', '/users');
    return respo.end();
    }
  if (url === '/users') {

    respo.write('<html>');
    respo.write('<head><title>Users</title></head>');
    respo.write('<body> <ul>')
    let userlist = fs.readFileSync('users.txt', 'utf8');
    userlistextended = userlist.split('\n')
    console.log(userlistextended)
    userlistextended.map(User =>{respo.write(`<li> ${User} </li> `)})
    respo.write('</ul>');
    // respo.write('<form action="/" method ="POST><button type="submit">Return</button></form>');
    respo.write('</body > ');
    respo.write('</html>');
    return respo.end();
  }
  

}
  
  
module.exports = requestHandler;

  
  
  








