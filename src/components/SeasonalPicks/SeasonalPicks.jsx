import { Link } from 'react-router-dom';
import produce from '../../data/produce.json';

import './SeasonalPicks.css';

function SeasonalPicks() {
  const seasonalPicks = produce.slice(0, 4);

  return (
    <section
      className="seasonal-picks"
      id="seasonal-picks"
    >
      <div className="seasonal-picks__container">

        <div className="seasonal-picks__header">
          <div>
            <span className="seasonal-picks__eyebrow">
              What's in season
            </span>

            <h2 className="seasonal-picks__title">
              This week's seasonal picks
            </h2>
          </div>

          <Link
            to="/produce"
            className="seasonal-picks__view-all"
          >
            View Produce Guide
            <i
              className="bi bi-arrow-right"
              aria-hidden="true"
            ></i>
          </Link>
        </div>

        <div className="seasonal-picks__grid">
          {seasonalPicks.map((item) => (
            <article
              className="seasonal-card"
              key={item.id}
            >
              <div className="seasonal-card__image">
                <img
                  src={item.image}
                  alt={item.name}
                />
              </div>

              <div className="seasonal-card__content">
                <span className="seasonal-card__category">
                  {item.category}
                </span>

                <h3>{item.name}</h3>

                <p>
                  {item.description}
                </p>

                <div className="seasonal-card__season">
                  <i
                    className="bi bi-calendar3"
                    aria-hidden="true"
                  ></i>

                  <span>
                    {item.season}
                  </span>
                </div>

                <Link
                  to="/produce"
                  className="seasonal-card__link"
                >
                  Explore produce
                  <i
                    className="bi bi-arrow-right"
                    aria-hidden="true"
                  ></i>
                </Link>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}

export default SeasonalPicks;

