var express = require("express");

var cors = require("cors");

var app = express();
app.use(cors());

app.get("/hello", (req,res)=>{

    res.end("Thank you !!!!!!");
}); 

app.listen(8081);
