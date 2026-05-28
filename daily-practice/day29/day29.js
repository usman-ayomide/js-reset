import express from "express";

const app = express();
const port = 3000;
const userLogs = [
        {id: 1, name: "malik", role: "admin"},
        {id: 2, name: "emeka", role: "user"},
        {id: 3, name: "Aisha", role: "user"}
    ];

app.get("/", (req, res) => {
    res.send("Welcome to my server");
});

app.get("/about", (req, res) => {
    res.send("This is the about page");
});

app.get("/users", (req, res) => {
    res.json(userLogs);
});

app.get("/users/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const user = userLogs.find(user => user.id === id);
    if(!user){
        res.send("user not found");
    }
    else{
        res.json(user);
    }
});

app.listen(port, () => {
    console.log(`Running server on port ${port}`);
})