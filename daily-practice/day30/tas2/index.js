import express from "express";

const app = express();
const port = 3000;

app.set("view engine", "ejs");

app.get("/", (req, res) => {
    const data = { 
        title: "My Page",
        name: "Usman",
        items: ["JavaScript", "Node.js", "Express", "EJS"]
    }
    res.render("index.ejs", data);
});

app.listen(port, () => {
    console.log(`Running server on ${port}`);
});