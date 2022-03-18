class LogOut {

    get userName() {
        return cy.get('a[href="/account"]')
    }

    get profile() {
        return cy.get("a[href='/account/settings']")
    }

    get logoutBtn() {
        return cy.get(".vs-c-logout")
    }

    logoutButton() {
        this.userName.click()
        this.profile.click()
        this.logoutBtn.click()
    }
}

export const logOut = new LogOut()