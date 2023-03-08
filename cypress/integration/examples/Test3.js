/// <reference types="cypress" />

describe('Tests on checkboxes', () => {
  beforeEach(() => {
    cy.visit(Cypress.env('baseurl')+'/AutomationPractice/')
  })
  it('Tests checkboxes', () => {
    cy.get('#checkBoxOption1').check().should('be.checked')
      .and('have.value', 'option1')
    cy.get('#checkBoxOption1').uncheck().should('not.be.checked')
    cy.get('input[type=checkbox]').check(['option2', 'option3'])
  })
  it('Test a static dropdown', () => {
    cy.get('select').select([2]).should('have.value', 'option2')
    // or
    // cy.get('select').select(['option2']).should('have.value', 'option2')
  })
  it('Tests dynamic dropdown', () => {
    cy.get('#autocomplete').type('nig').should('have.value', 'nig')
    cy.get('.ui-menu-item div').each((option) => {
      if(option.text() === 'Nigeria') {
        cy.wrap(option).click()
      }
    })
    cy.get('#autocomplete').should('have.value', 'Nigeria')
  })
  it('Tests invisible element that becomes visible', () => {
    cy.get('#displayed-text').should('be.visible')
    cy.get('#hide-textbox').click()
    cy.get('#displayed-text').should('not.be.visible')
    cy.get('#show-textbox').click()
    cy.get('#displayed-text').should('be.visible')
  })
  it('Tests radio checkboxes', () =>{
    cy.get('[value="radio2').check().should('be.checked')   
  })
   
})