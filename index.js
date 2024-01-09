const express = require("express")
const ejs = require("ejs")
const app = express()
const PORT = 4000

app.set("view engine", "ejs")
app.use(express.static("public"))

app.get("/", (req, res) =>{
    res.render("index", {name: "Alao"} )
})

app.get("/Welcome", (req, res) =>{
    res.sendFile(__dirname + "/index.html");
})
app.get("/signup", (req, res) =>{
    res.sendFile(__dirname + "/signup.html");
})
app.get("/signin", (req, res) =>{
    res.sendFile(__dirname + "/signin.html");
})
app.get("/dashboard", (req, res) =>{
    res.sendFile(__dirname + "/dashboard.html");
})

app.listen(PORT, (err) =>{
    if(err){
        console.log("i cant run on Port + PORT");
    }else{

        console.log("i am running on 4000")

    }
})