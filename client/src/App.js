import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Blockchain Application</h1>
      <div></div>
      <div className="database"> 
      <label>ID:</label>
      <input type="text" name="ID" />
      <label>hash:</label>
      <input type="text" name="hash" />
      <label>nonce:</label>
      <input type="text" name="nonce" />
      <label>block-data:</label>
      <input type="text" name="block-data" />
      <label>previous hash:</label>
      <input type="text" name="previoushash" />
      <label>user id:</label>
      <input type="text" name="userid" />

      <button>Submit</button>
      </div>
    </div>
  );
}

export default App;
