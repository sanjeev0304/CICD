import express from "express";
const app = express();

app.get("/", (req, res) => {
  res.json({ message: "Hello from Dockerized Node.js on EC2!" });
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`API listening on :${port}`));
