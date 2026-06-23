import express from "express";
import bodyParser from "body-parser";
import pg from "pg";
import dotenv from "dotenv";
dotenv.config();

const app = express();
const port = 3000;

const db = new pg.Client({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
});
db.connect();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));


app.get("/", async (req, res) => {
  try{
    const items = await db.query("SELECT * FROM todo");
 
    res.render("index.ejs", {
      listTitle: "Today",
      listItems: items.rows,
    });
  }
  catch(error){
    console.log(error);
  } 
});

app.post("/add", async (req, res) => {
  const item = req.body.newItem;
  try{
    await db.query("INSERT INTO todo (title) VALUES ($1)", [item]);

    res.redirect("/");
  }
  catch(error){
    console.log(error);
  }
});

app.post("/edit", async (req, res) => {
  const item = req.body.updatedItemTitle;
  const id = req.body.updatedItemId;
  try{
    await db.query("UPDATE todo SET title = $1 WHERE id = $2", [item, id]);
    
    res.redirect("/");
  }
  catch(error){
    console.log(error);
  }
});

app.post("/delete", async (req, res) => {
  const item = req.body.deleteItemId;
  try{
    await db.query("DELETE FROM todo WHERE id = $1", [item]);

    res.redirect("/");
  }
  catch(error){
    console.log(error);
  } 
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});