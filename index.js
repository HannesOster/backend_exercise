import { createServer } from "node:http";

function firstFish() {
  return "<h1>Shrimp<h1>";
}
function About() {}

const server = createServer((request, response) => {
  console.log("Request incoming...", request.url);
  if (request.url === "/api/fish1") {
    response.end(firstFish());
  }
  if (request.url === "/api/fish2") {
    response.end("Anemonenfisch");
  }
});

const port = 8080;

server.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
