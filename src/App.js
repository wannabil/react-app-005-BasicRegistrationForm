import React from 'react';
import logo from './logo.svg';
import './App.css';
import RegistrationForm from './RegistrationForm';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <img src={logo} className="App-logo" alt="logo" />
          <RegistrationForm />
        </div>
      </header>
    </div>
  );
}

export default App;

