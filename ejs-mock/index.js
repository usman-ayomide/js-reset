import express from "express";
import bodyParser from "body-parser";
import fs from "fs/promises";

const app = express();
const port = 3000;
const user = {
    username: "Usman",
    age: 23,
    skills: [
        {name: "HTML", level: "professional", completed: true}, 
        {name: "CSS", level: "professional", completed: true},
        {name: "JavaScript", level: "learning", completed: false},
        {name: "Express", level: "learning", completed: false},
        {name: "EJS", level: "learning", completed: false}
    ]
};
let isLoggedIn = true;
let projects = [];
let tasks = [];


app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

async function load(){ 
    try{
        const data = await fs.readFile("data.json", "utf8");
        const parseData = JSON.parse(data);
        projects = parseData.projects;
        tasks = parseData.tasks;
    }catch(err){
        console.log("data.json not found", err);
    }
}

//turn both objects into strings before using 
// fs to write then to the json file
async function save(){
    await fs.writeFile("data.json", JSON.stringify({projects: projects, tasks: tasks}, null, 2), "utf8");
}

//change status based on login
app.get("/", (req, res) => {
    res.render("index.ejs", {
        user: user, isLoggedIn: isLoggedIn, projects: projects
    });
});

//finds a project by id and display it
app.get("/projects/:id", (req, res) => {
    const pID = parseInt(req.params.id);
    const specific = projects.find(project => project.id === pID);
    res.render("specific.ejs", {project: specific});
});

//display the form to add a new project
app.get("/projects", (req, res) => {
    res.render("projects.ejs");
});

//add a new project
//generate new id and 
// convert the completed string to boolean
app.post("/projects", async (req, res) => {
    const valueString = req.body.completed;
    const completeBoolean = valueString === "true";

    const randId = projects.length > 0 ? Math.max(...projects.map(project => project.id)) + 1 : 1;
    const newProject = {
        title: req.body.title,
        stack: req.body.stack,
        completed: completeBoolean,
        id: randId
    };
    projects.push(newProject);
    await save();
    res.redirect("/");
});

//find a project by id, 
// delete it and display the remaining projects
app.post("/projects/:id/delete", async (req, res) => {
    const pID = parseInt(req.params.id);
    projects = projects.filter(project => project.id !== pID);
    await save();
    res.redirect("/");
});

//when edit is clicked, 
//redirect to form page and fill old values 
app.get("/projects/:id/edit", (req, res) => {
    const pID = parseInt(req.params.id);
    const specific = projects.find(project => project.id === pID); 
    res.render("edit.ejs", {project: specific});
});

//find the specific project by id,
//update it the content when submit
app.post("/projects/:id/edit", async (req, res) => {
    const pID = parseInt(req.params.id);
    const specific = projects.find(project => project.id === pID); 
    const valueString = req.body.completed;
    const completeBoolean = valueString === "true";
    if(specific){
        specific.title = req.body.title;
        specific.stack = req.body.stack;
        specific.completed = completeBoolean;   
         await save();
        res.redirect("/");
    }else{
        res.redirect("/");
    }
});

//show tasks page
app.get("/tasks", (req, res) => {
    res.render("tasks.ejs", {tasks: tasks});
});

//if tasks does not have object, do not generate id, 
// if it has object, generate id, 
// and push the newly created task into the tasks array
app.post("/tasks", async (req, res) => {
    const randId = tasks.length > 0 ? Math.max(...tasks.map(task => task.id)) + 1 : 1;

    const newTask = {
        id: randId,
        title: req.body.title,
        completed: false
    }

    tasks.push(newTask);
    await save();
    res.redirect("/tasks");
});

//get a task by id
//delete it and display the rest
app.post("/tasks/:id/delete", async (req, res) => {
    const pID = parseInt(req.params.id);
    tasks = tasks.filter(task => task.id !== pID);
    await save();
    res.redirect("/tasks");
});

//get task by id, 
//change it status anytime the toggle button is clicked
app.post("/tasks/:id/toggle", async (req, res) => {
    const pID = parseInt(req.params.id);
    const specific = tasks.find(task => task.id === pID);
    
    if(specific){
        specific.completed = !specific.completed
    }
    await save();
    res.redirect("/tasks");
});

async function start(){
    await load();
    app.listen(port, () => {
        console.log(`Running server on ${port}`);
    });
}
start();
