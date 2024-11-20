import React from 'react';

const TimerControls = ({ startTimer, pauseTimer, resetTimer, recordLap }) => {
  return (
    <div className="controls">
      <button className="neon-button" onClick={startTimer}>
        Iniciar
      </button>
      <button className="neon-button" onClick={pauseTimer}>
        Pausar
      </button>
      <button className="neon-button" onClick={resetTimer}>
        Reiniciar
      </button>
      <button className="neon-button" onClick={recordLap}>
        Tiempo Parcial
      </button>
    </div>
  );
};

export default TimerControls;
