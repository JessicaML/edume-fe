import React, { useState, useEffect } from 'react';
import { fetchData } from './services/fetchData';
import logo from './logo.svg';
import './App.css';

function App() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchData('http://localhost:3001/t9', setData, setError);
  }, []);

  return (
    <div className="App">

      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {console.log(data)}
        {console.log(error)}
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
