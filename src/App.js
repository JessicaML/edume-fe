import React, { useState, useEffect } from 'react';
import { fetchData } from './services/fetchData';
import getCombinations from './utils/getCombinations';
import PhoneInput from './PhoneInput';
import Suggestions from './Suggestions';
import './App.css';

function App() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [suggestions, setSuggestions] = useState([]);
  const [output, setOutput] = useState('');
  const [userInput, setUserInput] = useState('');

  useEffect(() => {
    fetchData('http://localhost:3001/t9', setData, setError);
  }, []);

  const enterNumber = (number) => {
    if (number > 1) {
      setUserInput(userInput + number);
      if (userInput + number.length > 1) {
        const combinations = getCombinations(userInput + number, data);
        setSuggestions(combinations);
        console.log('combinations', combinations);
      } else {
        setSuggestions(data[number]);
      }
    }
    setSuggestions(data[number]);
  };

  const selectSuggestion = (suggestion) => {
    setOutput(suggestion);
  };

  return (
    <>
      <h1 className="container-h1">Enter a number to start</h1>

      <div className="output">{output}</div>

      <Suggestions
        suggestions={suggestions}
        onClick={selectSuggestion}
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
