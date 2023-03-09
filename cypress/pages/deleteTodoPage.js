export class DeleteTodo{

    deleteTodo(todoCount){
    cy.get('[type="checkbox"]').check();
    cy.get('.clear-completed').click();
    cy.get('label[data-testid="todo-title"]').should('have.length', todoCount);
    }
}