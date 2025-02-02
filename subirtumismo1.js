const http = require("http");

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write("<html>");
    res.write("<body>");
    res.write("<h1>Hazlo tu mismo 1</h1>");
    res.write("<h3>Crea un servidor que responda a 127.0.0.1:3000 con el nombre de tu ciudad y el nombre de tu pais.</h3>");
    res.write("<p>Vivo en la ciudad de Quito</p>");
    res.write("<p>Que pertenece a este lindo pais el Ecuador</p>");
    res.write("<p>Realizado por: Hernan Villavicencio S</p>");
    res.write("</body>");
    res.write("</html>");
    res.end();
});


server.listen(3000, () => {
  console.log("Server running on port 3000");
});