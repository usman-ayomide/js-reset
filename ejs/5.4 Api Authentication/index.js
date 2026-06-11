import express from "express";
import axios from "axios";

const app = express();
const port = 3000;
const API_URL = "https://secrets-api.appbrewery.com/";

//TODO 1: Fill in your values for the 3 types of auth.
const yourUsername = "maleficboss";
const yourPassword = "thebest";
const yourAPIKey = "6924949f-a738-4773-9273-998826749c69";
const yourBearerToken = "1493336f-a456-487f-ab18-2e4c4676924d";

app.get("/", (req, res) => {
  res.render("index.ejs", { content: "API Response." });
});

app.get("/noAuth", async (req, res) => {
  try{
    const response = await axios.get(API_URL + "random");
    const result = response.data;
    const content = JSON.stringify(result);
    res.render("index.ejs", {content: content});
    
  }
  catch(err){
    console.error("Failed to fetch activity", err.response?.data || err.message);
    res.render("index.ejs", { content: "Error: " + err.message });
  }
});

app.get("/basicAuth", async (req, res) => {
  try{
    const randPage = Math.floor(Math.random() * 10) + 1;
    const response = await axios.get(API_URL + `all?page=${randPage}`, {
      auth: {
        username: yourUsername,
        password: yourPassword,
      },
    });
    const result = response.data;

    if(!result || result.length === 0){
      return res.render("index.ejs", { content: "No secrets found on this page." });
    }

    const content = JSON.stringify(result);

    res.render("index.ejs", {content: content});
  }
  catch(err){
    console.error("This page has no secrets:", err.response?.data || err.message);
    res.render("index.ejs", { content: "Error: " + err.message });
  }
});

app.get("/apiKey", async (req, res) => {
  try{
    const emScore = Math.floor(Math.random() * (10 - 5 + 1)) + 5;
    const response = await axios.get(API_URL + `filter?score=${emScore}&apiKey=${yourAPIKey}`);
    const result = response.data;
    const content = JSON.stringify(result);

    res.render("index.ejs", {content: content});
  }
  catch(err){
    console.error("No one has reached the embarrassment score you're looking for:", err.response?.data || err.message);
    res.render("index.ejs", { content: "Error: " + err.message });
  }
  
});

app.get("/bearerToken", async (req, res) => {
  try{
    const id = Math.floor(Math.random() * 100) + 1;
    const response = await axios.get(API_URL +`secrets/${id}`, {
      headers: {
        Authorization: `Bearer ${yourBearerToken}`
      },
    });
    const result = response.data;
    const content = JSON.stringify(result);
    
    res.render("index.ejs", {content: content});    
  }
  catch(err){
    console.error("No secrets exists with this id:", err.response?.data || err.message);
    res.render("index.ejs", { content: "Error: " + err.message });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});