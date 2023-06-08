/*
Regras:
- Máximo de 5 usuários;
- Post -> Adicionar um usuário à lista de favoritos (Username, nome, avatar e url)
- Get -> Listagem dos usuários favoritos salvos em memória
- Delete -> Remover um usuário da lista de favoritos
- Patch -> Marca/Desmarca um usuário da lista de favoritos com uma estrela - essa rota deverá funcionar como uma chave (Toggle), alternando entre liga/desliga a estrela do usuário
- Só pode ter 1 usuário com estrela (Desmarca outro)
*/

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