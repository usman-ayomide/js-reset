import express from "express";
import bodyParser from "body-parser";
import pg from "pg";

const app = express();
const port = 3000;

const db = new pg.Client({
  user: "postgres",
  host: "localhost",
  database: "worls]d",
  password: "123-ayomide",
  port: 5432
});

db.connect();

let countries = [];
let total = 0;

db.query("SELECT * FROM visited_countries", (err, res) => {
  if(err){
    console.error("Error executing query", err.stack);
  }else{
    countries = res.rows;
    console.log("You've been to:", countries.length);
    console.log(countries);
  }
  //db.end();
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", async (req, res) => {
  //Write your code here.
  try{
    total = countries.length;
    const code = countries.map(country => country.country_code);
    
    res.render("index.ejs", {
      countries: code, total: code.length
    });
  }
  catch(error){
    console.error("Error getting countries", error.stack);
    
    res.render("index.ejs", {
      error: error.message, countries: [], total: 0
    });
  }
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});