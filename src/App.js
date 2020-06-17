import React from 'react';
import logo from './logo.svg';
import './App.css';
import UseAPI from './useAPI';

function App() {
  
  return (
    <div className="App">
      
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <UseAPI />
      </header>
    </div>
  );
}

export default App;
