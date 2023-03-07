
class ProductPage {
  getProductTitle () {
    return cy.get('.card-title')
  }
  getAddButton () {
    return cy.get('.btn.btn-info')
  }
  getCheckoutButton () {
    return cy.get('.nav-link.btn')
  }

}
export default ProductPage