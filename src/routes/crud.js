const express = require("express");
const app = express();

const route = app.route();

route.get("/post", (req, res) => {

})

route.post("/add", (req, res) => {
    
})

route.put("/edit:id", (req, res) => {

})

route.delete("/delete:id", (req, res) => {

})

module.exports = route;