/// <reference types="Cypress" />
import HomePage from "../../support/pageObjects/HomePage"
import ProductPage from "../../support/pageObjects/ProductPage"

describe('Framework with Cypress', function () {
  const homePage = new HomePage
  const productPage = new ProductPage
  beforeEach(() => {
    cy.visit(Cypress.env('baseurl')+'/angularpractice/')
    cy.fixture('example').then(function (data) {  // It will not work if arrow function is used instead
      this.data = data
    })
    //OR
    // cy.fixture('example').as('data')
  })
  it.skip('First test case; input', function () {
    homePage.getEditBox().type(this.data.name)
    homePage.getGender().select(this.data.gender)
    homePage.getTwoWayDataBinding().should('have.value', this.data.name)
    homePage.getEditBox2().should('have.attr', 'minlength', 2)
    //OR
    homePage.getEditBox2().invoke('val').then((value) => {
      expect(value.length).to.be.greaterThan(2)
    })
    homePage.getEntreprenuer().should('have.attr', 'disabled')
    //OR
    homePage.getEntreprenuer().should('be.disabled')
  })

  it("Build customized cypress commands", function () {
    homePage.getShopTab().click()
    this.data.productName.forEach((product) => {
      cy.addToCart(product)
    })
    productPage.getCheckoutButton().should('contain.text', this.data.productName.length)
    productPage.getCheckoutButton().click()

    let total = 0
    cy.get('table tr td:nth-child(4) strong').each((price) => {
      total += +(price.text().split(' ')[1])
    }).then(() => {
      cy.log(total)
    })
    cy.get('h3 > strong').then((expectedTotalText) => {
      let expectedTotal = +(expectedTotalText.text().split(' ')[1])
      expect(total).to.eq(expectedTotal)
    })

    cy.contains('Checkout').click()
    cy.get('#country').type('united')
    cy.get('.suggestions a').eq(1).click()
    cy.get('#checkbox2').check({ force: true })
    cy.get('input[type=submit]').click()

    cy.get('.alert').should('contain', 'Success')

    // OR

    // cy.get('.alert').then((alert) => {
    //   let actualText = alert.text()
    //   expect(actualText.includes('Success')).to.be.true
    // })
  })
})