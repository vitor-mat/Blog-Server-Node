const express = require("express");
const app = express();

app.use(express.json())
app.use(express.urlencoded({extended: true}))

const route = require("express").Router();

route.get("/posts", (req, res) => {

})

route.post("/add", (req, res) => {
    
})

route.put("/edit:id", (req, res) => {

})

route.delete("/delete:id", (req, res) => {

})

module.exports = route;