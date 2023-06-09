/// <reference types="Cypress" />

describe('Adicionar', () => {

  // Antes de cada teste, visite o localhost
  beforeEach(function() {
    // Visite a página inicial
    cy.visit('http://localhost:3000');
  })

  // Primeiro Teste é Adicionar o User, ele usa dois comandos que estão em cypress/support/commands.js a fim de reutilização de código e vê se está visível o card requisitado
  it('Adiciona User', () => {
    cy.fillPedroAndSubmit();
    cy.fillznehACAndSubmit();
    cy.get('.Card').should('be.visible');
  })

  // Deleta o Usuário, ele pega o primeiro botã0 de deletar de um total de 2 (Visto que no primeiro caso deixamos 2 adicionados), como vamos verificar se deletou 1 de 2, basta ver se o total de cards é igual a 1
  it('Deletar User', () => {
   cy.get('.deleteButton').first().click();
   cy.get('.Card').should('have.length', 1);
  })

  // Marca o usuário, ele pega o primeiro e único e clica, e depois ele vê se ganhou a classe "fill-yellow-500", basicamente a ideia aqui é observar que se for verdade, quer dizer que marcou
  it('Marcar uma estrela', () => {
    cy.get('.star').first().click();
    cy.get('.iconStar').should('have.class', 'fill-yellow-500');
  })

  // Aqui vamos mudar a marcação anterior, primeiro adicionamos um segundo card e verificamos se ele continua marcado, depois disso, vamos clicar no recem adicionado e ver se ele agora está marcado
  it('Mudar Estrela', () => {
    cy.fillPedroAndSubmit();
    cy.get('.iconStar').first().should('have.class', 'fill-yellow-500');
    cy.get('.star').last().click();
    cy.get('.iconStar').first().should('have.class', 'fill-yellow-500');
  })

  // Aqui vamos adicionar um usuário adicionado no caso passado e verificar que  o "$element" vai ser igual a "Esse já é um usuário favorito", mostrando que ja foi adicionado anteriormente
  it('Erro de Repetido', () => {
    cy.fillPedroAndSubmit();
    cy.get('.erroCard').should(($element) => {
      expect($element.text()).to.eq('Esse já é um usuário favorito');
    });
  })

  // Aqui vamos encher de usuários até passar de 5 e verificar que vamos receber a mensagem de limite máximo atingido
  it('Erro Limite Máximo', () => {
    cy.fillaAndSubmit();
    cy.filljoaoAndSubmit();
    cy.fillpAndSubmit();
    cy.filldAndSubmit();

    cy.get('.erroCard').should(($element) => {
      expect($element.text()).to.eq('Limite máximo atingido!');
    });
  })

  // Aqui só iremos ordenar e a tela mostara ordenado
  it('Ordenar', () => {
    cy.get('#ordenarButton').click();
  })
})


