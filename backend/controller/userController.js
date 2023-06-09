const userService = require("../service/userService.js");

// Aqui no controller vamos acessar a pasta de "Service" para que possamos utilizar seus recursos e fazer alguma atividade listada, caso não consiga vai pro catch com o erro

// Controlador responsável por adicionar um usuário
const addUserController = async (req, res) => {
    try{
        const username = req.body.username;
        return res.status(201).send(await userService.addUserService(username)); 

    }catch(err){
        console.log(`Erro: ${err.message}`);
        return res.status(400).send({message: err.message});
    }
};

// Controlador responsável por encontrar todos os usuários
const findUsersController = async (req, res) => {
    try{
        return res.status(200).send(await userService.findUsersService());
    }catch(err){
        console.log(`Erro: ${err.message}`);
        return res.status(404).send({message: err.message});
    }
};

// Controlador responsável por alternar a estrela de um usuário
const toggleUserController = async (req, res) => {
    try{
        await userService.toggleUserService(req.params.username);
        return res.status(200).send({message: "Estrela do Usuário alternado"});
    }catch(err){
        console.log(`Erro: ${err.message}`);
        return res.status(404).send({message: err.message});
    }
};

// Controlador responsável por deletar um usuário
const deleteUserController = async (req, res) => {
    try{
        await userService.deleteUserService(req.params.username);
        return res.status(200).send({message: "Usuário Deletado"});
    }catch(err){
        console.log(`Erro: ${err.message}`);
        return res.status(404).send({message: err.message});
    }
};

module.exports = {
    addUserController,
    deleteUserController,
    findUsersController,
    toggleUserController
}