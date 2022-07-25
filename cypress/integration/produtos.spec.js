/// <reference types="cypress"/>

describe('Funcionalidade Página de Produtos', () => {
    beforeEach(() => {
        cy.visit('http://lojaebac.ebaconline.art.br/produtos/')
    });

    it('Deve selecionar um produto da lista', () => {
        cy.get('[class="product-block grid"]')
        //.first()
        //.eq(3)
        //last() 
        .contains('Ajax Full-Zip Sweatshirt')
        .click()
    });
    
    it.only('Deve adicionar produto ao carrinho', () => {
        var quantidade = 2 
        cy.wait(500)
        cy.get('[class="product-block grid"]')
        .contains('Ajax Full-Zip Sweatshirt').click()
        cy.wait(2000) // para corrigir erro de não selecionar o tamanho porque não tinha terminado de carregar
        cy.get('.button-variable-item-M').click()
        cy.get('.button-variable-item-Red').click()
        cy.get('.input-text').clear().type(quantidade)
        cy.get('.single_add_to_cart_button').click()
        
        cy.get('.dropdown-toggle > .mini-cart-items').should('contain', quantidade)
        cy.wait(5000)
        cy.get('.woocommerce-message > .button').click()
        

        
        
    });
});







