// Utilizei os testes para fazer os testes unitários

/*
    Visando a aplicação, foram pensados os seguintes casos:

    - Lança uma exceção quando o limite máximo é atingido
    - Lança uma exceção quando o usuário já existe na lista
    - Não lança uma exceção quando as condições são atendidas

    Seriam só esses 3, visto que a lógica não deixa com que o usuário apague um usuário que não exista e nunca deixa ele marcar
    mais de 2 estrelas, porém, para deixar registrado, caso fosse possível seriam esses casos de testes:

    - Lança uma exceção quando já existe um usuário com estrela e coloca um segundo
    - Lança uma exceção quando não há usuários para deletar

    Como dito, esses dois ultimos casos, nunca acontecira com o usuário real, porém foram listados para demonstração
*/


// Essa função irá ficar adicionando vários usuários de acordo com a regra de negócio

function adicionarUsuario(username, estrela, listaUsers) {

    // Validações

    if (listaUsers.length >= 5) {
      throw new Error('Limite máximo atingido!');
    } else if (listaUsers.findIndex(user => user.username === username) !== -1) {
      throw new Error('Esse já é um usuário favorito');
    } else if (estrela && listaUsers.some(user => user.estrela)) {
      throw new Error('Só é permitido um usuário favorito');
    }
    // Adicione o usuário à lista de usuários
  }
  
    describe('adicionarUsuario', () => {
        test('Lança uma exceção quando o limite máximo é atingido', () => {
            
            // Seta a Variável

            const listaUsers = [
            { username: 'user1', estrela: false },
            { username: 'user2', estrela: false },
            { username: 'user3', estrela: false },
            { username: 'user4', estrela: false },
            { username: 'user5', estrela: false },
        ];
        
            // Faz a comparação para ver se o throw foi lançado

        expect(() => adicionarUsuario('user6', false, listaUsers)).toThrow('Limite máximo atingido!');
        });
    
        test('Lança uma exceção quando o usuário já existe na lista', () => {

        // Seta a Variável

        const listaUsers = [
            { username: 'user1', estrela: false },
            { username: 'user2', estrela: false },
            { username: 'user3', estrela: false },
        ];

        // Faz a comparação para ver se o throw foi lançado
    
        expect(() => adicionarUsuario('user2', false, listaUsers)).toThrow('Esse já é um usuário favorito');
        });
    
        test('Lança uma exceção quando já existe um usuário com estrela e coloca um segundo', () => {

        // Seta a Variável
        const listaUsers = [
            { username: 'user1', estrela: true },
        ];

        // Faz a comparação para ver se o throw foi lançado
    
        expect(() => adicionarUsuario('user2', true, listaUsers)).toThrow('Só é permitido um usuário favorito');
        });
        
        test('Não lança uma exceção quando as condições são atendidas', () => {
        
        // Seta a Variável
        const listaUsers = [
            { username: 'user1', estrela: false },
            { username: 'user2', estrela: false },
            { username: 'user3', estrela: false },
        ];
        
        // Faz a comparação para ver se o throw não foi lançado

        expect(() => adicionarUsuario('user4', true, listaUsers)).not.toThrow();
        });
    }
);

function deletarUsuario(username, listaUsers) {
    // Verificação
    if (listaUsers.length === 0) {
      throw new Error('Não há usuários para deletar');
    }
    // Remova o usuário da lista de usuários
  }
  
    describe('deletarUsuario', () => {
        test('Lança uma exceção quando não há usuários para deletar', () => {

            // Seta a Variável
            const listaUsers = [];

            // Faz a comparação para ver se o throw foi lançado
            expect(() => deletarUsuario('user1', listaUsers)).toThrow('Não há usuários para deletar');
        });
    }
);
  
  