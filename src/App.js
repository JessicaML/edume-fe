import React, { useState, useEffect } from 'react';
import { fetchData } from './services/fetchData';
import PhoneInput from './PhoneInput';
import Suggestions from './Suggestions';
import './App.css';

function App() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    fetchData('http://localhost:3001/t9', setData, setError);
  }, []);

  const enterNumber = (number) => {
    setSuggestions(data[number]);
  };

  return (
    <>
      <h1 className="container-h1">Enter a number to start</h1>

      <div className="output" />

      <Suggestions
        suggestions={suggestions}
      />

      <button type="button" className="clear-button">clear</button>

      <span>{error && <p>Sorry, something went wrong</p>}</span>

      <PhoneInput
        data={data}
        onClick={enterNumber}
      />
    </>
  );
}

export default App;
