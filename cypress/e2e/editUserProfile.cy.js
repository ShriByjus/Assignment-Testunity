describe('template spec', () => {
    it('passes', () => {
      cy.visitDemoGuru99AndCreateQoutation();
      cy.editProfile();
    })
  })