import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;
var filled;
var results;


app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  filled = false;
  res.render("index.ejs", {filled: filled});
});

app.post("/submit", (req, res) => {
  const fName = req.body.fName.length;
  const lName = req.body.lName.length;
  results = fName + lName;
  filled = true;

  res.render("index.ejs", {results: results, filled: filled});
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});