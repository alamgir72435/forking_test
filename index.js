const app = require("express")();

const { fork } = require("child_process");

app.get("/isprime", (req, res) => {
  // res.setHeader("Access-Control-Allow-Origin", "*");
  // const jsonResponse = isPrime(parseInt(req.query.number));
  // res.send(jsonResponse);

  const childProcess = fork("./isPrime.js");
  childProcess.send({ number: parseInt(req.query.number) });
  childProcess.on("message", (message) => res.send(message));
});

app.get("/", (req, res) => {
  const childProcess = fork("./test.js");

  childProcess.send({ number: 5 });
  childProcess.on("message", (message) => res.send(message));
});

app.listen(8081, () => console.log("Listening on 8081"));
