import React from 'react';
import logo from './logo.svg';
import './App.css';

const task = () => {
  const array = ['React', 'javascript', 'node', 'pokemon', 'redux']
  return array.map(element =>
    <li>{element}</li>
  );
}

class App extends React.Component {
  render() {
  return (
    <div className="App">
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
        {task()}
      </header>
    </div>
  );
  }
}

export default App;
