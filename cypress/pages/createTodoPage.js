export class CreateTodo{

    createTodo(todoItem, todoCount){
      cy.get('.new-todo').click();
      cy.get('.new-todo').type('shopping');
      cy.get('.new-todo').type('{enter}');
      cy.get('label[data-testid="todo-title"]').should('have.text', todoItem);
      cy.get('label[data-testid="todo-title"]').should('have.length', todoCount);
    }
    navigate()
    {
        cy.visit('/');
        cy.url().should('include','/todomvc');
    }
}