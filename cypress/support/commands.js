/// <reference types="Cypress" />
import ProductPage from "../integration/pageObjects/ProductPage"

const productPage = new ProductPage;

Cypress.Commands.add('addToCart', (productName) => {
  productPage.getProductTitle().each((el, ind) => {
    let elText = el.text()
    if (elText.includes(productName)) {
      productPage.getAddButton().eq(ind).click()
    }    
  })
})