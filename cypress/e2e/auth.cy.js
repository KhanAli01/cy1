describe('Authentification', () => {
    it.skip('Sign in with valid credentials', () => {
        cy.visit('/user/login')

        cy.get('#normal_login_email')
            .type('orkhanmaharramov2019@gmail.com')
        cy.get('#normal_login_password')
            .type('MajeraDoluAmerica!@')
        cy.get('.login-form-button')
            .click()

        cy.get('.ant-avatar-square')
            .should('be.visible')
        cy.location('pathname')
            .should('include', 'profile')
    });


    it('Sign in with invalid credentials', () => {
        cy.visit('/user/login')

        cy.get('#normal_login_email')
            .type('orkhanmaharramov2019@gmail.com')
        cy.get('#normal_login_password')
            .type('MajeraDoluAmerica!@')
        cy.get('.login-form-button')
            .click()

        cy.get('.ant-notification-notice-message')
            .should('have.text', 'Auth failed')

    })
})