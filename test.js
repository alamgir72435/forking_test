process.on("message", async (message) => {
  console.log("Request Received " + message.number);
  //   const jsonResponse = result();
  process.send("yes");
  process.exit();
});

var count = 0;
function result() {
  return new Promise((req, res) => {
    const clear = setInterval(() => {
      count++;
      console.log(count);
    }, 1000);

    setTimeout(() => {
      clearInterval(clear);
      count = 0;
      console.log("Finished One Request================ > ");
      return { s: true };
    }, 10000);
  });
}
