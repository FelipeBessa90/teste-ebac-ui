/// <reference types="cypress"/>
var faker = require('faker-br');


describe('Funcionalidade pre cadastro', () => {

    beforeEach(() => {
        cy.visit('minha-conta')
    });

    it('Deve completar o pre cadastro com sucesso', () => {
       let nomefaker = faker.name.firstName()
       let sobrenomeFaker = faker.name.lastName()
       let emailfaker = faker.internet.email(nomefaker)
       
        cy.get('#reg_email').type(emailfaker)
        cy.get('#reg_password').type('!teste@teste$')
        cy.get(':nth-child(4) > .button').click()

        cy.get('.woocommerce-MyAccount-navigation-link--edit-account > a').click()
        cy.get('#account_first_name') .type(nomefaker)
        cy.get('#account_last_name') .type(sobrenomeFaker)
        cy.get('.woocommerce-Button').click()

        cy.get('.woocommerce-message') .should('contain', 'Detalhes da conta modificados com sucesso.' )
    })

});
//Email > felipe_teste@ebac.com
//Senha > felipe.teste