/// <reference types="cypress" />
import Tools from '../../support/tools'

describe("Send request directly to API", () => {
    beforeEach(function() {
        cy.fixture("tests-data").then(data => {    
            this.daneApi = data;
        })
    })

    it("Authorization - creating new article", () => {
        const authorizationData = {
            "user": {
                "email": "dominik.softwaretest@gmail.com",
                "password": "Password1!"
            }
        }

        const articleData = {
            "article": {
                "tagList": [],
                "title": "title test directly from API " + Tools.getRandomName(20) + Tools.getRandomInt(10),
                "description": "test",
                "body": "test"
            }
        }

        cy.request("POST", "https://api.realworld.io/api/users/login", authorizationData)
        .its("body").then(res => {
            const authToken = res.user.token;
            
            cy.request({
                method: "POST",
                url: "https://api.realworld.io/api/articles/",
                body: articleData,
                headers: {
                    'Authorization': 'Token ' + authToken
                } 
            }).then(res => {
                expect(res.status).to.equal(200)
            })
        })
    })
});