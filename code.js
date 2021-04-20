/*
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

app.listen(3000, () => console.log("Listening on 3000"));

*/

/*
// const cluster = require("cluster");
// const http = require("http");
// const numCpus = require("os").cpus().length;

// if (cluster.isMaster) {
//   console.log("Master is Running on " + process.pid);
//   for (let i = 0; i < numCpus; i++) {
//     cluster.fork();
//   }

//   cluster.on("exit", (worker, code, signal) => {
//     console.log(`worker ${worker.process.pid} is Died`);
//   });
// } else {
//   http
//     .createServer((req, res) => {
//       res.writeHead(200);
//       setTimeout(() => {
//         res.end("Hello from " + process.pid);
//       }, 5000);
//     })
//     .listen(3000);
//   console.log(`Worker ${process.pid} started`);
// }

*/

/*
const cluster = require("cluster");
const http = require("http");
const numOfCpus = require("os").cpus().length;

if (cluster.isMaster) {
  // keep track of http request
  let numReqs = 0;
  setInterval(() => {
    console.log(`number of requests = ${numReqs}`);
  }, 1000);

  const countRequest = (message) => {
    //
    if (message.cmd === "notify") {
      numReqs++;
    }
  };

  console.log(`Master is Running :` + process.pid);
  for (var i = 0; i < numOfCpus; i++) {
    cluster.fork();
  }

  for (const id in cluster.workers) {
    cluster.workers[id].on("message", countRequest);
  }
} else {
  http
    .createServer((req, res) => {
      res.writeHead(200);
      res.end("Hello world \n" + process.pid);

      // Notify master about the request
      process.send({ cmd: "notify" });
    })
    .listen(3000);

  console.log(`running Cluster ${process.pid}`);
}

*/
