/// <reference types="Cypress" />

Cypress.Commands.add('addToCart', (productName) => {
  cy.get('.card-title').each((el, ind) => {
    let elText = el.text()
    if (elText.includes(productName)) {
      cy.get('.btn.btn-info').eq(ind).click() //better idea
    }
  })
})