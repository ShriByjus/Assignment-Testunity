describe('template spec', () => {
  it('passes', () => {
    cy.visitDemoGuru99();
    cy.loginFailure();
    // cy.loginSuccess();
  })
})