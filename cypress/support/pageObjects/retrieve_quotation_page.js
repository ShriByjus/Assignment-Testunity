class retriveQoutationPage {

    get selectRetriveQoutation() {
        return cy.get('#ui-id-3', { timeout: 20000 });
    }
    get enterIdentificationNumber() {
        return cy.get('input[placeholder="identification number"]', { timeout: 20000 });
    }
    get clickOnRetirveButton() {
        return cy.get('#getquote')
    }
  
}

export default retriveQoutationPage