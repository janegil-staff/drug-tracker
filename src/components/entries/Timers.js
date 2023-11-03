import React, { useEffect, useState } from 'react';
import { TimeFormat } from '../../util/helpers';
import './UserEntry.css';

const Timer = ({ callQueuedTime }) => {
  const [time, setTime] = useState(() => new Date().getTime());
  useEffect(() => {
    const queuedTime = new Date(callQueuedTime).getTime();
    const intervalId = setInterval(function () {
      setTime(new Date().getTime() - queuedTime);
    }, 1000);
    return ()=>{
      clearInterval(intervalId);
    }
  }, [callQueuedTime]);

  return <p className="center"><TimeFormat time={time} /></p>;
};

export default Timer;