const connection = require("../database/db")
const Posts = require("../models/posts");
const siteAccess = require("../models/siteAccess");

const route = require("express").Router();


//Rota para registrar um acesso ao site
route.post("/new-access", async (req, res) => {
    try{
        const validationAccess= await siteAccess.findAll()

        if(validationAccess[0].dataValues.allAccess > 0){
           const addAccess = await siteAccess.update({
               allAccess: Number(validationAccess[0].dataValues.allAccess) + 1
           }, {
               where:{
                   id: req.params.id
               }
           })
        }

        return res.send(validationAccess)       
    }catch(error){

        const data = new Date();
        const yearNow = data.getFullYear();
        const monthNow = data.getMonth();

        const newAccess = await siteAccess.create({
            allAccess: 1,
            ano: Number(yearNow),
            mes: Number(monthNow)
        })

        return res.send("contagem Iniciada!")
    }
})

//Rota para pegar o numero de acessos ao site
route.get("/all-access", async (rec, res) => {
    const allAccess = await siteAccess.findAll({
        where:{
            id: 1
        }
    })

    res.send(allAccess)
})

//Rota para pegar todos os posts
route.get("/posts", async (req, res) => {
    const myPosts = await Posts.findAll();

    res.send(myPosts)
})

//Rota para cadastrar um post
route.post("/add", async (req, res) => {
    try{
        const data = new Date();
        const yearNow = data.getFullYear();
        const monthNow = data.getMonth();
    
        const newPosts = await Posts.create({
            ano: Number(yearNow),
            mes: Number(monthNow),
            acessos: 0,
            title: req.body.title,
            description: req.body.description,
            content: req.body.content,
        });
    
        return res.send("Sucesso ao cadastar os posts")

    }catch(error){
        console.log("Ocorreu este erro: "+error)
    }
})

//Rota para editar um post
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

//Rota para deletar um post
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

//Rota para adicionar contagem de acesso a um determinado post
route.post("/new-post-access/:id", async (req, res) => {

    try{
   
        const currentlyPostAccess = await Posts.findAll({
            where:{
                id: req.params.id
            } 
        })

        const newPostAccess = await Posts.update({
            acessos: Number(currentlyPostAccess[0].dataValues.acessos) + 1
        },{
            where:{
                id: req.params.id
            }
        })

    }catch(err){
        console.log(err)
    }
})

module.exports = route;