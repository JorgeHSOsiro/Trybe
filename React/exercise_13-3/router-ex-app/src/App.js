import React, { Component } from 'react';
import './App.css';
import Home from './components/Home';
import About from './components/About';
import Users from './components/Users';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <header>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/users">Users</Link>
      </header>
      <main>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/users" render={(props) => <Users greetingMessage="Good Morning" />} />
        </Switch>
      </main>
      
      </BrowserRouter>
    );
  }
}

export default App;
