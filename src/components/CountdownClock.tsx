import { useState, useEffect } from 'react';

export const CountdownClock= ({ hours, minutes }: { hours: number; minutes: number }) => {
  const [timeRemaining, setTimeRemaining] = useState<number>(hours * 60 * 60 + minutes * 60);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTimeRemaining((prevTimeRemaining) => prevTimeRemaining - 1);
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const getFormattedTime = (time: number) => {
    /* const hours = Math.floor(time / 3600); */
    const minutes = Math.floor((time % 3600) / 60);
    const seconds = time % 60;

    return {
      /* hours, */
      minutes,
      seconds,
    };
  };

  const { 
    /* hours: remainingHours,  */
    minutes: remainingMinutes,
    seconds: remainingSeconds 
  } = getFormattedTime(timeRemaining);
  console.log("remainingSeconds.toString().padStart(2, '0'): ", remainingSeconds.toString().padStart(2, '0'));
  return (
    <div className="countdownClock">
      {/* <p>Hours: {remainingHours}</p> */}
      <p>{remainingMinutes.toString().padStart(2, '0')}</p>
      <p>:</p>
      <p>{remainingSeconds.toString().padStart(2, '0')}</p>
    </div>
  );
};