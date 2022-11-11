export default class LoginPage {

    //Header buttons
    static get demoStorefrontButton() { return cy.xpath(`//input[@data-test-id='email']`) }
    static get graphqlButton() { return cy.xpath(`//input[@data-test-id='password']`)}

    //Text
    static get signInTitle() { return cy.xpath(`//div[text()='Sign In']`)}
    static get resetPasswordLink() { return cy.xpath(`//a[@data-test-id='reset-password-link']`) }

    //Buttons
    static get loginButton() { return cy.get('.MuiButton-label') }
    static get showPasswordIcon() { return cy.xpath(`//button[@type='button']`) }

    //Inputs
    static get emailInput() { return cy.get(`input[data-test-id='email']`) }
    static get passwordInput() { return cy.get(`input[data-test-id='password']`) }

    //Error message
    static get errorFrame() { return cy.get(`div[data-test-id='login-error-message']`) }

    //Visible assertion
    static visibleAssertion() {
        this.demoStorefrontButton.should('be.visible')
        this.graphqlButton.should('be.visible')
        this.signInTitle.should('be.visible')
        this.resetPasswordLink.should('be.visible')
        this.loginButton.should('be.visible')
        this.emailInput.should('be.visible')
        this.passwordInput.should('be.visible')
    }

    static login(username, password) {
        this.emailInput.clear()
        this.passwordInput.clear()

        this.emailInput.type(username)
        this.passwordInput.type(password)
        this.loginButton.click()
    }

    static loginEnterPress(username, password) {
        this.emailInput.clear()
        this.passwordInput.clear()

        this.emailInput.type(username)
        this.passwordInput.type(password)
        this.passwordInput.type('{enter}')
    }

    static errorAssertion() {
        this.errorFrame.should('be.visible').and('contain', "Sorry, your username and/or password are incorrect. Please try again.")
    }
}