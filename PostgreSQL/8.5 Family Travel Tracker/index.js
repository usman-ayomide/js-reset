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
  port: 5432,
});
db.connect();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

let currentUserId = 1;

//two initial users
let users = [
  { id: 1, name: "Angela", color: "teal" },
  { id: 2, name: "Jack", color: "powderblue" },
];


async function checkVisisted() {
  //look for country code inside visited countries
  const result = await db.query("SELECT country_code FROM visited_countries");
  let countries = [];
  result.rows.forEach((country) => {
    //push each code into the empty array
    countries.push(country.country_code);
  });
  return countries;
}

//homepage
app.get("/", async (req, res) => {
  //check for visrted countries
  const countries = await checkVisisted();

  
  res.render("index.ejs", {
    //visited countries
    countries: countries,
    //number of countries visted
    total: countries.length,
    //the array of users
    users: users,
    //styling
    color: "teal",
  });
});


//add a country
app.post("/add", async (req, res) => {
  //check for the name of the country typed in
  const input = req.body["country"];

  try {
    //look for the country name and select the country code 
    const result = await db.query(
      "SELECT country_code FROM countries WHERE LOWER(country_name) LIKE '%' || $1 || '%';",
      [input.toLowerCase()]
    );

    //if the country exist, store it
    const data = result.rows[0];
    //store the country code
    const countryCode = data.country_code;

    try {
      //add the country code to the visited countries table
      await db.query(
        "INSERT INTO visited_countries (country_code) VALUES ($1)",
        [countryCode]
      );


      res.redirect("/");
    } 
    catch (err) {
      console.log(err);
    }

  } 
  catch (err) {
    console.log(err);
  }
});


app.post("/user", async (req, res) => {

  users.forEach(user => {
    currentUserId = user.id;
    
  });

  const countries = await checkVisisted();

  
  res.render("index.ejs", {
    //visited countries
    countries: countries,
    //number of countries visted
    total: countries.length,
    //the array of users
    users: users,
    //styling
    color: "teal",
  });
  res.render("index.ejs",
    
  );
});

app.post("/new", async (req, res) => {
  //Hint: The RETURNING keyword can return the data that was inserted.
  //https://www.postgresql.org/docs/current/dml-returning.html
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});