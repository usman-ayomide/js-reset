import express from "express";
import axios from "axios";

const app = express();
const port = 3000;

app.use(express.static('public'));

app.get("/", async (req, res) => {
    try{
        const result = await axios.get("https://secrets-api.appbrewery.com/random");

        res.render("index.ejs", {user: result.data.username, secret: result.data.secret});
    }
    catch(error){
        console.error("This page has no secrets", error.message || error);
    }
    
});

app.listen(port, () => {
    console.log(`Running server on ${port}`);
});