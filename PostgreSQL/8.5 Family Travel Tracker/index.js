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
    //console.log(currentUser);
    //const rand = Math.floor(Math.random() * allUsers.length);
    //const currentUser = allUsers[rand];
    //console.log(allUsers, rand, currentUser);

    //if current user exists, get the id
    //currentId = currentUser ? currentUser.id : null;
    //console.log(currentId);

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
    const response = await db.query("SELECT country_code FROM countries WHERE country_name ILIKE ($1)", [input]);
    //console.log(response);

    if(response.rows.length === 0){
      res.redirect("/");
    }
    else{
      const codes = response.rows[0].country_code;

      await db.query("INSERT INTO visited_countries (country_code, user_id) VALUES ($1, $2)", [codes, currentId]);

      res.redirect("/");
    }
  } 
  catch (err) {
    console.log(err);
  }
  
});


// app.post("/user", async (req, res) => {

//   try{
//     const cUser = req.body.name;
//     const result = await db.query("SELECT id, color FROM user WHERE name = $1", [cUser]);
//     const resId = result.rows.id;
//     const resColor = result.rows.color;
//     const answer = await db.query("SELECT country_code FROM visited_countries WHERE user_id = $1)", [resId]);
//     const codes = answer.rows.map(row => row.country_code);

//     res.render("index.ejs", {
//       countries: codes,
//       total: codes.length,
//       users: cUser,
//       color: resColor
//     });

//   }
//   catch(error){
//     console.log(error);
//   }  
// });



// app.post("/new", async (req, res) => {
//   const change = req.body.add;

//   users.push(change);
//   const returned = await db.query();
//   res.redirect("/");
//   //Hint: The RETURNING keyword can return the data that was inserted.
//   //https://www.postgresql.org/docs/current/dml-returning.html
// });

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});