import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Efe Özsoy's first docker codes...</p>
        <a
          className="App-link"
          href="https://useinsider.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by Insider
        </a>
      </header>
    </div>
  );
}

export default App;
