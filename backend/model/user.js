// Como está em memória, vou utilizar um construtor para salvar os dados enquanto a aplicação está rodando

class User{

    // Construtor com as variáveis
    
    constructor(username, nome, avatar, url){
        this.username = username;
        this.nome = nome;
        this.avatar = avatar;
        this.url = url;
        this.estrela = false;
    }
    
    // Método que alterna o valor de estrela

    alternarEstrela = function() {
        this.estrela = !this.estrela;
    }
}

module.exports = {
    User
};