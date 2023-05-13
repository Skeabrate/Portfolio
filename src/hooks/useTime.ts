import { useEffect, useState } from 'react';

export const useTime = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const updateDate = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      clearInterval(updateDate);
    };
  }, [time]);

  return { time: time.toLocaleTimeString() };
};
