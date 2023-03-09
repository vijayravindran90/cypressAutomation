import {CreateTodo} from "../pages/createTodoPage";
import {DeleteTodo} from "../pages/deleteTodoPage";
const createTodo = new CreateTodo();
const deleteTodo = new DeleteTodo();

describe('Delete Todo', () => {

  beforeEach('navigate to todo page',()=>{
    createTodo.navigate();
  })
    it('should be able to delete the created todo', () => {
     createTodo.createTodo('shopping',1)
     deleteTodo.deleteTodo(0);
    })
  })
  
  