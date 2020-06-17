import React from 'react';
import logo from './logo.svg';
import './App.css';
import useAPI from './useAPI';

function App() {
  
  const url = 'https://api.nationalize.io?name=michael'
  const { data, isLoading } = useAPI(url)

  return (
    <div className="App">
      
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {isLoading? <h1>...loading</h1> : <h1>{data}</h1>}
      </header>
    </div>
  );
}

export default App;
