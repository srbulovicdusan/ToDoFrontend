import React, { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { registerUser } from "../store/user/actions";
import {Button, TextField, Card, CardContent, CardActions} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import {connect} from 'react-redux';
const RegisterPage = (props) => {
  
  const dispatch = useDispatch();
  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const submitRegistration = () =>{
    console.log("usao u submut reg")
    dispatch(
        
        registerUser({
          name,
          email,
          password
        })
      );
  };
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;
  return (
    
      
      <Card className = {classes.card}>
      <CardContent>
          <TextField id="standard-basic" label="Name"
            type="text" 
            name="name" 
            value={name}
            onChange = {(event)=>{setName(event.target.value)}}
            />
          <TextField id="standard-basic" label="Email"
            type="text" 
            name="username" 
            value={email}
            onChange = {(event)=>{setEmail(event.target.value)}}
            />
          <TextField id="standard-basic" label="Password"
            type="password" 
            name="password" 
            value={password}
            onChange = {(event)=>{setPassword(event.target.value)}}
            />
        </CardContent>
        <CardActions >
          <Button className={classes.button} variant="contained" color="primary"
              onClick={submitRegistration}
          >Register</Button>
      </CardActions>
      </Card>
    
  );
}

const useStyles = makeStyles({
  card: {
    minWidth: 275,
    width: '20%',
    marginLeft: '40%',
    marginTop : '5%',
    textAlign: 'center',

  },
  field: {
    margin : 'auto',
  },
  button:{
    margin: 'auto'
  }
});

export default RegisterPage