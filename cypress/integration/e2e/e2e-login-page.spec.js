//<reference types="cypress" />
import  LoginPage  from '../../page/LoginPage.page'

describe('Login with invalid credencials - error message', () => {

    beforeEach(() => {
        cy.visit('/')
        cy.clearCookies()
        LoginPage.emailInput.clear()
        LoginPage.passwordInput.clear()
      })

    it('As user try to log in with invalid e-mail and valid password', () => {
        LoginPage.visibleAssertion()

        cy.fixture('credencials.json').then((user) => {
            LoginPage.login(user.invalidEmail, user.password)
        })
        LoginPage.errorAssertion()
    })

    it('As user try to log in with invalid e-mail and valid invalid password', () => {
        LoginPage.visibleAssertion()
        
        cy.fixture('credencials.json').then((user) => {
            LoginPage.login(user.invalidEmail, user.invalidPassword)
        })
        LoginPage.errorAssertion()
    })

    
    it('As user try to log in with valid e-mail and invalid password', () => {
        LoginPage.visibleAssertion()
        
        cy.fixture('credencials.json').then((user) => {
            LoginPage.login(user.email, user.invalidPassword)
        })
        LoginPage.errorAssertion()
    })
});

describe('Login with valid credencials - success login', () => {

    beforeEach(() => {
        cy.visit('/')
        cy.clearCookies()
        LoginPage.emailInput.clear()
        LoginPage.passwordInput.clear()
      })

    it('As user try to log in with invalid e-mail and valid password', () => {
        LoginPage.visibleAssertion()

        cy.fixture('credencials.json').then((user) => {
            LoginPage.login(user.email, user.password)
        })
    })
});