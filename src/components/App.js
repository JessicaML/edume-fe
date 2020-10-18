import React, { useState, useEffect } from 'react';
import { fetchData } from '../services/fetchData';
import words from '../services/words';
import getCombinations from '../utils/getCombinations';
import getPredictions from '../utils/getPredictions';
import PhoneInput from './PhoneInput';
import Suggestions from './Suggestions';
import '../App.css';

function App() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [suggestions, setSuggestions] = useState([]);
  const [output, setOutput] = useState('');
  const [userInput, setUserInput] = useState('');

  useEffect(() => {
    fetchData('http://localhost:3001/t9', setData, setError);
  }, []);

  const enterNumber = (value) => {
    if (value === 0) return null;
    const newInput = userInput + value;
    setUserInput(newInput);
    let suggestions = data[value];

    if (newInput.length > 1) {
      const combinations = getCombinations(newInput, data);
      const predictions = getPredictions(combinations, words);
      if (predictions.length !== 0) {
        suggestions = predictions
      }
    } 
    setSuggestions(suggestions);
  };

  const selectSuggestion = (suggestion) => {
    setOutput(`${output} ${suggestion}`);
    setSuggestions([]);
    if (userInput > 2) {
      setUserInput('');
    }
  };

  const clear = () => {
    setUserInput('');
    setSuggestions([]);
  };

  return (
    <>
      <h1 className="container-h1">Enter a number to start</h1>

      <div className="output">{output}</div>

      <Suggestions
        suggestions={suggestions}
        onClick={selectSuggestion}
      />

      <button type="button" className="clear-button" onClick={clear}>clear</button>

      <span>{error && <p>Sorry, something went wrong</p>}</span>

      <PhoneInput
        data={data}
        onClick={enterNumber}
        disabled={userInput.length > 1}
      />
    </>
  );
}

export default App;
