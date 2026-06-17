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

// db.query("SELECT * FROM visited_countries", (err, res) => {
//   if(err){
//     console.error("Error executing query", err.stack);
//   }
//   else{
//     countries = res.rows;
//     console.log("You've been to:", countries.length);
//     console.log(countries);
//   }
//   //db.end();
// });

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", async (req, res) => {

  try{
    total = countries.length;
    const result = await db.query("SELECT country_code FROM visited_countries");
    const codes = result.rows.map(row => row.country_code);
    
    res.render("index.ejs", {
      countries: codes, total: codes.length
    });
  }
  catch(error){
    console.error("Error getting countries", error.stack);
    
    res.render("index.ejs", {
      error: error.message, countries: [], total: 0
    });
  }
});


app.post("/add", async (req, res) => { 
  const input =  req.body.country;
  console.log(input);

  try{
    const result = await db.query(
      "SELECT country_code FROM countries WHERE country_name = $1;",
      [input]
    );

    if(result.rows.length == 0){
      res.status(404).send("Country does not exist");
      return;
    } 

    const code = result.rows[0].country_code;

    await db.query(
      "INSERT INTO visited_countries (country_code) VALUES ($1);",
      [code]
    )

    const visited = await db.query(
      "SELECT countries.country_code FROM visited_countries JOIN countries ON visited_countries.country_code = countries.country_code;"
    );
    
    countries = visited.rows.map(country => country.country_code);
    
    console.log("You've been to:", countries.length);

    res.redirect("/");
  }
  catch(error){
    console.error("Error getting countries", error.stack);
    
    res.render("index.ejs", {
      error: error.message, countries: [], total: 0
    });
  }
  //db.end();
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});