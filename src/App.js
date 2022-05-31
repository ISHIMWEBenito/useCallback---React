import React, { useState, useCallback } from 'react';
import Child from './components/Child';
import './App.css';

function App() {
  const [localNumber, setLocalNumber] = useState(0);
  const [childNumber, setChildNumber] = useState(0);

  const memoizedCallback = useCallback(
    (number) => changeChildNumber(number),
    []
  );

  function incrementLocal() {
    setLocalNumber((state) => state + 1);
  }

  function changeChildNumber(number) {
    setChildNumber(number);
  }

  return (
    <div className='App'>
      {/* <Child changeNumber={changeChildNumber} number={childNumber} /> "here" is being
      printed and to solve this we have to memeize the function */}
      <Child changeNumber={memoizedCallback} number={childNumber} />
      <button onClick={incrementLocal}>Click to increment local</button>
      <h1>local: {localNumber}</h1>
    </div>
  );
}

export default App;
