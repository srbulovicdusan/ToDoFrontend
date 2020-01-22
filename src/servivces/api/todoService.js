import httpClient from '../HttpBaseClient';
import { UPDATE_TODO } from '../../store/todo/constants';

const ENDPOINTS = {
  GET_ALL_TODOS: '/todo',
  UPDATE_TODO: '/todo',
  DELETE_TODO: '/todo',
  ADD_TODO: '/todo',
  AUTH_LOGIN: '/todo',
  AUTH_LOGOUT: '/todo'
};

class TodoService {
  getAllTodos = async credentials => {

    const  {data}  = await httpClient.getApiClient().get(
      ENDPOINTS.GET_ALL_TODOS
    );
    return data;
  };
  updateTodo = async (todo) =>{
    const {data} = await httpClient.getApiClient().put(
      ENDPOINTS.UPDATE_TODO,
      todo,
    );
    return data;
  }
  addNewTodo = async (payload) =>{
    const {data} = await httpClient.getApiClient().post(
      ENDPOINTS.ADD_TODO,
      payload
    );
    return data;
  }
  deleteTodo = async (todo) =>{
    await httpClient.getApiClient().delete(
      ENDPOINTS.DELETE_TODO + "/" + todo.id
    )
  }
}

export default new TodoService();