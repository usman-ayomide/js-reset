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
        const total = result.rows.length;

        const codes = result.rows.map(row => row.country_code);

        res.render("index.ejs", {
            countries: codes,
            total: total
        });
    }
    catch(error){
        
        res.status(404).send("Cant fetch visited countries", error.stack);
    }
});

app.post("/add", async (req, res) => {
    const input = req.body.country;
    
    try{
        const result = await db.query("SELECT country_code FROM countries WHERE country_name ILIKE $1", [input]);

        if(result.rows.length === 0){
            return;
        }

        const codes = result.rows[0].country_code;

        const duplicate = await db.query("INSERT INTO visited_countries (country_code) VALUES ($1)", [codes]);

        res.redirect("/");
    }
    catch(error){
        const result = await db.query("SELECT country_code FROM visited_countries");
        const total = result.rows.length;
        const codes = result.rows.map(row => row.country_code);

        if(error.code === "23505"){
            res.render("index.ejs", {
                error: "You've already added that country",
                countries: codes,
                total: total
            });
            // res.status(404).send(`You've added that ${result} before`, error.stack);
        }
        else{
            res.render("index.ejs", {
                error: error.message,
                countries: codes,
                total: total
            });
        }
    }
});

app.listen(port, () => {
    console.log(`Running server on ${port}`);
})