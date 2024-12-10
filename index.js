const express =require("express");

const PORT = 8000;

// initialise app
const app = express();

// view engine
app.set("view engine", "ejs");

// listen server
app.listen(PORT, ()=>{
    console.log('Server s running on port ${PORT}');
})