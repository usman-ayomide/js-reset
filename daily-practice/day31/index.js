import express from "express";

const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.render("form.ejs");
});

app.post("/result", (req, res) => {
    const score1 = parseFloat(req.body.score1);
    const score2 = parseFloat(req.body.score2);
    const score3 = parseFloat(req.body.score3);
    const result = ((score1 + score2 + score3) / 3).toFixed(2);
    //let grade;

    res.render("result.ejs", {result: result});
});

app.listen(port, () => {
    console.log(`Running server on ${port}`);
});