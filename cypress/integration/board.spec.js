/// <reference types='cypress'/>
import { newBoard } from "../pageObject/board";
import { loginPage } from "../pageObject/login"


describe('board', ()=>{

    let boardId;

    before('login', ()=>{
        cy.visit('/login')
        loginPage.login('markopzs1@test.com', 'password123');
    })

    it('check organization', ()=>{
        cy.url().should('contain', '/my-organizations');
        cy.get('h2').should('be.visible');       
    })

    it('add new board', ()=>{

        cy.intercept({
            method: 'POST',
            url: 'https://cypress-api.vivifyscrum-stage.com/api/v2/boards',

        }).as('newBoardIntercept');
        
        newBoard.createBoard('novi Board');

        cy.wait('@newBoardIntercept').then((intercept) => {
            expect(intercept.response.statusCode).eq(201)
            expect(intercept.response.body).to.have.property('id');

            boardId = intercept.response.body.id;
        })
        
    })

    it('delete board', ()=>{
       
        newBoard.deleteBoard();


    })
})