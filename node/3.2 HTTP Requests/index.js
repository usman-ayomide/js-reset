import express from "express";
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("<h1>Hello World!</h1>");
});

app.get("/contact", (req, res) => {
  res.send("<h2>Contact me at: Number 99, sapele road</h2>")
});

app.get("/about", (req, res) => {
  res.send("<p>About me</p>");
});

app.listen(port, () => {
  console.log(`Running server on ${port}`);
});