import {
    PUT_EXISTING_TODO, 
    PUT_NEW_TODO,
    PUT_DELETE_TODO,
    PUT_ALL_TODOS} from './constants'

  
  const initialState = {
      todos: [],
  }
  
  const todoReducer = (state = initialState, { type, payload }) => {
    if (actionHandler.hasOwnProperty(type)) {
      return actionHandler[type](state, payload);
    }
  
    return state;
  };
  

  
  const actionHandler = {
    [PUT_ALL_TODOS]: putAllTodos,
    [PUT_NEW_TODO]: putNewTodo,
    [PUT_DELETE_TODO] : putDeleteTodo,
    [PUT_EXISTING_TODO] : putExistingTodo
    
  };

  function putAllTodos(state, payload) {
    return {
      ...state,
      todos : payload
    };
  }
  
function putNewTodo(state, payload) {
    return {
      todos: [...state.todos, payload]
    };
}
function putDeleteTodo(state, payload) {
  const deleteTodoIndex = state.todos.findIndex((todo) => todo.id == payload.id)

  return ({
    ...state,
    todos: [
    ...state.todos.slice(0, deleteTodoIndex),
    ...state.todos.slice(deleteTodoIndex + 1)
   ]
  })
}
function putExistingTodo(state, payload) {
  const editTodoIndex = state.todos.findIndex((todo) => todo.id == payload.id)
  return ({
    ...state,
    todos: [
    ...state.todos.slice(0, editTodoIndex),
    payload,
    ...state.todos.slice(editTodoIndex + 1)
   ]
  })
}
export default todoReducer;