# Trajetória e Como utilizar o Challenge-PUMA

## Trajetória

Aqui irei listar o meu pensamento para desenvolver e como segui:

1. Levantar a ID. Visual do Github para tentar deixar o mais próximo possível dele
2. Pensei em desenvolver o meu Backend
3. Pensei em desenvolver meu Frontend
4. Pensei em fazer os testes automatizados
5. Pensei em fazer os testes unitários do backend com Jest
6. Agora revisar e comentar alguns pontos
7. Por fim, escrever esse guia kkk


Vamos agora adentrar em cada ponto

### Desenvolver o Backend

Dentro do Back, foram utilizados os conceitos de OO, Design Patterns e organização, ele está estrutrado no modelo MVC, ou seja, estamos com as seguintes pastas:

Parte do Controle do sistema:
* Controller: Aqui faz o controle dos serviços disponibilizados pelo service
* Service: Lógicas dos serviços listados na regra de negócio
* Router: Todas as rotas de Acesso estão aqui

Parte do Model:
* Aqui está o construtor do meu usuário

Parte do View:
* Está basicamente no arquivo index.js fora de todas as pastas

### Desenvover o Frontend

Dentro do Front, eu criei um aplicativo no React e trabalhei com as seguinte ideia:

Vou ter as pages que são Components,Home e Services

Dentro do Components tenho:
* Cards com cardElement (Cada card de usuário) e cardList (Lista com todos cardElemente)
* NavBar com a barra de pesquisa

Dentro da Home tenho a Navbar e a lista de card sendo chamada

Dentro do Service tenho as requisições pelo Axio para o backend

### Fazer os testes automatizados

Aqui será uma explicação mais curta, eu levantei os possíveis casos e criei um scrip para executar

### Fazer os testes Unitários com o Jest

Aqui utilizei os Jests para fazer os possíveis testes do problema em questão

**Em suma foram esses pontos, visto que os outros passos foram as refatorações**
**Obs.: Eu pensei em utilizar o ciclo TDD para fazer os testes, depois o código e por fim refatorar, mas visto que é um desafio contra o tempo, optei por fazer algo funcional primeiro**

## Tecnologias utilizadas

* NodeJS + Express (Utilize v18.16.0 para frente)
* React
* Jest (Teste unitário)
* Cypress (Automatizar Testes)

## Intalação e utilização

1. Faça o clone do projeto
 
Backend:

2. Vá para a pasta do backend

     ```
     cd backend/
     ```
     
3.  Instale os pacotes

    ```
     npm install
    ```
    
4. Execute o arquivo index.js

    ```
     node index.js
    ```
    
Frontend: 

5. Abra outro terminal e vá para o a pasta **github** dentro da pasta frontend

    ```
     cd frontend/github/
    ```
    
6.  Instale os pacotes

    ```
     npm install
    ```
7. Execute o front

    ```
     npm start
    ```
    
8. Pronto, seu front e back estão ligados!!

Caso queira rodar os testes, pode fazer o seguinte:

1. Para abrir o Cypress

    ```
      npx cypress open
    ```
    
*P.S.: E que ele precisa do Backend ligado para funcionar*

*P.S.: Vale ressaltar que para testar o Cypress, temos que reiniciar o backend quando vamos testar para resetar a variável que lista os usuários*

    
3. Para executar o Jest

   ```
   npx jest
   ```
  
Aqui já conseguimos rodar todos os pontos levantados, obrigado!
