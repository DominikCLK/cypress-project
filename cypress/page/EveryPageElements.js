export default class EveryPageElements {
    //Buttons
    static get navigator() { return cy.get(`button[data-test-id='navigator']`) }
    static get userMenu() { return cy.get(`button[data-test='userMenu']`) }
    static get darkModeCheckbox() { return cy.get(`input[type='checkbox']`) }
    static get darkModeText() { return cy.xpath(`//span[text()='Enable Dark Mode']`) }

    //Side menu elements
    static get homaPageTab() { return cy.get(`span[data-test-id='home']`) }
    static get catalogTab() { return cy.get(`span[data-test-id='catalogue']`) }
    static get ordersTab() { return cy.get(`span[data-test-id='orders']`) }
    static get customersTab() { return cy.get(`span[data-test-id='customers']`) }
    static get discountsTab() { return cy.get(`span[data-test-id='discounts']`) }
    static get pagesTab() { return cy.get(`span[data-test-id='pages']`) }
    static get appTab() { return cy.get(`span[data-test-id='apps_section']`) }
    static get translationsTab() { return cy.get(`span[data-test-id='translations']`) }
    static get settingsTab() { return cy.get(`span[data-test-id='configure']`) }
    static get foldButton() { return cy.xpath(`(//button[@type='button'])[1]`) }

    static sideMenuAssertion() {
             this.homaPageTab.should('be.visible') 
             this.catalogTab.should('be.visible')
             this.ordersTab.should('be.visible')
             this.customersTab.should('be.visible')
             this.discountsTab.should('be.visible')
             this.pagesTab.should('be.visible')
             this.appTab.should('be.visible')
             this.translationsTab.should('be.visible')
             this.settingsTab.should('be.visible')
             this.foldButton.should('be.visible')
    }
}
