/// <reference types="cypress" />
describe('page', () => {
  it('works', () => {
    cy.visit('http://localhost:3000')
    cy.on( 'window:alert', response => {
        expect( response ).to.contain( 'Something the alert does not contain' )
    } )
    cy.contains( 'Learn React' )
  })
})
