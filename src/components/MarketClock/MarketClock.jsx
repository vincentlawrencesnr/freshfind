import { useEffect, useState } from 'react';

import './MarketClock.css';

function MarketClock() {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  const time = currentTime.toLocaleTimeString('en-NG', {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false
  });

  const date = currentTime.toLocaleDateString('en-NG', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  });

  return (
    <section className="market-clock">
      <div className="market-clock__container">
        <div className="market-clock__icon">
          <i
            className="bi bi-clock"
            aria-hidden="true"
          ></i>
        </div>

        <div className="market-clock__content">
          <span className="market-clock__label">
            Lagos Local Time
          </span>

          <time className="market-clock__time">
            {time}
          </time>

          <span className="market-clock__date">
            {date}
          </span>
        </div>
      </div>
    </section>
  );
}

export default MarketClock;