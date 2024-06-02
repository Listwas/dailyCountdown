import React, { useState, useEffect } from "react";

function CurrentDate() {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setDate(new Date());
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div>
      <p style={{ color: "#7ec8e3" }}>{date.toLocaleTimeString()}</p>
    </div>
  );
}

export default CurrentDate;
