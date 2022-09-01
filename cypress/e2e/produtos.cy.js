/// <reference types="cypress"/>

context('Funcionalidade pagina de produtos', () => {

    beforeEach(() => {
        cy.visit('http://lojaebac.ebaconline.art.br/produtos/')
    });

    it('Deve selecionar um produto da lista', () => {
        var quantidade = 5
            cy.get('[class="product-block grid"]')
            //.first()
            .eq(2)
            .click()
            cy.get('.button-variable-item-33')
                .click()
            cy.get('.button-variable-item-Green')   
                .click()
            cy.get('.input-text')
                .clear()
                .type(quantidade)
            cy.get('.single_add_to_cart_button')
                .click()
            cy.get('.woocommerce-message > .button')
                .click()
            cy.get('.checkout-button')
                .click()
                cy.get('.dropdown-toggle > .mini-cart-items').should('contain', quantidade)
                .click()
    })


})