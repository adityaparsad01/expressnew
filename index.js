const express = require("express");

const app = express();

console.log(app);

const port = process.env.port || 3000;

app.get("/", (request, response) => {
  response.send("Hello world");
});

app.listen(port, () => {
  console.log(`im listening at ${port}`);
});
