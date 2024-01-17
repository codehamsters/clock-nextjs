"use client";
import { useState, useEffect } from "react";

import "./stopwatch.css";

const Stopwatch = () => {
  const [isRunning, setIsRunning] = useState(false);
  const [time, setTime] = useState(0);
  const [laps, setLaps] = useState([]);
  const [timerInterval, setTimerInterval] = useState(null);

  useEffect(() => {
    if (isRunning) {
      setTimerInterval(setInterval(updateTime, 10));
    } else {
      clearInterval(timerInterval);
    }

    return () => {
      clearInterval(timerInterval);
    };
  }, [isRunning]);

  const updateTime = () => {
    setTime((prevTime) => prevTime + 1);
  };

  const formatTime = (milliseconds) => {
    const hours = Math.floor(milliseconds / 360000);
    const minutes = Math.floor((milliseconds % 3600000) / 6000);
    const seconds = Math.floor((milliseconds % 60000) / 100);
    const remainingMilliseconds = milliseconds % 100;

    const formattedHours = String(hours).padStart(2, "0");
    const formattedMinutes = String(minutes).padStart(2, "0");
    const formattedSeconds = String(seconds).padStart(2, "0");
    const formattedMilliseconds = String(remainingMilliseconds).padStart(
      2,
      "0"
    );

    return `${formattedHours}:${formattedMinutes}:${formattedSeconds}.${formattedMilliseconds}`;
  };

  const handlePlayPause = () => {
    setIsRunning((prevIsRunning) => !prevIsRunning);
  };

  const handleReset = () => {
    setIsRunning(false);
    setTime(0);
    setLaps([]);
  };

  const handleLap = () => {
    const newLap = {
      lapNumber: laps.length + 1,
      lapTime: time - (laps.length > 0 ? laps[laps.length - 1].totalTime : 0),
      totalTime: time,
    };
    setLaps((prevLaps) => [...prevLaps, newLap]);
  };

  return (
    <div className="stopwatch-page">
      <div className="stopwatch">
        <span>{formatTime(time)}</span>
      </div>
      <div className="stopwatch-utility">
        <button onClick={handleReset}>
          <i className="fa-regular fa-arrow-rotate-right"></i>
        </button>
        <button className="play-pause" onClick={handlePlayPause}>
          {isRunning ? (
            <i className="fa-solid fa-pause"></i>
          ) : (
            <i className="fa-solid fa-play"></i>
          )}
        </button>
        <button onClick={handleLap} disabled={!isRunning}>
          <i className="fa-regular fa-flag"></i>
        </button>
      </div>
      <div className="laps">
        <div className="lap-grid">
          <div>Lap</div>
          <div>Time</div>
          <div>Total</div>
          {laps.map((lap) => (
            <>
              <div>{lap.lapNumber}</div>
              <div>{formatTime(lap.lapTime)}</div>
              <div>{formatTime(lap.totalTime)}</div>
            </>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Stopwatch;
