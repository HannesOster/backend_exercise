import { createServer } from "node:http";
import Chance from "chance";

function firstFish() {
  return "<h1>Shrimp<h1>";
}

let count = 0;
function Greeting(count) {
  const chance = new Chance();

  const name = chance.name();
  const age = chance.age();
  const profession = chance.profession();
  return `<h2>Hey, my name is ${name}, i am ${age} years old and i am a ${profession}.</h2>
  <p>This page was visited ${count} times.</p>`;
}

const server = createServer((request, response) => {
  console.log("Request incoming...", request.url);
  if (request.url === "/api/fish1") {
    response.end(firstFish());
  }
  if (request.url === "/api/fish2") {
    response.end("Anemonenfisch");
  }
  if (request.url === "/") {
    count++;
    response.end(Greeting(count));
  }
});

const port = 5000;

server.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
