import React from 'react';
import logo from './images/czas-na-wpierdol-1.jpeg';
import './App.css';

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Andrzeju, Chuck wie co mówi!
        </p>
      </header>
    </div>
  );
};

export default App;
