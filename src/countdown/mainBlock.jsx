import s from "./mainBlock.module.css";
import React, { useState, useEffect } from "react";

function formatTime(unit) {
  return unit < 10 ? `0${unit}` : unit;
}

function TimeDisplay({ hours, minutes, seconds }) {
  return (
    <div className={s.columnCont}>
      <p>day will end in</p>
      <p>
        {formatTime(hours)}:{formatTime(minutes)}:{formatTime(seconds)}{" "}
      </p>
    </div>
  );
}

function MainBlock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  const dayNow = time;
  const hours = 24 - dayNow.getHours();
  const minutes = 59 - dayNow.getMinutes();
  const seconds = 59 - dayNow.getSeconds();

  return (
    <main className={s.mainCont}>
      <TimeDisplay hours={hours} minutes={minutes} seconds={seconds} />
    </main>
  );
}

export default MainBlock;
