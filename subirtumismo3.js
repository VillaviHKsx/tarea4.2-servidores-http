const http = require('http');

const server = http.createServer((req, res) => {
  const baseUrl = `http://${req.headers.host}`;
  const reqUrl = new URL(req.url, baseUrl);
  const searchParams = new URLSearchParams(reqUrl.searchParams);

  const a = parseFloat(searchParams.get('a'));
  const b = parseFloat(searchParams.get('b'));

  let result;
  if (reqUrl.pathname === '/') {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write("<html>");
    res.write("<body>");
    res.write("<h1>Hazlo tu mismo 3</h1>");
    res.write("<h3>Construye un servidor en el puerto 3000 que responda al usuario de la siguiente manera.</h3>");
    res.write("<h3>1. Para la url '/plus' - retorna la suma de los parametros 'a' y 'b'</h3>\n");
    res.write("<h3>2. Para la url '/mult' - retorna la multiplicacion de los parametros 'a' y 'b'</h3>\n");
    res.write("<h3>3. Para cualquiera otra solicitud responde con 'I don't know how to respond to that'</h3>\n");
    res.write("</body>");
    res.write("</html>");
    res.end();
  } else if (reqUrl.pathname === '/plus') {
    result = a + b;
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end(result.toString());
  } else if (reqUrl.pathname === '/mult') {
    result = a * b;
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end(result.toString());
  } else {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end("I don't know how to respond to that");
  }
});

server.listen(3000, () => {
  console.log("Server running on port 3000");
});