import express from "express";

const app = express();
const port = 3000;
app.use(express.json());

let todos = [
    { id: 1, text: "Learn Express", done: false },
    { id: 2, text: "Build an API", done: false },
    { id: 3, text: "Push to GitHub", done: false }
];

//all
app.get("/todos", (req, res) => {
    res.json(todos);
});

//one and error
app.get("/todos/:id", (req, res) => {
    const todoId = parseInt(req.params.id);
    const todo = todos.find(todo => todo.id === todoId);

    if(todo){
        res.json(todo);
    } else{
        res.status(404).json({ message: "Todo not found" });
    }
});

//new one
app.post("/todos", (req, res) => {
    todos.push({
        id: todos.length + 1, 
        text: req.body.text,  
        done: false
    });
        
    res.json(todos); 
    console.log(todos);
});


//modify one
app.put("/todos/:id", (req, res) => {
    const todoId = parseInt(req.params.id);
    const todo = todos.find(todo => todo.id === todoId)
        if(todo){
            todo.done = true;
            todo.text = req.body.text;
            res.json(todos)
        } 
        else {
            res.status(404).json({ message: "Todo not found" });
        }   
        console.log(todos);
});

//delete one
app.delete("/todos/:id", (req, res) => {
    const todoId = parseInt(req.params.id);
    const todos = todos.filter(todo => todo.id !== todoId);
    res.json({message: "Deleted successfully"});
    console.log(deleted);
});


app.listen(port, () => {
    console.log(`Running server on ${port}`);
});