const http = require("http");

const server = http.createServer((req, res) => {

  const {url} = req;
  if(url === "/"){
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write("<html>");
    res.write("<body>");
    res.write("<h1>Hazlo tu mismo 2</h1>");
    res.write("<h3>Construye un servidor en el puerto 3000 que responda al usuario de la siguiente manera.</h3>");
    res.write("<h3>1. Para la url '/city' - retorna 'Paris'</h3>\n");
    res.write("<h3>2. Para la url '/country' retorna 'Romania'</h3>\n");
    res.write("<h3>3. Para cualquiera otra solicitud responde con 'I don't know how to respond to that'</h3>\n");
    res.write("</body>");
    res.write("</html>");
  } else if (url === "/city"){
      res.write("Paris");
  } else if (url === "/country"){
    res.write("Romania");
  } 
  else {
    res.statusCode = 404;
    res.write("I don't know how to respond to that");
  }
    res.end();
});

server.listen(3000, () => {
    console.log("Server running on port 3000");
});