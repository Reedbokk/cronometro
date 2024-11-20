import React from 'react';

// Formatea el tiempo en minutos, segundos y milisegundos
const formatTime = (time) => {
  const minutes = Math.floor(time / 60000);
  const seconds = Math.floor((time % 60000) / 1000);
  const milliseconds = time % 1000;
  return `${minutes.toString().padStart(2, '0')}:${seconds
    .toString()
    .padStart(2, '0')}:${milliseconds.toString().padStart(3, '0')}`;
};

const TimerDisplay = ({ time }) => {
  return <div className="display">{formatTime(time)}</div>;
};

export default TimerDisplay;
