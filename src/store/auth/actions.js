import {
    LOGIN,
    REGISTER,
    LOGOUT
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
