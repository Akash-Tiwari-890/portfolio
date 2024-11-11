const express = require("express");
const app = express();
const port = 8080;
const path=require("path");

app.use(express.static(path.join(__dirname,"public")));
app.set("view engin" , "ejs");
app.set("views",path.join(__dirname,"/views"));


app.listen(port, ()=>{
    console.log("listening on port");
});

app.get("/",(req,res)=>{
    res.render("portfolio.ejs");
})
