class loginFailurePage {

    get enterEmailID() {
        return cy.get('#email', { timeout: 20000 });
    }
    get enterPassword() {
        return cy.get('#password', { timeout: 20000 });
    }
    get enterLoginButton() {
        return cy.get(':nth-child(3) > .btn')
    }
    get validateFailureMessage() {
        return cy.get('form[id="login-form"] div span b')
    }
    

  
}

export default loginFailurePage