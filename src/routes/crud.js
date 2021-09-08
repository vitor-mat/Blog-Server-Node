const connection = require("../database/db")
const Posts = require("../models/posts");

const route = require("express").Router();

route.get("/Posts", (req, res) => {

})

route.post("/add", async (req, res) => {
    try{
        const data = new Date();
        const yearNow = data.getFullYear();
        const monthNow = data.getMonth();
    
        const newPosts = await Posts.create({
            title: req.body.title,
            description: req.body.description,
            content: req.body.content,
            ano: Number(yearNow),
            mes: Number(monthNow)
        });
    
        return res.send(newPosts)

    }catch(error){
        console.log("Ocorreu este erro: "+error)
    }
})

route.put("/edit:id", (req, res) => {

})

route.delete("/delete:id", (req, res) => {

})

module.exports = route;