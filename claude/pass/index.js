import express from "express";
import bodyParser from "body-parser";
import { dirname, join } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));
const publicPath = join(__dirname, "public");

const app = express();
const port = 3000;
const password = "ILoveProgramming";

app.use(bodyParser.urlencoded({ extended: true }));


//home page
app.get("/", (req, res) => {
     res.sendFile("index.html", { root: publicPath });
});

//secret page
app.post("/check", (req, res) => {
    if(req.body.password === password) {
        res.sendFile("secret.html", { root: publicPath });
    }
    else{
        res.send("Wrong password. Try again.");
    }
    
});

app.listen(port, () => {
    console.log(`Running server on ${port}`);
});
