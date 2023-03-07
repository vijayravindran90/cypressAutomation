describe('Verify navigated to todo page', () => {
  it('Navigate to todo page', () => {
    cy.visit('https://demo.playwright.dev/todomvc/')
    cy.url().should('include','/todomvc');
  })
})