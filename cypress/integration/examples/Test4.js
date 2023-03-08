/// <reference types="cypress" />

describe('Tests alert popup windows', () => {
  beforeEach(() => {
    cy.visit(Cypress.env('baseurl')+'/AutomationPractice/')
  })
  it('Tests an alert window', () => {
    cy.get('#alertbtn').click()
    cy.get('[value=Confirm]').click()
    cy.on('window:alert', (alertContent) => {
      expect(alertContent).to.equal('Hello , share this practice page and share your knowledge')
    })
    cy.on('window:confirm', (confirmContent) => {
      expect(confirmContent).to.equal('Hello , Are you sure you want to confirm?')
    })
  })
  it('Tests redirects to a blank page', () => {
    cy.get('#opentab').invoke('removeAttr', 'target').click({force: true})
    cy.url().should('eq', 'https://www.rahulshettyacademy.com/')
    cy.go(-1) // or cy.go('back')
    cy.url().should('eq', 'https://rahulshettyacademy.com/AutomationPractice/')
  })
  it('Tests tables', () => {
    cy.get('tr td:nth-child(2)').each(($el, index) => {
      let text = $el.text()
      if (text.includes("Python")) {
        cy.get('tr td:nth-child(2)').eq(index).next().then((result) => {
          expect(result.text()).to.eq('25')
        })
        // expect($el.next().text()).to.eq('25')
      }
    })
  })

  it('Test tables 2', () => {
    cy.get('[name=courses] tr').each((product) => {
      let text = product.text()
      if (text.includes("Python")) {
        expect(product.find('td').eq(2).text()).to.eq('25')
      }
    })
  })

  it('Tests a Mouse over event', () => {
    cy.get('.mouse-hover-content').invoke('show')
    cy.contains('Top').click()
    cy.url().should('include', 'top')
  })
}) 