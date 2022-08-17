/// <reference types="cypress"/>

describe('Funcionalidade pre cadastro', () => {
    beforeEach(() => {
        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
    });

    it('Deve completar o pre cadastro com sucesso', () => {

        cy.get('#reg_email').type('teste.felipe@teste.com')
        cy.get('#reg_password').type('!teste@teste$')
        cy.get(':nth-child(4) > .button').click()

        cy.get('.woocommerce-MyAccount-navigation-link--edit-account > a').click()
        cy.get('#account_first_name') .type('felipe')
        cy.get('#account_last_name') .type('teste')
        cy.get('.woocommerce-Button').click()

        cy.get('.woocommerce-Button') .should('contain', 'Detalhes da conta modificados com sucesso.' )
    })

});
//Email > felipe_teste@ebac.com
//Senha > felipe.teste