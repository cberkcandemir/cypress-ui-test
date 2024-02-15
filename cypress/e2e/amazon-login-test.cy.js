/// <reference types="Cypress" />


describe('custom commands login deneme', () => {

  beforeEach(() => {
    cy.viewport('macbook-15')
  })
    it('TC01 True Login Test',() => {
      cy.fixture("login").as("user")
      cy.visit('https://www.amazon.com.tr/ap/signin?openid.pape.max_auth_age=0&openid.return_to=https%3A%2F%2Fwww.amazon.com.tr%2F%3Fref_%3Dnav_ya_signin&openid.identity=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.assoc_handle=trflex&openid.mode=checkid_setup&openid.claimed_id=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.ns=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0', {
        failOnStatusCode: false,
        })
        cy.get("@user").then((user)=>{
          cy.login(user.email, user.password)
        })
      cy.get('#nav-link-accountList-nav-line-1').contains('Berkcan')
      })
    })

    it('TC02 False Login Test',() => {
      cy.fixture("login").as("user"),
      cy.visit('https://www.amazon.com.tr/ap/signin?openid.pape.max_auth_age=0&openid.return_to=https%3A%2F%2Fwww.amazon.com.tr%2F%3Fref_%3Dnav_ya_signin&openid.identity=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.assoc_handle=trflex&openid.mode=checkid_setup&openid.claimed_id=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.ns=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0', {
      failOnStatusCode: false,
        })
        cy.get("@user").then((user)=>{
          cy.login(user.email, user.falsepassword)
        })
      cy.get('span.a-list-item').contains('Şifreniz yanlış')
      })