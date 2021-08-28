const express = require("express");
const app = new express()
const port = process.env.PORT || "3001"

app.get("/", (req, res) => {
    res.send("Deu certo!")
})

app.listen(port, (req, res) => {
    console.log("Server Running!!")
})

