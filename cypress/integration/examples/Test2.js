/// <reference types="cypress" />

describe('Test for a specific product on the page', () => {
  it('Product purchase validation test', () => {
    cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')
    cy.get('.search-keyword').type('ca').then(() => {
      cy.get('.products').as('productLocator')
      cy.get('@productLocator').find('.product').each((product) => {
        const productName = product.find('h4.product-name').text()
        if (productName.includes('Cashew')) {
          cy.wrap(product).contains('ADD TO CART').trigger("click") //or click()
        }
      })
    })
    cy.get('.cart-icon > img').click()
    cy.get('.cart-item:visible').should('have.length', 1)
    cy.contains('PROCEED TO CHECKOUT').trigger("click")
    cy.get('.product-name').should('contain', 'Cashew')
    cy.get(':nth-child(14)').click()
  })
})