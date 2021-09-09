const connection = require("../database/db")
const Posts = require("../models/posts");
const siteAccess = require("../models/siteAccess");

const route = require("express").Router();


//Rota para pegar todos os posts
route.get("/posts", async (req, res) => {
    const myPosts = await Posts.findAll();

    res.send(myPosts)
})

//Rota para pegar um post em especifico
route.post("/new-access", async (req, res) => {
    try{
        const validationAccess= await siteAccess.findAll()

        if(validationAccess[0].dataValues.allAccess > 0){
            return console.log("Eu sou maior que 0")
        }

        return ("Eu não deveria aparecer!")       
    }catch(error){
        
        const validationAccess= await siteAccess.findAll()

        const newAccess = await siteAccess.create({
            allAccess: 1
        })

        return console.log("agora estou pronto")
    }
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
    
        return res.send("Sucesso ao cadastar os posts")

    }catch(error){
        console.log("Ocorreu este erro: "+error)
    }
})

route.put("/edit/:id", async (req, res) => {
    try{
        const editToPost = await Posts.update({
            title: req.body.title,
            description: req.body.description,
            content: req.body.content
        },{
            where:{
                id: req.params.id
            }
        })

        res.send("Editado com sucesso!")
    }catch(error){
        res.send("Falha ao editar: "+error)
    }
})

route.delete("/delete/:id", async (req, res) => {
    try{
        const removePost = await Posts.destroy({
            where: {
                id: req.params.id
            }
        })

        res.send("Deletado com sucesso!")
    }catch(error){
        res.send("Falha ao Deletar: "+error)
    }
})

module.exports = route;