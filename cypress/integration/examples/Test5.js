/// <reference types="Cypress" />
/// <reference types="cypress-iframe" />
import 'cypress-iframe'

describe('Tests', () => {
  beforeEach(() => {
    cy.visit(Cypress.env('baseurl')+'/AutomationPractice/')
  })
  it('Grabs href attr then opens url on the same tab', () => {
    cy.visit(Cypress.env('baseurl')+'/AutomationPractice/')
    cy.get('#opentab').then((el) => {
      const url = el.prop('href')
      cy.visit(url)
    })
  })
  it('Tests frames', () => {
    cy.frameLoaded('#courses-iframe')
    cy.iframe().find('.navigation li').eq(4).click()
    cy.iframe().find("h1[class*='pricing-title']").should('have.length', 2)
    
    // cy.enter('#courses-iframe').then(getBody => {
    //   getBody().find('.navigation li').eq(4).click()
    //   getBody().find("h1[class*='pricing-title']").should('have.length', 2)
    // })
  })
  it('Just checking', () => {
    cy.visit('https://www.rahulshettyacademy.com/mentorship')
    cy.get('.row .pricing-container').should('have.length', 2)
  })
})