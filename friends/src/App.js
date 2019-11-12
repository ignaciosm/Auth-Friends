import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, Link, Switch } from "react-router-dom";
import Login from './components/Login';
import FriendsList from './components/FriendsList';
import PrivateRoute from './components/PrivateRoute';

function App() {
  return (
    <div className="App">
      <nav>
        <Link to="/login">Login</Link>
        <Link to="/friends">Friends List</Link>

        {/* <Switch> */}
          <PrivateRoute path="/friends">
            <FriendsList />
          </PrivateRoute>
          <Route path="/login" component={Login} />
        {/* </Switch> */}

        
        
      </nav>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
