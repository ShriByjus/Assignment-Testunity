class profilePage {

    get selectProfileTab() {
        return cy.get('#ui-id-4', { timeout: 20000 });
    }
  
}

export default profilePage