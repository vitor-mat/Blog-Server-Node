const express = require("express");
const app = new express();
const port = process.env.PORT || "3001";

const { route } = require("./routes/crud.js");

app.use(route)

const cors = require("cors");

app.use(cors())

app.listen(port, (req, res) => {
    console.log("Server Running!!")
})

