import express from "express";

const app = express();
const port = 3000;

//homepage
app.set("view engine", "ejs");

app.get("/", (req, res) => {
    const data = { 
        title: "My Page",
        name: "Usman",
        items: ["JavaScript", "Node.js", "Express", "EJS"]
    }
    res.render("index.ejs", data);
});

//profile
app.get("/profile", (req, res) =>{
    const user = { 
        name: "Usman", 
        isAdmin: true, 
        score: 85 
    }
    res.render("profile.ejs", user);
});

//error message
app.get("/error", (req, res) =>{
    res.render("error.ejs");
});

app.listen(port, () => {
    
    console.log(`Running server on ${port}`);
});