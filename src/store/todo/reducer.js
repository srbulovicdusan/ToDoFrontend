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
    const newTodos = state.todos.slice();
    newTodos.unshift(payload);
    return {
      todos: newTodos
    };
}
function putDeleteTodo(state, payload) {
    const todosCopy = state.todos.slice();
    for (let i = 0; i < todosCopy.length; i++){
      if (todosCopy[i].id == payload.id){
        todosCopy.splice(i, 1);
      }
    }
    return {
      todos: todosCopy
    };
}
function putExistingTodo(state, payload) {
    const newTodos = state.todos.slice();
    for (let i = 0; i < newTodos.length; i++){
      if (newTodos[i].id == payload.id){
        newTodos[i] = payload;
      }
    }
    return {
      todos: newTodos
    };
}
export default todoReducer;