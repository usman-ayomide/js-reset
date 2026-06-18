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


app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", async (req, res) => {

  try{
    const result = await db.query("SELECT country_code FROM visited_countries");
    const codes = result.rows.map(row => row.country_code);
    
    res.render("index.ejs", {
      countries: codes, total: codes.length
    });
  }
  catch(error){
    console.error("Error getting countries", error.stack);
    
    const result = await db.query("SELECT country_code FROM visited_countries");
    const codes = result.rows.map(row => row.country_code);

    res.render("index.ejs", {
      error: error.message, countries: codes, total: codes.length
    });
  }
});


//get the input
//query the input, select country code from countries where the name is likely to be what was input
//handle error for when it doesn't exist
//store the country code, into visited countries
//check fir duplicate by querying for the country code to ascertain if it hasn't been input
//redirect
//catch the error

app.post("/add", async (req, res) => {
  const input = req.body.country;
  try{
    const result = await db.query("SELECT country_code FROM countries WHERE country_name ILIKE $1", [input]);

    if(result.rows.length === 0){
      return;
    }

      const codes = result.rows[0].country_code;

      const duplicate = await db.query(
        "INSERT INTO visited_countries (country_code) VALUES ($1);",
        [codes]
      );

      res.redirect("/");
  }
  catch(error){
    const result = await db.query("SELECT country_code FROM visited_countries");
    const codes = result.rows.map(row => row.country_code);

    if(error.code === "23505"){
      res.render("index.ejs", {
        error: "You've already added that country",
        countries: codes, total: codes.length
      });
    }
    else{
      res.render("index.ejs", {
        error: error.message, codes, total: codes.length
      });
    }
  }
  //db.end();
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});