/// <reference types="cypress" />

describe('First test case suit', () => {
  it('Initial test', () => {
    cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')
    cy.get('.search-keyword').type('ca').then(() => {
      cy.get('.product:visible').should('have.length', 4)
      // parent-child chaining
      cy.get('.products').as('productLocator')
      cy.get('.products > .product').should('have.length', 4)
      cy.get('@productLocator').find('.product').should('have.length', 4)
      cy.get('@productLocator').find('.product').eq(1).contains('ADD TO CART').click()
      cy.get('@productLocator').find('.product').each((product) => {
        const productName = product.find('h4.product-name').text()
        if (productName.includes('Capsicum')) {
          cy.wrap(product).contains('ADD TO CART').trigger("click") //or click()
        }
      })
    })
    cy.get('.brand').should('have.text', 'GREENKART')
    cy.get('.brand').then((logoElement) => {
      expect(logoElement.text()).to.eq('GREENKART')
    })
  })
})