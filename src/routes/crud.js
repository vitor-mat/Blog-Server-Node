const express = require("express");
const app = express();

app.use(expres.json())
app.use(express.urlencoded({extended: true}))

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