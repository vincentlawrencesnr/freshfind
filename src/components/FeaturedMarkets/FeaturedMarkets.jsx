import { Link } from 'react-router-dom';
import markets from '../../data/markets.json';

import './FeaturedMarkets.css';

function FeaturedMarkets() {

  const featuredMarkets = markets.slice(0, 3);

  return (
    <section className="featured-markets">
        <div className="featured-markets__container">

          <div className="featured-markets__header">
            <div>
              <span className="featured-markets__eyebrow">
                Explore local markets
              </span>

              <h2>
                Discover markets near you
              </h2>
            </div>

            <Link to="/markets">
              View all markets
            </Link>
          </div>

          <div className="featured-markets__grid">
            {featuredMarkets.map((market) => (
              <article
                className="featured-market-card"
                key={market.id}
              >
                <div className="featured-market-card__image">
                  <img
                    src={market.image}
                    alt={market.name}
                  />
                </div>

                <div className="featured-market-card__content">
                  <span>
                    {market.area}
                  </span>

                  <h3>
                    {market.name}
                  </h3>

                  <p>
                    {market.description}
                  </p>

                  <Link to={`/markets/${market.id}`}>
                    Explore Market
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

export default FeaturedMarkets;