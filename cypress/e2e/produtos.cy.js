/// <reference types="cypress"/>

context('Funcionalidade pagina de produtos', () => {

    beforeEach(() => {
        cy.visit('produtos')
    });

    it('Deve selecionar um produto da lista', () => {
        var quantidade = 10
        cy.get('[class="product-block grid"]')
            //.first().eq(3)
            .contains('Abominable Hoodie').click()
        cy.get('.button-variable-item-M').click()
        cy.get('.button-variable-item-Green').click()
        cy.get('.input-text').clear()
            .type(quantidade)
        cy.get('.single_add_to_cart_button').click()
        cy.get('.woocommerce-message > .button').click()
        cy.get('.checkout-button').click()
        cy.get('.dropdown-toggle > .mini-cart-items').should('contain', quantidade).click()
    })
    it('Deve adicionar produtos ao carrinho - usando comando customizado', () => {
        cy.addProdutos('Ariel Roll Sleeve Sweatshirt', 'M', 'Purple', 3)
    });

    it('Deve adicionar produtos ao carrinho - usando comando customizado', () => {
        cy.addProdutos('Abominable Hoodie', 'XL', 'Red', 3)
    });
})