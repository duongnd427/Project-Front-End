import React, { Component } from 'react';
import './App.css'
import Login from './Container/Login'
import Books from './Container/Books'
import { Route, Switch, BrowserRouter } from 'react-router-dom'


class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Switch>
            <Route exact path='/' render={(props) => {
              return <Books />
            }} />
            <Route path='/xxx' render={(props) => {
              return <Login />
            }} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
