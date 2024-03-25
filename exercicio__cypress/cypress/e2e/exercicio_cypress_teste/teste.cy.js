/// <reference types="cypress" />

describe('Testar funcionalidades da lista de contatos', () => {
    beforeEach(() => {
        cy.visit('https://agenda-contatos-react.vercel.app/;')
    })

    it('Testar adição de um contato', ()=> {
        cy.get('[type="text"]').type('Vitor')
        cy.get('[type="email"]').type('vitorian@teste.com')
        cy.get('[type="tel"]').type('8399199921')
        cy.get('.adicionar').click()

        cy.get('.contato').should('have.length', 3)
    })

    it('Testar remoção de um contato', ()=> {
        cy.get('.delete').first().click()

        cy.get('.contato').should('have.length', 2)
    })

    it('Testar edição de um contato', ()=>{
        cy.get('.edit').first().click()
        cy.get('[type="text"]').clear()
        cy.get('[type="email"]').clear()
        cy.get('[type="tel"]').clear()
        cy.get('[type="text"]').type('Eduarda')
        cy.get('[type="email"]').type('duda@teste.com')
        cy.get('[type="tel"]').type('8399199921')
        cy.get('.alterar').click()

        cy.get('.contato').should('contain.text', 'Eduarda')
    })
})