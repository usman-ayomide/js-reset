import express from "express";
import bodyParser from "body-parser";
import pg from "pg";
import bcrypt from "bcrypt";
import session from "express-session"
import dotenv from "dotenv";
dotenv.config();

const app = express();
const port = 3000;
//number of times to hash password
const saltRounds = 10;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(session({
    //secret to make the session initialize
    secret:  process.env.SK_SESSION,
    resave: false,
    saveUninitialized: true
}));

const db = new pg.Client({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
});
db.connect();

//render signup page to user
app.get("/", (req, res) => {
    res.render("index.ejs");
});

//render login page to user
app.get("/login", (req, res) => {
    res.render("login.ejs");
});


app.get("/dashboard", (req, res) => {
    //save the email used to login
   const loggedInMail = req.session.email;

    //if user is logged in successfully, 
    //show them them the homepage and the email they sued to signup
   if(loggedInMail){
    res.render("home.ejs", {email: loggedInMail});
   }
   else{
    //if the user is not logged in, redirect them to the login page
    res.redirect("/login");
   }
});


app.post("/register", async (req, res) => {
    const email = req.body.email;
    const password = req.body.password;

    try{
        //check if the email being used to register exists
        const existingUser = await db.query("SELECT * FROM users WHERE email = $1", [email]);

        //if the email exists, redirect them to the login page
        if(existingUser.rows.length > 0){
            res.redirect("/login");
        }
        else{
            //if the email doesn't exist, hash the password by passing it through 
            //salt rounds 
            bcrypt.hash(password, saltRounds, async (err, hash) => {
                if(err){
                    //if the hashing failed, show error message in console
                    console.log("Failed to hash password", err);
                }
                else{
                    //if hashing is successful, save the login parameters into the database
                    //get the session email
                    //redirect to the dashboard
                    await db.query("INSERT INTO users (email, password) VALUES ($1, $2)", [email, hash]);
                    req.session.email = email;
                    res.redirect("/dashboard");
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
        //check if the mail being used to log in exists in the database
        const checkUser = await db.query("SELECT * FROM users WHERE email = $1", [email]);
        
        //if the mail exists, het the saved hashed password 
        // and compare ot to the one being input by the user
        if(checkUser.rows.length > 0){
            const hashedPassword = checkUser.rows[0].password;
            const checkPassword = await bcrypt.compare(password, hashedPassword);

            //if the password matches, save the logged in mail for session and 
            //redirect them to the dashboard
            if(checkPassword){
                req.session.email = email;
                res.redirect("/dashboard");
            }
            else{
                //if the password doesn't match, 
                //render the login page and tell them to try again
                res.render("login.ejs", { error: "Incorrect password, try again." });
            }
        }
        else{
            //if the mail does not exist, 
            //redirect the user to the sign up page
            res.redirect("/register");
        }
    }
    catch(error){
        console.log(error);
    }
});


app.post("/logout", (req, res) => {
    //if a session exists, destroy it
    req.session.destroy((err) => {
        //if error occurred while trying to destroy session
        //render the homepage with the error
        if(err){
            console.log(err);
            res.render("home.ejs", {err: err});
        }
        //if successful, redirect to login page
        else{
            res.redirect("/login");
        }
    });
});

app.listen(port, () => {
    console.log(`Running server on port ${port}`);
});