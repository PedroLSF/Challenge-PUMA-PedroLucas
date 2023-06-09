// Importação do User
const { User } = require("../model/user.js");

// Variáveis Globais

// Lista que salva os usuários em memória
const listaUsers = [];
async function addUserService(username) {
    // Verifica se tem 5 users e retorna err
    if(listaUsers.length >= 5){
        throw new Error('Limite máximo atingido!');
    }else if(listaUsers.findIndex(user => user.username == username) !== -1){
        throw new Error('Esse já é um usuário favorito');
    }
    const res = await fetch(`https://api.github.com/users/${username}`);
    const data = await res.json();

    if(data.message == "Not Found"){
        throw new Error('Usuário não encontrado');
    }

    let usuario = new User(data.login, data.name, data.avatar_url, data.html_url);
    listaUsers.push(usuario);
}

async function findUsersService(){
    return listaUsers;
}

async function deleteUserService(username) {
    let index = listaUsers.findIndex(user => user.username == username);
    if(index == -1){
        throw new Error("Usuário não encontrado");
    }
    listaUsers.splice(index, 1);
}

async function toggleUserService(username) {
    let index = listaUsers.findIndex(user => user.username == username);
    let indexEstrela = listaUsers.findIndex(user => user.estrela == true);
    if(index == -1){
        throw new Error("Usuário não encontrado");
    }
    if(indexEstrela == -1 || index == indexEstrela){
        listaUsers[index].alternarEstrela();
    }else{
        listaUsers[indexEstrela].alternarEstrela();
        listaUsers[index].alternarEstrela();
    }
}


module.exports = {
    addUserService,
    deleteUserService,
    findUsersService,
    toggleUserService
}