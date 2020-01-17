import {
    LOGIN,
    REGISTER,
    LOGOUT,
    PUT_USER_DATA,
    PUT_USER_TOKEN
} from './constants'

export const loginUser = payload =>({
    type : LOGIN,
    payload
});

export const logoutUser = payload =>({
    type : LOGOUT,
    payload
});

export const registerUser = payload =>({
    type : REGISTER,
    payload
});
export const putUserData = payload =>({
    type : PUT_USER_DATA,
    payload
});
export const putUserToken = payload =>({
    type : PUT_USER_TOKEN,
    payload
});
