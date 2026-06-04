import express from "express";
import fs from "fs/promises"


const app = express();
const port = 3000;
let contacts = [];

app.use(express.json());

// read, parse, modify, stringify, write

async function load(){
    const fileData = await fs.readFile("contacts.json", "utf8");
    const contactsInfo = JSON.parse(fileData).contacts;
    //contacts[contactsInfo];
    contacts.push(...contactsInfo);
}

async function save(){
    try{
        await fs.writeFile("contacts.json", JSON.stringify({contacts: contacts}, null, 2), "utf8");
        console.log("updated");
    }
    catch (err){
        console.log(err);
    }
}

app.get("/contacts", async (req, res) => {
    res.json(contacts);
});

app.get("/contacts/:id", async (req, res) => {
    const id = parseInt(req.params.id);
    const contact = contacts.find(c => c.id === id);
    if(!contact) return res.status(404).json({message: "Not found"});
    res.json(contact);
});

app.post("/contacts", async (req, res) => {
    // const name = req.body.name;
    // const phone = req.body.phone;
    // const email = req.body.email;

    let contactId = contacts.length > 0 ? Math.max(...contacts.map(c => c.id)) + 1: 1;
    
    const newContact = {
        id: contactId,
        name: req.body.name, 
        phone: req.body.phone,
        email: req.body.email
    }
    contacts.push(newContact);

    await save();
    res.json(contacts)
});

app.delete("/contacts/:id", async (req, res) => {
    const id = parseInt(req.params.id);
    contacts = contacts.filter(c => c.id !== id);
    await save();
    res.json(contacts);
});

async function start(){
    await load();

    app.listen(port, () => {
        console.log(`Running server on ${port}`);
    });
}
start();