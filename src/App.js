import React, { useState, useEffect } from 'react';
import TimerDisplay from './components/TimerDisplay';
import TimerControls from './components/TimerControls';
import LapList from './components/LapList';
import './App.css'; // Importa los estilos

const App = () => {
  // Estado del cronómetro
  const [elapsedMilliseconds, setElapsedMilliseconds] = useState(0);
  const [running, setRunning] = useState(false);
  const [laps, setLaps] = useState([]);

  // Efecto para manejar el temporizador
  useEffect(() => {
    let timer;
    if (running) {
      const startTime = Date.now() - elapsedMilliseconds;
      timer = setInterval(() => {
        setElapsedMilliseconds(Date.now() - startTime);
      }, 10);
    }
    return () => clearInterval(timer); // Limpia el temporizador cuando se detiene
  }, [running, elapsedMilliseconds]);

  // Funciones de control
  const startTimer = () => setRunning(true); // Inicia el cronómetro
  const pauseTimer = () => setRunning(false); // Pausa el cronómetro
  const resetTimer = () => {
    setRunning(false);
    setElapsedMilliseconds(0);
    setLaps([]); // Reinicia los laps
  };
  const recordLap = () => {
    if (running) setLaps([...laps, elapsedMilliseconds]); // Guarda un lap
  };

  return (
    <div className="container">
      <h1 className="neon-text">Cronómetro Mejorado</h1>
      <TimerDisplay time={elapsedMilliseconds} />
      <TimerControls
        startTimer={startTimer}
        pauseTimer={pauseTimer}
        resetTimer={resetTimer}
        recordLap={recordLap}
      />
      <LapList laps={laps} />
    </div>
  );
};

export default App;
