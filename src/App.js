import React from 'react';
import logo from './logo.svg';
import './App.css';
import useAPI from './useAPI';

//Based on: https://medium.com/swlh/usefetch-a-custom-react-hook-36d5f5819d8

function App() {

  const [ skipHook, setSkipHook ] = React.useState(true);
  
  const url = 'https://api.nationalize.io?name=michael'
  const  { data, isLoading, hasError, errorMessage }  = useAPI(url, skipHook)

  const handleClick = () => {
    setSkipHook(false);
  }

  return (
    <div className="App">
      
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <button onClick={handleClick}>Call Hook</button>
        {hasError? <h1>{errorMessage}</h1> : (isLoading? <h1>...loading</h1> : <h1>{data}</h1>)}
      </header>
    </div>
  );
}

export default App;
