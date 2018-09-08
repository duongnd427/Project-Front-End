import React, { Component } from 'react';
import './App.css'
import Login from './Container/Login'
import Books from './Container/Books'
import { Route, Switch, BrowserRouter } from 'react-router-dom'
import axios from 'axios'

class App extends Component {
  state = {};
  _onLogin = () => {
    axios
      .post("http://localhost:5050/api/auth/login", {
        username: "web13",
        password: "123"
      })
      .then(response => {
        console.log(response)
        this.setState({
          
        })
      }
      )
      .catch(err => console.error(err))
  }

  render() {
   

    return (
      <div className="App">
        <BrowserRouter>
          <Switch>
            <Route exact path='/' render={(props) => {
              return <Books />
            }} />
            <Route path='/xxx' render={(props) => {
              return <Login
              />
            }} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
