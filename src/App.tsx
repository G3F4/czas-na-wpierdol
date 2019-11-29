import differenceInHours from 'date-fns/differenceInHours';
import differenceInMinutes from 'date-fns/differenceInMinutes';
import differenceInSeconds from 'date-fns/differenceInSeconds';
import React, { useState } from 'react';
import './App.css';
import logo from './images/czas-na-wpierdol-1.jpeg';

const urlParams = new URLSearchParams(window.location.search);
const [hour, minute] = (urlParams.get('time') || '').split(':');
const dueDate = new Date(Date.now());
dueDate.setHours(parseInt(hour, 10), parseInt(minute, 10), 0);

const App: React.FC = () => {
  const [counter, setCounter] = useState(0);

  setTimeout(() => {
    setCounter(counter + 1);
  }, 1000);

  const hoursLeft = differenceInHours(
    dueDate,
    new Date(Date.now())
  );
  const minutesLeft = differenceInMinutes(
    dueDate,
    new Date(Date.now())
  ) % 60;
  const secondsLeft = differenceInSeconds(
    dueDate,
    new Date(Date.now())
  ) % 60;

  const message = `Do wpierdolu pozostało: ${hoursLeft}:${minutesLeft}:${secondsLeft}`;

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>{message}</h1>
      </header>
    </div>
  );
};

export default App;
