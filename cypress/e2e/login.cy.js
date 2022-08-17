/// <reference types="cypress"/>

context('fucionaloidade login', ()=>{

  beforeEach(() => {
    cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
  });
  
  afterEach(() => {
     cy.screenshot()
  });

  it('Deve fazer login com sucesso', ()=>{
      cy.get('#username').type('aluno_ebac@teste.com')
      cy.get('#password').type('teste@teste.com')
      cy.get('.woocommerce-form > .button').click()

      cy.get('.page-title').should('contain' , 'Minha conta')
  })

  it ('Deve exibir uma mensagem de erro ao inserir usuario ou senha invalidos', ()=>{
      cy.get('#username').type('aluno_ebac@teste.')
      cy.get('#password').type('teste@teste.com')
      cy.get('.woocommerce-form > .button').click()

      cy.get('.woocommerce-error').should('contain', 'Erro: O usuário')
  }) 

  it ('Deve exibir uma mensagem de erro ao inserir usuario ou senha invalidos', ()=>{
    
    cy.get('#username').type('aluno_ebac@teste.com')
    cy.get('#password').type('teste@teste.')
    cy.get('.woocommerce-form > .button').click()

    cy.get('.woocommerce-error').should('contain', 'Erro: A senha fornecida')
  })

} )