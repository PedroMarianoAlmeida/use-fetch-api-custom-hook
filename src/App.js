import React from 'react';
import logo from './logo.svg';
import './App.css';
import useAPI from './useAPI';

//Based on: https://medium.com/swlh/usefetch-a-custom-react-hook-36d5f5819d8

function App() {

  const [ skipHook, setSkipHook ] = React.useState(true);
  const [ parameter, setParameter ] = React.useState ("");
  
  const url = 'https://api.nationalize.io?'
  const initialParams = {name: "michael"};
  const  { data, isLoading, hasError, errorMessage, updateUrl, updateParams }  = useAPI(url, initialParams, skipHook)

  const handleClickCallHook = () => {
    setSkipHook(false);
  }

  const handleClickChangeParameter = () => {
    updateUrl('https://api.nationalize.io?name=john')
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    updateParams(parameter);
    setSkipHook(false);
  }

  return (
    <div className="App">
      
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <button onClick={handleClickCallHook}>Call Hook</button>
        <button onClick={handleClickChangeParameter}>Change entire address</button>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="chose a new parameter" onChange={(e)=> setParameter(e.target.value)}/>
          <input type="submit" text="send" />
        </form>

        {hasError? <h1>{errorMessage}</h1> : (isLoading? <h1>...loading</h1> : <h1>{data}</h1>)}
      </header>
    </div>
  );
}

export default App;
