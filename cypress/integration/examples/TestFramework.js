/// <reference types="Cypress" />

describe('Framework with Cypress', function () {
  beforeEach(() => {
    cy.visit("https://www.rahulshettyacademy.com/angularpractice/")
    cy.fixture('example').then(function (data) {  // It will not work if arrow function is used instead
      this.data = data
    })
    //OR
    // cy.fixture('example').as('data')
  })
  it('First test case; input', function () {
    cy.get('.form-group:nth-child(1)').type(this.data.name)
    cy.get('#exampleFormControlSelect1').select(this.data.gender)
    cy.get('[name=name]:nth-child(1)').should('have.value', this.data.name)
    cy.get('.form-group:nth-child(1) input').should('have.attr', 'minlength', 2)
    cy.get('.form-group:nth-child(1) input').invoke('val').then((value) => {
      expect(value.length).to.be.greaterThan(2)
    })
    cy.get('#inlineRadio3').should('have.attr', 'disabled')
    //OR
    cy.get('#inlineRadio3').should('be.disabled')
  })

  it("Build customized cypress commands", function () {
    cy.get('li.nav-item:nth-child(2)').click()
    cy.pause()
    this.data.productName.forEach((product) => {
      cy.addToCart(product)
    })
  })
})