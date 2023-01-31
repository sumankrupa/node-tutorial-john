// HTTP
// Brief intro

const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url == "/") {
    res.end("Welcome to our home page");
  }
  if (req.url == "/about") {
    res.end("this is about page");
  }

  res.end(`
    <h1>Oops!</h1>
    <p>we cant seem to find the page you are looking for </p>
    <a href="/">back home</a>
    `);
});

// port number
server.listen(8000);
