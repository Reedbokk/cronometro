import React from 'react';

// Formatea el tiempo para mostrar en la lista
const formatTime = (time) => {
  const minutes = Math.floor(time / 60000);
  const seconds = Math.floor((time % 60000) / 1000);
  const milliseconds = time % 1000;
  return `${minutes.toString().padStart(2, '0')}:${seconds
    .toString()
    .padStart(2, '0')}:${milliseconds.toString().padStart(3, '0')}`;
};

const LapList = ({ laps }) => {
  return (
    <div className="laps">
      <h2>Registros de Tiempo</h2>
      <ul>
        {laps.map((lap, index) => (
          <li key={index}>{formatTime(lap)}</li>
        ))}
      </ul>
    </div>
  );
};

export default LapList;
