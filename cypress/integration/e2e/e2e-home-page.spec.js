import  LoginPage  from '../../page/LoginPage.page'
import HomePage from '../../page/HomePage.page'

describe('Home page actions - e2e', () => {

    beforeEach(() => {
        cy.visit('/')
        cy.clearCookies()
        LoginPage.loginButton.click()
    });


    it('Change currency - PLN to USD and PLN to USD', () => {
        //Assetrion


        HomePage.setUsd({failOnStatusCode: false})


        //Assetrion

        

        HomePage.setPln({failOnStatusCode: false})
        
    });
});