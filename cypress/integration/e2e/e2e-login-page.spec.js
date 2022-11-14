//<reference types="cypress" />
import  LoginPage  from '../../page/LoginPage.page'

describe('Login with invalid credencials - error message', () => {

    beforeEach(function(){
        cy.visit('/')
        cy.clearCookies()
        cy.fixture("tests-data").then(data => {
            this.credentials = data
        })
      })

    it('As user try to log in with invalid e-mail and valid password', function(){
        LoginPage.visibleAssertion()
        LoginPage.login(this.credentials.saleor.invalidEmail, this.credentials.saleor.password)
        LoginPage.errorAssertion()
    })

    it('As user try to log in with invalid e-mail and valid invalid password', function() {
        LoginPage.visibleAssertion()
        LoginPage.login(this.credentials.saleor.invalidEmail, this.credentials.saleor.invalidPassword)
        LoginPage.errorAssertion()
    })

    
    it('As user try to log in with valid e-mail and invalid password', function() {
        LoginPage.visibleAssertion()
        LoginPage.login(this.credentials.saleor.email, this.credentials.saleor.invalidPassword)
        LoginPage.errorAssertion()
    })
});

describe('Login with valid credencials - success login', () => {

    beforeEach(function(){
        cy.visit('/')
        cy.clearCookies()
        cy.fixture("tests-data").then(data => {
            this.credentials = data
        })
      })

    it('As user try to log in with valid e-mail and valid password', function() {
        LoginPage.visibleAssertion()
        LoginPage.login(this.credentials.saleor.email, this.credentials.saleor.password)
    })

    it('As user try to log in with valid e-mail and valid password - Keayboard press', function() {
        LoginPage.visibleAssertion()
        LoginPage.loginEnterPress(this.credentials.saleor.email, this.credentials.saleor.password)
    })
});