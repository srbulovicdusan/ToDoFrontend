import httpClient from '../HttpBaseClient';
import { UPDATE_TODO } from '../../store/todo/constants';

const ENDPOINT_PREFIX = '/todo';

class TodoService {
  getAllTodos = async credentials => {

    const  {data}  = await httpClient.getApiClient().get(
      ENDPOINT_PREFIX
    );
    return data;
  };
  updateTodo = async (todo) =>{
    const {data} = await httpClient.getApiClient().put(
      ENDPOINT_PREFIX,
      todo,
    );
    return data;
  }
  addNewTodo = async (payload) =>{
    const {data} = await httpClient.getApiClient().post(
      ENDPOINT_PREFIX,
      payload
    );
    return data;
  }
  deleteTodo = async (todo) =>{
    await httpClient.getApiClient().delete(
      ENDPOINT_PREFIX + "/" + todo.id
    )
  }
}

export default new TodoService();