import {When, Then} from 'cypress-cucumber-preprocessor/steps';

const status = {
    energia: undefined,
    amizade: undefined,
    dinheiro: undefined,
    situacaoTitle:undefined,
}

beforeEach(()=>{
    localStorage.setItem("usuarioLogado", JSON.stringify({nome: "aaaaaaa", status: {energia: 30, amizade: 30, dinheiro: 30}}));
})

When('Aperto em uma das opções', ()=>{
    cy.get('.user-status').within(($status)=>{
        status.energia = cy.get('div').eq(0).find('>span');
        status.amizade = cy.get('div').eq(1).find('>span');
        status.dinheiro = cy.get('div').eq(2).find('>span');
    })
    status.situacaoTitle = cy.get('.game-content h3');

    cy.get('.game-opt').eq(0).click();
})

Then("Situação deve ser alterda", ()=> {
    cy.get('.game-content h3').should('not.be', status.situacaoTitle);
})

Then("meus status devem ser alterados", ()=>{
    cy.get('.user-status').within(($status)=>{
        cy.get('div').eq(0).find('>span').should('not.be', status.energia);
        cy.get('div').eq(1).find('>span').should('not.be', status.amizade);
        cy.get('div').eq(2).find('>span').should('not.be', status.dinheiro);
    })
})