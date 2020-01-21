import React from 'react';
import logo from './logo.svg';
import './App.css';

import ToDos from './pages/ToDos';


import { Route, Redirect, Switch } from 'react-router-dom';
import LoginPage from './pages/Login';
import HomePage from './pages/HomePage';
import RegisterPage from './pages/RegisterPage'
import {connect} from 'react-redux';
import { ThemeProvider } from '@material-ui/core/styles';
import { createMuiTheme } from '@material-ui/core/styles';
import CssBaseline from "@material-ui/core/CssBaseline";
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import {Link} from 'react-router-dom';
import MyToolBar from './components/MyToolBar'
import { useSelector } from 'react-redux'

function App(props) {
  const darkTheme = createMuiTheme({
    palette: {
      type: 'dark',
      background: {
        default: "#303030"
      } 
    },
  });
  const token = useSelector(state => state.userReducer.token)

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline/>
      
      <MyToolBar></MyToolBar>
    
      <Switch>
      <Route exact path="/" component={HomePage} />
      {token == null? <Route exact path="/login" component={LoginPage} /> : null}
      {token == null? <Route exact path="/register" component={RegisterPage} /> : null}
      <Redirect from="/" to="/"/>
      </Switch>
    </ThemeProvider>

  );
}


export default App;
