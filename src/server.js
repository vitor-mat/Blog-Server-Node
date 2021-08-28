(async () => {

    const Connection  = require("./database/db.js");

    try{
        await Connection.sync({ alter: true});
        await console.log("Database success running!")
    }catch (error){
        console.log("Erro para inicializar o banco: " + error);
    }

})()

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

