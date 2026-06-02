import express from "express";
import fs from "node:fs/promises";

const app = express();
const port = 3000;
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));


let posts = [];
let drafts = [];
let draftId = 0;
let profileInfo = [];
let isEditing;
const dataFile = "./data/blog.json";

//read data.json
async function load(){
    try{
        const fileContent = await fs.readFile(dataFile, "utf8");
        const parseData = JSON.parse(fileContent);

        posts = parseData.posts || [];
        drafts = parseData.drafts || [];
        profileInfo = parseData.profileInfo || [];

        if(drafts.length > 0){
            draftId = Math.max(...drafts.map(d => d.id)) + 1;
        }
        console.log("data.json loaded successfully");

    } catch (error){
        if(error.code === "ENOENT"){
            console.log("data.json not found");
        }
        else{
            console.error("Error parsing data:", error);
        }
    }
}

//save to data.json
async function save(){
    try{
        const toSave = {
            posts: posts,
            drafts: drafts,
            profileInfo: profileInfo
        };
        await fs.writeFile(dataFile, JSON.stringify(toSave, null, 2), "utf8");
        console.log("data.json updated successfully");
    } catch (error){
        console.error("Failed to save data", error);
    }
}


//homepage
app.get("/", (req, res) => {
    res.render("index.ejs", {posts: posts});
});



//write
app.get("/write", (req, res) => {
    res.render("write.ejs")
});

//sends content fromm write to homepage
app.post("/write", (req, res) => {
    res.render("index.ejs")
});

//show posts on homepage
app.post("/post", async (req, res) => {
    posts.push(req.body);
    await save();
    res.redirect("/");
});


//shows all the drafts 
app.get("/draft", (req, res) => {
    res.render("draft.ejs", {drafts: drafts, draftId: draftId});
});

//add id to drafts and increase it per draft saved
app.post("/draft", async (req, res) => {
    const newDraft = {
        id: draftId,
        ...req.body
    }
    drafts.push(newDraft);
    draftId++;
    await save();
    res.redirect("/draft");
});

//get draft by id, then delete it
app.post("/draft/:id", async (req, res) => {
    const target = parseInt(req.params.id);
    drafts = drafts.filter(draft => draft.id !== target);
    await save();
    res.redirect("/draft");
});

//when edit is clicked, redirect to edit page 
// and show the content of what is to be edited
app.get("/draft/:id/edit", (req, res) => {
    const target = parseInt(req.params.id);
    let foundDraft = drafts.find(draft => draft.id === target);
    res.render("write.ejs", {foundDraft: foundDraft});
});

//get the draft with the id, update it to the changed one
app.post("/draft/:id/edit", async (req, res) => {
    const target = parseInt(req.params.id);
    let foundDraft = drafts.find(draft => draft.id === target);
    if(foundDraft){
        foundDraft.title = req.body.title;
        foundDraft.body = req.body.body;
        foundDraft.image = req.body.image;
    } 
    await save();
    res.redirect("/draft")
});

//when editing and post is clicked,
//delete the draft from draft page and post to homepage
app.post("/draft/:id/post", async (req, res) => {
    const target = parseInt(req.params.id);
    posts.push(req.body);
    drafts = drafts.filter(draft => draft.id !== target);
    await save();
    res.redirect("/");
});



//display profile
app.get("/profile", (req, res) => {
    res.render("profile.ejs", {profileInfo: profileInfo, isEditing: false});
});

//when submit button
//add information to profile info and redirect with the info to /profile
app.post("/profile/submit", async (req, res) => {
    profileInfo.push(req.body);
    await save();
    res.redirect("/profile");
});

//when edit button gets clicked, 
app.get("/profile/edit", (req, res) => {
    res.render("profile.ejs", {profileInfo: profileInfo, isEditing: true});
});
app.post("/profile/update", async (req, res) => {
    if(profileInfo.length > 0){
        profileInfo[0].url = req.body.url;
        profileInfo[0].username = req.body.username;
        profileInfo[0].country = req.body.country;
        profileInfo[0].dob = req.body.dob;
    }
    await save();
    res.redirect("/profile");
});


async function start(){
    await load();
    app.listen(port, () => {
        console.log(`Running server on ${port}`);
    });
    
}

start();