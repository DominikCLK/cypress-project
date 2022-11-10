import EveryPageElements from "./EveryPageElements"

export default class HomePage extends EveryPageElements {
    //buttons
    static get currencyList() { return cy.xpath(`//div[@data-test-id='app-channel-select']//div[1]`) }

    //title
    static get welcomeHeader() { return cy.get(`div[data-test-id='welcome-header']`) }
    static get infoHeader() { return cy.xpath(`//div[text()='Tutaj znajdują się informacje, które zebraliśmy o Twoim sklepie']`) }

    //Main elements
    static get salesBox() { return cy.get(`div[data-test-id='sales-analytics']`) }
    static get ordersBox() { return cy.get(`div[data-test-id='orders-analytics']`) }
    static get toProductsBox() { return cy.xpath(`(//div[@data-test-id='top-products']//div)[1]`) }
    static get activityCardBox() { return cy.xpath(`(//div[@data-test-id='activity-card']//div)[1]`) }
    static get salesBox() { return cy.get(`div[data-test-id='sales-analytics']`) }
    static get salesCurrency() { return cy.xpath(`(//div[text()='Sales']/following-sibling::div)[2]`) }


    //Currency list
    static get usdOption() { return cy.xpath(`//li[text()='Channel-USD']`) }
    static get plnOption() { return cy.xpath(`//li[text()='Channel-PLN']`) }

    static homePageElementsAssertion() {
        EveryPageElements.navigator.should('be.visible')
        EveryPageElements.userMenu.should('be.visible')
            this.currencyList.should('be.visible')
            this.welcomeHeader.should('be.visible')
            this.infoHeader.should('be.visible')
            this.salesBox.should('be.visible')
            this.ordersBox.should('be.visible')
            this.toProductsBox.should('be.visible')
            this.activityCardBox.should('be.visible')
            this.salesBox.should('be.visible')
            this.salesCurrency.should('be.visible')
        }
        
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

