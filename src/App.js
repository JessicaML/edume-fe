import React, { useState, useEffect } from 'react';
import { fetchData } from './services/fetchData';
import PhoneInput from "./PhoneInput";	
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
        {console.log(error)}
        <h1 className="container-h1">Enter a number to start</h1>
        <PhoneInput
          data={data}
        />
      </header>
    </div>
  );
}

export default App;
