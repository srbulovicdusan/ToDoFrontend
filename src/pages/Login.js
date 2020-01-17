import React, { useState } from 'react';
import { useDispatch } from "react-redux";
import { loginUser } from "../store/user/actions";
function Login() {
  

  const dispatch = useDispatch();
  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitLogin = () =>{
      console.log("asdasdasdd")
    dispatch(
        loginUser({
          email,
          password
        })
      );
  };
  return (
    <div>
      <p>Hello</p>
      <h2>Email</h2>
      <input 
        type="text" 
        name="username" 
        value={email}
        onChange = {(event)=>{setEmail(event.value)}}
        />
      <h2>Password</h2>
      <input 
        type="password" 
        name="password" 
        value={password}
        onChange = {(event)=>{setPassword(event.value)}}
        />
      <button 
        onClick={submitLogin}
      >Login</button>
    </div>
  );
}
export default Login;