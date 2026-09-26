import { useEffect, useState } from 'react';

import './VisitorCounter.css';

function VisitorCounter() {
  const [visitorCount, setVisitorCount] = useState(0);

  useEffect(() => {
    const storedCount = localStorage.getItem('visitorCount');

    const currentCount = storedCount
      ? Number(storedCount) + 1
      : 1;

    localStorage.setItem(
      'visitorCount',
      currentCount.toString()
    );

    setVisitorCount(currentCount);
  }, []);

  return (
    <section
      className="visitor-counter"
      aria-label="Visitor statistics"
    >
      <div className="visitor-counter__icon">
        <i
          className="bi bi-people"
          aria-hidden="true"
        ></i>
      </div>

      <div className="visitor-counter__content">
        <span>Visitors</span>

        <strong>
          {visitorCount.toLocaleString()}
        </strong>
      </div>
    </section>
  );
}

export default VisitorCounter;