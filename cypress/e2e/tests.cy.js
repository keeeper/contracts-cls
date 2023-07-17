describe('Contracts app test', () => {
  it('From homepage to contract defailts and back again', () => {
    cy.visit('http://localhost:3000');
    cy.get('[data-testid="contract-short"]').then(($contracts) => {
      if ($contracts.length > 0) {
        cy.get('[data-testid="contract-short"]').eq(0).find('[data-testid="contract-details-button"]').click();
      } 
    });
    cy.url().should('include', '/contracts/');
    cy.wait(5000);
    cy.get('[data-testid="button-home"]').click();
  });

  it('From homepage to create category and check Toastify', () => {
    cy.visit('http://localhost:3000');
    cy.get('[data-testid="button-create-category"]').click();
    cy.url().should('include', '/create-category');
    cy.get('[data-testid="button-save-category"]').click();
    cy.get('[data-testid="category-name-input"]').should('be.focused');
    cy.get('[data-testid="category-name-input"]').type('Loan');
    cy.get('[data-testid="button-save-category"]').click();
    cy.get('.Toastify__toast').should('exist');
  });
})