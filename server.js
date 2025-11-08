import express from "express";
const app = express();

app.get("/", (req, res) => {
  res.json({ message: "Hello from CICD EXPO, We are students form KLH studying in 3rd year CSIT" });
});

app.listen(3000, "0.0.0.0", () => console.log("Server running on port 3000"));