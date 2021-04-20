process.on("message", async (message) => {
  console.log("Request Received " + message.number);
  try {
    const jsonResponse = await result();
    process.send(jsonResponse);
    process.exit();
  } catch (error) {
    process.send("yes");
    process.exit();
  }
});

function result() {
  return new Promise((req, res) => {
    setTimeout(() => {
      res({ type: "ok" });
    }, 5000);
  });
}
