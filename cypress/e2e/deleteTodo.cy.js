describe('Verify user is able to delete created todo', () => {
    it('Navigate to todo page', () => {
      cy.visit('https://demo.playwright.dev/todomvc/')
      cy.url().should('include','/todomvc');
      cy.get('.new-todo').click();
      cy.get('.new-todo').type('shopping');
      cy.get('.new-todo').type('{enter}');
      cy.get('[type="checkbox"]').check();
      cy.get('.clear-completed').click();
      cy.get('label[data-testid="todo-title"]').should('have.length', '0');
    })
  })
  
  