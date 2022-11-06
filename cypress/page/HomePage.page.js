export default class HomePage {
    //buttons
    static get navigator() { return cy.get(`button[data-test-id='navigator']`) }
    static get currencyList() { return cy.xpath(`//div[@data-test-id='app-channel-select']//div[1]`) }
    static get userMenu() { return cy.get(`button[data-test='userMenu']`) }

    //title
    static get welcomeHeader() { return cy.get(`div[data-test-id='welcome-header']`) }
    static get infoHeader() { return cy.xpath(`//div[text()='Tutaj znajdują się informacje, które zebraliśmy o Twoim sklepie']`) }

    //Main elements
    static get salesBox() { return cy.get(`div[data-test-id='sales-analytics']`) }
    static get ordersBox() { return cy.get(`div[data-test-id='orders-analytics']`) }
    static get toProductsBox() { return cy.xpath(`(//div[@data-test-id='top-products']//div)[1]`) }
    static get activityCardBox() { return cy.xpath(`(//div[@data-test-id='activity-card']//div)[1]`) }
    static get salesBox() { return cy.get(`div[data-test-id='sales-analytics']`) }
    static get salesCurrency() { return cy.get(':nth-child(1) > .MuiCardContent-root > :nth-child(1) > .jss146') }

    //Side menu elements
    static get homaPageTab() { return cy.get(`span[data-test-id='home']`) }
    static get catalogTab() { return cy.get(`span[data-test-id='catalogue']`) }
    static get ordersTab() { return cy.get(`span[data-test-id='orders']`) }
    static get customersTab() { return cy.get(`span[data-test-id='customers']]`) }
    static get discountsTab() { return cy.get(`span[data-test-id='discounts']`) }
    static get pagesTab() { return cy.get(`span[data-test-id='pages']`) }
    static get appTab() { return cy.get(`span[data-test-id='apps_section']`) }
    static get translationsTab() { return cy.get(`span[data-test-id='translations']`) }
    static get settingsTab() { return cy.get(`span[data-test-id='configure']`) }
    static get foldButton() { return cy.xpath(`(//button[@type='button'])[1]`) }

    //Currency list
    static get usdOption() { return cy.xpath(`//li[text()='Channel-USD']`) }
    static get plnOption() { return cy.xpath(`//li[text()='Channel-PLN']`) }

    static setUsd() {
        this.currencyList.should('be.visible')
        this.currencyList.click()
        this.usdOption.should('be.visible')
        this.usdOption.click()
        this.salesCurrency.should('contain', "USD")
    }

    static setPln() {
        this.currencyList.should('be.visible')
        this.currencyList.click()
        this.plnOption.should('be.visible')
        this.plnOption.click()
        this.salesCurrency.should('contain', "PLN")
    }











}

