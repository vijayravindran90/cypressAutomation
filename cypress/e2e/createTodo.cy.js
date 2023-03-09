import {CreateTodo} from "../pages/createTodoPage";
const createTodo = new CreateTodo();

describe('Create Todo', () => {

  beforeEach('navigate to todo page',()=>{
    createTodo.navigate();
  })
    it('should be able to create a todo', () => {
      createTodo.createTodo('shopping', 1);
    })
  })
  
  