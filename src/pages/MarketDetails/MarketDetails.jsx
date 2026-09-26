import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import markets from '../../data/markets.json';
import produceImages from '../../data/produceImages.js';

import {
  isBookmarked,
  saveBookmark,
  removeBookmark
} from '../../utils/bookmarks';

import './MarketDetails.css';

function MarketDetails() {
  const { marketId } = useParams();
  const [bookmarked, setBookmarked] = useState(
    () => isBookmarked(marketId)
  );

  const handleBookmark = () => {
  if (bookmarked) {
    removeBookmark(marketId);
    setBookmarked(false);
  } else {
    saveBookmark(marketId);
    setBookmarked(true);
  }
};

  const market = markets.find(
    (market) => market.id === marketId
  );

  if (!market) {
    return (
      <main className="market-detail">
        <div className="market-detail__container">
          <h1>Market Not Found</h1>

          <p>
            We couldn't find the market you're looking for.
          </p>

          <Link to="/">
            Back to Home
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="market-detail">
      <div className="market-detail__container">

        <nav
          className="market-detail__breadcrumb"
          aria-label="Breadcrumb"
        >
          <Link to="/">
            Home
          </Link>

          <i
            className="bi bi-chevron-right"
            aria-hidden="true"
          ></i>

          <Link to="/markets">
            Market Directory
          </Link>

          <i
            className="bi bi-chevron-right"
            aria-hidden="true"
          ></i>

          <span>
            {market.name}
          </span>
        </nav>

        <section className="market-detail__hero">
          <div className="market-detail__hero-image">
            <img
              src={market.image}
              alt={market.name}
            />
          </div>

          <div className="market-detail__hero-content">
            <span className="market-detail__area">
              {market.area}
            </span>

            <h1>{market.name}</h1>

            <p className="market-detail__description">
              {market.description}
            </p>

            <div className="market-detail__location">
              <i
                className="bi bi-geo-alt"
                aria-hidden="true"
              ></i>

              <span>{market.address}</span>
            </div>

            <button
              type="button"
              className="market-detail__bookmark"
              onClick={handleBookmark}
            >
              <i
                className={
                  bookmarked
                    ? 'bi bi-bookmark-fill'
                    : 'bi bi-bookmark'
                }
                aria-hidden="true"
              ></i>

              {bookmarked
                ? 'Saved Market'
                : 'Save Market'}
            </button>
          </div>
        </section>

        <section className="market-detail__info">
        <div className="market-detail__location-card">
          <div className="market-detail__section-heading">
            <span className="market-detail__section-icon">
              <i
                className="bi bi-geo-alt"
                aria-hidden="true"
              ></i>
            </span>

            <div>
              <span className="market-detail__eyebrow">
                Location
              </span>

              <h2>Market Location</h2>
            </div>
          </div>

          <p className="market-detail__address">
            {market.address}
          </p>

          <p className="market-detail__area-text">
            {market.area}
          </p>
        </div>

        <div className="market-detail__schedule-card">
          <div className="market-detail__section-heading">
            <span className="market-detail__section-icon">
              <i
                className="bi bi-clock"
                aria-hidden="true"
              ></i>
            </span>

            <div>
              <span className="market-detail__eyebrow">
                Schedule
              </span>

              <h2>Opening Hours</h2>
            </div>
          </div>

          <div className="market-detail__schedule">
            {market.schedule.map((schedule) => (
              <div
                className="market-detail__schedule-row"
                key={schedule.day}
              >
                <span>{schedule.day}</span>

                <span>
                  {schedule.open} - {schedule.close}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>


      <section className="market-detail__produce">
        <div className="market-detail__section-heading">
          <span className="market-detail__section-icon">
            <i
              className="bi bi-basket"
              aria-hidden="true"
            ></i>
          </span>

          <div>
            <span className="market-detail__eyebrow">
              Produce
            </span>

            <h2>Typical Produce</h2>
          </div>
        </div>

        <div className="market-detail__produce-grid">
          {market.produce.map((produce) => (
            <div
              className="market-detail__produce-item"
              key={produce}
            >
              <img
                src={produceImages[produce]}
                alt={produce}
              />

              <span>{produce}</span>
            </div>
          ))}
        </div>
      </section>

      </div>
    </main>
  );
}

export default MarketDetails;