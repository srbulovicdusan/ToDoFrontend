import {
    PUT_USER_DATA,
    PUT_USER_TOKEN
  } from './constants';
  
  const initialState = {
      user : null,
      token : localStorage.getItem("token")
  }
  
  const userReducer = (state = initialState, { type, payload }) => {
    if (actionHandler.hasOwnProperty(type)) {
      return actionHandler[type](state, payload);
    }
  
    return state;
  };
  

  
  const actionHandler = {
    [PUT_USER_DATA]: putUserData,
    [PUT_USER_TOKEN]: putUserToken,
    
  };

  function putUserData(state, payload) {
    return {
      ...state,
      user : payload
    };
  }
  
function putUserToken(state, payload) {
    return {
      ...state,
      token: payload
    };
}
export default userReducer;