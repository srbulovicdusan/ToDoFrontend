import {
    CREATE_TODO, 
    UPDATE_TODO, 
    DELETE_TODO, 
    GET_ALL_TODOS, 
    PUT_EXISTING_TODO, 
    PUT_NEW_TODO,
    PUT_DELETE_TODO,
    PUT_ALL_TODOS} from './constants'

export const createTodo = payload =>({
    type : CREATE_TODO,
    payload
});

export const updateTodo= payload =>({
    type : UPDATE_TODO,
    payload
});

export const deleteTodo = payload =>({
    type : DELETE_TODO,
    payload
});
export const getAllTodos = payload =>({
    type : GET_ALL_TODOS,
    payload
});
export const putExistingTodo = payload =>({
    type : PUT_EXISTING_TODO,
    payload
});
export const putNewTodo = payload =>({
    type : PUT_NEW_TODO,
    payload
});
export const putDeleteTodo = payload =>({
    type : PUT_DELETE_TODO,
    payload
});
export const putAllTodos= payload =>({
    type : PUT_ALL_TODOS,
    payload
});
