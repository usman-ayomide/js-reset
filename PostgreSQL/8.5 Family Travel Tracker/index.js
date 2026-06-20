//handle error 
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

let currentId = 1;

//homepage
app.get("/", async (req, res) => {
  try{
    const response = await db.query("SELECT * FROM users");
    //return all users
    const allUsers = response.rows;

    const currentUser = allUsers.find(user => user.id === currentId);
    

    //fetch visited countries
    const result = await db.query("SELECT country_code FROM visited_countries WHERE user_id = $1", [currentId]);
    const total = result.rows.length;
    const codes = result.rows.map(row => row.country_code);
    //console.log(codes);

    res.render("index.ejs", {
      countries: codes,
      total: total,
      users: allUsers,
      color: currentUser.color
    });
  }
  catch(error){
    //res.status(404).send("Cant fetch visited countries", error.stack);
    console.log(error);
  }
});


//add a country
app.post("/add", async (req, res) => {
  //check for the name of the country typed in
  const input = req.body.country;
  try{
    //look for country code of the input in countries
    const response = await db.query("SELECT country_code FROM countries WHERE country_name ILIKE ($1)", [input]);

    //if country code doesnt exist
    if(response.rows.length === 0){
      res.redirect("/");
    }
    else{
      //the country code
      const codes = response.rows[0].country_code;

      //save the country code and the current user into visited countries
      await db.query("INSERT INTO visited_countries (country_code, user_id) VALUES ($1, $2)", [codes, currentId]);

      res.redirect("/");
    }
  } 
  catch (err) {
    console.log(err);
  }
  
});


//switch user
app.post("/user", async (req, res) => {
  //existing users
  const existingUser = req.body.user;
  //add user button
  const addUser = req.body.add;
  console.log(existingUser);

  try{ 
    //if the add user button is click 
    if(addUser){
      res.render("new.ejs");
    }
    else{
      //convert the string to number
      currentId = parseInt(existingUser, 10);
      res.redirect("/");
    }
  }
  catch(error){
    console.log(error);
  }  
});


//add new user
app.post("/new", async (req, res) => {
  //new user name
  const userName = req.body.name;
  //preferred color
  const userColor = req.body.color;

  try{
    //add the name and color to list of users
    const insertion = await db.query("INSERT INTO users (name, color) VALUES ($1, $2) RETURNING *", [userName, userColor]);
    console.log(insertion);

    //set the id the id generated automatically
    currentId = insertion.rows[0].id;

    res.redirect("/");
  }
  catch (error) {
    console.log(error);
  }
  //Hint: The RETURNING keyword can return the data that was inserted.
  //https://www.postgresql.org/docs/current/dml-returning.html
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});