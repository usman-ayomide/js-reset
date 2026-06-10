import express from "express";
import axios from "axios";

const app = express();
const port = 3000;

app.get("/", async (req, res) => {
    try{
        const response = await axios.get("https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum&vs_currencies=usd");
        // console.log(response.data);
        console.log(`Bitcoin: $${response.data.bitcoin.usd}`);
        console.log(`Ethereum: $${response.data.ethereum.usd}`);
        res.json(response.data);
    }catch(err){
        console.error("Failed to fetch prices", err.message || err);
        res.status(500).send("Failed to fetch activity. Please try again");
    }
});

app.listen(port, () => {
    console.log(`Running server on ${port}`);
});