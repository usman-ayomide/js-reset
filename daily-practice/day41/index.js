import express from "express";
import bodyParser from "body-parser";
import pg from "pg";
import bcrypt from "bcrypt";
import dotenv from "dotenv";
dotenv.config();

const app = express();
const port = 3000;
const saltRounds = 10;

app.use(bodyParser.urlencoded({ extended: true }));

const db = new pg.Client({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
});
db.connect();

app.get("/", (req, res) => {
    res.render("index.ejs");
});

app.get("/login", (req, res) => {
    res.render("login.ejs");
});

app.post("/register", async (req, res) => {
    const email = req.body.email;
    const password = req.body.password;

    try{
        const existingUser = await db.query("SELECT * FROM users WHERE email = $1", [email]);

        if(existingUser.rows.length > 0){
            res.redirect("/login");
        }
        else{
            bcrypt.hash(password, saltRounds, async (err, hash) => {
                if(err){
                    console.log("Failed to hash password", err);
                }
                else{
                    console.log(hash);
                    await db.query("INSERT INTO users (email, password) VALUES ($1, $2)", [email, hash]);
                    res.render("home.ejs");
                }
            });
        }
        
    }
    catch(error){
        console.log(error);
    }
    
});


app.post("/login", async (req, res) => {
    const email = req.body.email;
    const password = req.body.password;

    try{
        const checkUser = await db.query("SELECT * FROM users WHERE email = $1", [email]);
        
        if(checkUser.rows.length > 0){
            const hashedPassword = checkUser.rows[0].password;
            const checkPassword = await bcrypt.compare(password, hashedPassword);

            if(checkPassword){
                res.render("home.ejs");
            }
            else{
                console.log("Invalid Password");
                res.render("login.ejs", { error: "Incorrect password." });
            }
        }
        else{
            res.redirect("/register");
        }
    }
    catch(error){
        console.log(error);
    }
});

app.listen(port, () => {
    console.log(`Running server on port ${port}`);
});