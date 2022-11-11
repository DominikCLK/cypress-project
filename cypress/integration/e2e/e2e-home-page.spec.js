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
        cy.get(`div[role='button']`).should('have.text', 'Channel-USD')
        
        cy.log(`***USD visible***`)

        HomePage.homePageElementsAssertion({failOnStatusCode: false})
        EveryPageElements.sideMenuAssertion({failOnStatusCode: false})
        
        HomePage.setPln({failOnStatusCode: false})
        cy.get(`div[role='button']`).should('have.text', 'Channel-PLN')

        cy.log(`***PLN visible***`)

        HomePage.homePageElementsAssertion({failOnStatusCode: false})
        EveryPageElements.sideMenuAssertion({failOnStatusCode: false})
        
    });

    
    it('Set Dark mode', () => {
        HomePage.homePageElementsAssertion({failOnStatusCode: false})
        EveryPageElements.sideMenuAssertion({failOnStatusCode: false})

        EveryPageElements.userMenu.click()

        EveryPageElements.darkModeCheckbox.should('not.be.checked')
        EveryPageElements.darkModeText.should('have.text', "Enable Dark Mode")
        cy.xpath(`(//li[contains(@class,'MuiButtonBase-root MuiListItem-root')])[3]`).should('have.attr', 'data-test-is-dark', 'false')


        cy.log(`***got to dark***`)

        
        EveryPageElements.darkModeCheckbox.click()
        EveryPageElements.darkModeCheckbox.should('be.checked')
        EveryPageElements.darkModeText.should('have.text', "Enable Dark Mode")
        cy.xpath(`(//li[contains(@class,'MuiButtonBase-root MuiListItem-root')])[3]`).should('have.attr', 'data-test-is-dark', 'true')


        cy.log(`***back to light***`)


        EveryPageElements.darkModeCheckbox.click()
        EveryPageElements.darkModeCheckbox.should('not.be.checked')
        EveryPageElements.darkModeText.should('have.text', "Enable Dark Mode")
        cy.xpath(`(//li[contains(@class,'MuiButtonBase-root MuiListItem-root')])[3]`).should('have.attr', 'data-test-is-dark', 'false')



        HomePage.homePageElementsAssertion({failOnStatusCode: false})
        EveryPageElements.sideMenuAssertion({failOnStatusCode: false})

    });
});