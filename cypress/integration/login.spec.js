/// <reference types='cypress'/>
import { loginPage } from "../pageObject/login"

describe('login test', ()=>{

    before('login', ()=>{
        cy.visit('/')
        
        cy.url().should('contain', '/login')
    })

    xit('backendLogin',()=>{
        cy.loginViaBackend();
        
    })

    xit('login with social', ()=>{
        loginPage.googleBtn
    })

    it('valid credentials', ()=>{

        cy.intercept({
            method: 'POST',
            url: 'https://cypress-api.vivifyscrum-stage.com/api/v2/login',

        }).as('loginIntercept');

        loginPage.login('markopzs1@test.com', 'password123');

        cy.wait('@loginIntercept').then((intercept) => {
            expect(intercept.response.statusCode).eq(200)
            expect(intercept.response.body).to.have.property('token');

            window.localStorage.setItem('token', intercept.response.body.token);
        })
        cy.url().should('contain', '/my-organizations')
    })
})