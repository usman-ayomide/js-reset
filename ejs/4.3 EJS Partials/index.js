import express from "express";

const app = express();
const port = 3000;
app.use(express.static("public"));

//homepage
app.get("/", (req, res) => {
  res.render("index.ejs");
});

//about page
app.get("/about", (req, res)=>{
  res.render("about.ejs");
});


//contact page
app.get("/contact", (req, res) => {
  res.render("contact.ejs");
});


app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});