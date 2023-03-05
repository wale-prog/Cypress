class HomePage {

  getEditBox() {
    return cy.get('.form-group:nth-child(1)')
  }
  getEditBox2() {
    return cy.get('.form-group:nth-child(1) input')
  }
  getTwoWayDataBinding() {
    return cy.get('[name=name]:nth-child(1)')
  }

  getGender() {
    return cy.get('#exampleFormControlSelect1')
  }

  getEntreprenuer() {
    return cy.get('#inlineRadio3')
  }
  getShopTab() {
    return cy.get('li.nav-item:nth-child(2)')
  }
}

export default HomePage