import { createServer } from "node:http";

function Homepage() {
  return "<h1>Hello<h1>";
}

const server = createServer((request, response) => {
  console.log("Request incoming...", request.url);
  if (request.url === "/") {
    response.end(Homepage());
  }
});

const port = 8080;

server.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
