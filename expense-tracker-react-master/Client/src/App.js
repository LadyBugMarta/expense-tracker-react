import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';
import {Login} from './components/Login';
import {Register} from './components/Register';
import {Layout} from './components/Layout';
import { GlobalProvider } from './context/globalState';

function App() {
  const isLogin = Boolean(localStorage.getItem('token'))

  return (
    <Router>
      <GlobalProvider>
        <div className="auth-inner">
          <Switch>
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
            {
              isLogin ? <Route path="/" component={Layout} /> : <Route path="/" component={Login} />
            }
          </Switch>
        </div>
      </GlobalProvider>
  </Router>
  );
}

export default App;
