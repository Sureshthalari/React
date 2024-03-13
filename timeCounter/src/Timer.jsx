import React, { useState, useRef } from 'react';
import './Timer.css';
const Timer = ({ duration, backgroundColor, timerNumber }) => {
  const [seconds, setSeconds] = useState(duration * 60);
  const [isActive, setIsActive] = useState(false);
  const intervalRef = useRef(null);
  const [timerMessage, setTimerMessage] = useState(`Timer ${timerNumber} Stopped`);

  const startTimer = () => {
    setIsActive(true);
    setTimerMessage(`Timer ${timerNumber} Started`);
    intervalRef.current = setInterval(() => {
      setSeconds(prevSeconds => prevSeconds - 1);
    }, 1000);
  };

  const pauseTimer = () => {
    clearInterval(intervalRef.current);
    setIsActive(false);
    setTimerMessage(`Timer ${timerNumber} Stopped`);
  };

  const resetTimer = () => {
    clearInterval(intervalRef.current);
    setIsActive(false);
    setSeconds(duration * 60);
    setTimerMessage(`Timer ${timerNumber} Stopped`);
  };

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const remainingSeconds = time % 60;
    return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
  };

  return (
    <div className="timer-wrapper" style={{ backgroundColor: backgroundColor }}>
      <div className="timer">
        <h2 className="timer-number">Timer {timerNumber}</h2>
        <h1 className="timer-display">{formatTime(seconds)}</h1>
        <div className="timer-controls">
          {!isActive ? (
            <button onClick={startTimer}>Start</button>
          ) : (
            <button onClick={pauseTimer}>Pause</button>
          )}
          <button onClick={resetTimer}>Reset</button>
        </div>
        <p className="timer-message">{timerMessage}</p>
      </div>
    </div>
  );
};

const App = () => {
  return (
    <div className="app">
      <h1 className="counter-heading">Counter Timer</h1>
      <div className="timer-container">
        <Timer duration={10} backgroundColor="#FF6347" timerNumber={1} />
        <Timer duration={20} backgroundColor="#66CDAA" timerNumber={2} />
        <Timer duration={30} backgroundColor="#6495ED" timerNumber={3} />
      </div>
    </div>
  );
};

export default App;