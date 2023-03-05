/// <reference types="Cypress" />
/// <reference types="cypress-iframe" />
import 'cypress-iframe'

describe('Tests', () => {
  beforeEach(() => {
    cy.visit('https://www.rahulshettyacademy.com/AutomationPractice/')
  })
  it.skip('Grabs href attr then opens url on the same tab', () => {
    cy.get('#opentab').then((el) => {
      const url = el.prop('href')
      cy.visit(url)
    })
  })
  it('Tests frames', () => {
    cy.frameLoaded('#courses-iframe')
    cy.iframe().find('.navigation li').eq(4).click()
    cy.iframe().find(".row .pricing-container").should('have.length', 2)    
  })
})