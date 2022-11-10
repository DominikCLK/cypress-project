import  LoginPage  from '../../page/LoginPage.page'
import HomePage from '../../page/HomePage.page'
import EveryPageElements from '../../page/EveryPageElements'

describe('Home page actions - e2e', () => {

    beforeEach(() => {
        cy.visit('/')
        cy.clearCookies()
        LoginPage.loginButton.click()
    });


    it('Change currency - PLN to USD and PLN to USD', () => {
        HomePage.homePageElementsAssertion({failOnStatusCode: false})
        EveryPageElements.sideMenuAssertion({failOnStatusCode: false})

        HomePage.setUsd({failOnStatusCode: false})

        HomePage.homePageElementsAssertion({failOnStatusCode: false})
        EveryPageElements.sideMenuAssertion({failOnStatusCode: false})
        
        HomePage.setPln({failOnStatusCode: false})

        HomePage.homePageElementsAssertion({failOnStatusCode: false})
        EveryPageElements.sideMenuAssertion({failOnStatusCode: false})
        
    });

    
    it.only('Set Dark mode', () => {
        HomePage.homePageElementsAssertion({failOnStatusCode: false})
        EveryPageElements.sideMenuAssertion({failOnStatusCode: false})

        EveryPageElements.userMenu.click()
        EveryPageElements.darkModeCheckbox.click()
        EveryPageElements.darkModeText.should('have.text', "Enable Dark Mode")

        HomePage.homePageElementsAssertion({failOnStatusCode: false})
        EveryPageElements.sideMenuAssertion({failOnStatusCode: false})
        
    });
});