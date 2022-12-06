/// <reference types="cypress"/>
import EnderecoPage from '../support/pege-objects/endereco.page'
const dadosEndereco = require('../fixtures/endereco.json')

describe('funcionalidade endereços - Faturamento e Entrega', ()=> {
    beforeEach(() => {
        cy.visit('minha-conta')
        cy.fixture('perfil').then(dados =>{
            cy.login(dados.usuario, dados.senha)
        })
        
    });

    it('Deve fazer cadastro de faturamento com sucesso', ()=>{
        EnderecoPage.editarEnderecoFaturamento('pedro', 'silva', 'Jogando De leve Ltda','Argentina','rua das ruas', '1000', 'sorocaba', 'Chaco','05594-003', '11 99898-9898','perdosil@live.com',)
        cy.get('.woocommerce-message').should('contain' , 'Endereço alterado com sucesso')
        //cadastro de endereço
    });
    it('Deve fazer cadastro de faturamento com sucesso - Usando arquivo de dados', ()=>{
        EnderecoPage.editarEnderecoFaturamento( 
            dadosEndereco[0].nome,
            dadosEndereco[0].sobrenome,
            dadosEndereco[0].empresa,
            dadosEndereco[0].pais,
            dadosEndereco[0].endereco,
            dadosEndereco[0].numero,
            dadosEndereco[0].cidade,
            dadosEndereco[0].estado,
            dadosEndereco[0].cep,
            dadosEndereco[0].celular,
            dadosEndereco[0].email
            )
        cy.get('.woocommerce-message').should('contain' , 'Endereço alterado com sucesso')

        //cadastro de endereço
    });
})