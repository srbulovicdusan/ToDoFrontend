import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, Redirect, Switch } from 'react-router-dom';
import LoginPage from './pages/Login';

function App() {
  return (
    <Switch>
      <Route exact path="/" component={LoginPage} />
    </Switch>
  );
}

export default App;
