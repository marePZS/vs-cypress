class Board {

    get addNewBoard(){
        return cy.get('.vs-c-organization-boards__item--add-new');
    }

    get nextBtn(){
        return cy.get('[name="next_btn"]');
    }

    get finishBtn(){
        return this.nextBtn;
    }


    get previousBtn(){
        return cy.get('[name="previous_btn"]');
    }

    get modalConfirmBtn(){
        return cy.get('.vs-c-modal--features-confirm-button');
    }

    get scrumRadioBtn(){
        return cy.get('[value="scrum_board"]');
    }
    
    get inputName(){
        return cy.get('[name="name"]');
    }

    get organization(){
        return cy.get('.organization-list-item').eq(0);
    }

    get board(){
        return cy.get('.vs-c-boards-item__content')
    }

    get deleteBtn(){
        return cy.get('.vs-c-btn--warning');
    }

    get configBtn(){
        return cy.get('li[data-cy="board-configuration"]');
    }

    get yesBtn(){
        return cy.get('[name="save-btn"]');
    }

    createBoard(name){
        this.organization.click();
        this.modalConfirmBtn.click();
        this.addNewBoard.click();
        this.inputName.type(name);
        this.nextBtn.click();
        this.scrumRadioBtn.click({force: true});
        this.nextBtn.click();
        this.nextBtn.click();
        this.finishBtn.click();

    }

    deleteBoard(){   
        this.configBtn.click()
        this.deleteBtn.click();
        this.yesBtn.click();
        this.modalConfirmBtn.click();

    }

    

    
}

export const newBoard = new Board();