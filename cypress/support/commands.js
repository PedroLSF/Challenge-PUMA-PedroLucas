Cypress.Commands.add('fillPedroAndSubmit', function(){
    cy.get('#busca').type("PedroLSF");
    cy.get('#Adder').click();
    cy.get('#busca').clear();
})

Cypress.Commands.add('fillznehACAndSubmit', function(){
    cy.get('#busca').type("znehAC");
    cy.get('#Adder').click();
    cy.get('#busca').clear();
})

Cypress.Commands.add('fillaAndSubmit', function(){
    cy.get('#busca').type("a");
    cy.get('#Adder').click();
    cy.get('#busca').clear();
})

Cypress.Commands.add('filljoaoAndSubmit', function(){
    cy.get('#busca').type("joao");
    cy.get('#Adder').click();
    cy.get('#busca').clear();
})

Cypress.Commands.add('fillpAndSubmit', function(){
    cy.get('#busca').type("p");
    cy.get('#Adder').click();
    cy.get('#busca').clear();
})

Cypress.Commands.add('filldAndSubmit', function(){
    cy.get('#busca').type("d");
    cy.get('#Adder').click();
    cy.get('#busca').clear();
})