import Tools from '../../support/tools'

describe('E2E - API Tests', () => {

    beforeEach(function() {
        cy.fixture("tests-data").then(data => {
            this.dataApi = data
        })

    })


    it('Verification Tags - API', function() {
        cy.intercept("GET", "https://api.realworld.io/api/tags").as("requestTags")
        cy.visit("https://angular.realworld.io/")

        cy.wait("@requestTags").then(res => {
            console.log(res)
            expect(res.response.statusCode).to.eq(200)
            expect(res.response.body.tags).to.contain("implementations").and.to.contain("welcome").and.to.contain("introduction").and.to.contain("cupiditate")
            
            expect(res.response.statusMessage).to.equal(this.dataApi.api.statusMessage200)
        })
    });


    it('Verification Invalid Login - API', function() {
        cy.intercept("POST", "https://api.realworld.io/api/users/login").as("requestInvalidLogin")
        cy.get("a[routerlink='/login']").click()
        
        cy.loginAPI(Tools.getRandomEmail(), Tools.getRandomName() + '123!')

        cy.wait("@requestInvalidLogin").then(res => {
            console.log(res)
            expect(res.response.statusCode).to.eq(403)
            expect(res.response.statusMessage).to.equal(this.dataApi.api.statusMessage403)
        })
    });
});