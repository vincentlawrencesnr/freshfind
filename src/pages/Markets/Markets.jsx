import { useState } from 'react';
import { Link } from 'react-router-dom';

import markets from '../../data/markets.json';

import { getMarketStatus } from '../../utils/marketStatus';

import { getCurrentPosition } from '../../utils/geolocation';
import { calculateDistance } from '../../utils/marketDistance';

import { getGoogleMapsUrl } from '../../utils/googleMaps';

import './Markets.css';

function Markets() {
  const [area, setArea] = useState('');
  const [day, setDay] = useState('');
  const [produce, setProduce] = useState('');
  const [sortBy, setSortBy] = useState('name');

  const [userLocation, setUserLocation] = useState(null);
  const [locationLoading, setLocationLoading] = useState(false);
  const [locationError, setLocationError] = useState('');


  const handleUseLocation = async () => {
      setLocationLoading(true);
      setLocationError('');

      try {
        const location = await getCurrentPosition();

        setUserLocation(location);
      } catch (error) {
        setLocationError(
          'Unable to access your location. Please allow location access and try again.'
        );
      } finally {
        setLocationLoading(false);
      }
    };

  const areas = [
    'Lekki',
    'Ikeja',
    'Yaba',
    'Surulere',
    'Victoria Island'
  ];

  const produceTypes = [
    'Tomatoes',
    'Plantain',
    'Peppers',
    'Spinach',
    'Pineapple',
    'Carrots',
    'Lettuce',
    'Mango',
    'Basil',
    'Okra',
    'Banana',
    'Ginger',
    'Watermelon',
    'Cucumber',
    'Mint',
    'Coconut'
  ];

  const availableDays = [
  ...new Set(
    markets.flatMap((market) =>
      market.schedule.map((schedule) => schedule.day)
    )
  )
];

  const filteredMarkets = markets
    .filter((market) => {
      const matchesArea =
        !area || market.area === area;

      const matchesDay =
        !day ||
        market.schedule.some(
          (schedule) => schedule.day === day
        );

      const matchesProduce =
        !produce ||
        market.produce.includes(produce);

      return (
        matchesArea &&
        matchesDay &&
        matchesProduce
      );
    })
     .map((market) => {
        if (!userLocation) {
          return market;
        }

        const distance = calculateDistance(
          userLocation.latitude,
          userLocation.longitude,
          market.coordinates.latitude,
          market.coordinates.longitude
        );

        return {
          ...market,
          distance
        };
      })
      .sort((a, b) => {
        if (userLocation) {
          return a.distance - b.distance;
        }

        if (sortBy === 'name') {
          return a.name.localeCompare(b.name);
        }

        if (sortBy === 'area') {
          return a.area.localeCompare(b.area);
        }

      return 0;
    });

  const clearFilters = () => {
    setArea('');
    setDay('');
    setProduce('');
    setSortBy('name');
  };

  return (
    <main className="markets">
      <div className="markets__container">

        <header className="markets__header">
          <span className="markets__eyebrow">
            Explore Local Markets
          </span>

          <h1>Market Directory</h1>

          <p>
            Discover fresh produce markets and local
            growers in your area.
          </p>
        </header>

        <section
          className="markets__filters"
          aria-label="Market filters"
        >
          <div className="markets__filter">
            <label htmlFor="directory-area">
              Area
            </label>

            <select
              id="directory-area"
              value={area}
              onChange={(event) =>
                setArea(event.target.value)
              }
            >
              <option value="">
                All areas
              </option>

              {areas.map((item) => (
                <option
                  key={item}
                  value={item}
                >
                  {item}
                </option>
              ))}
            </select>
          </div>

          <div className="markets__filter">
            <label htmlFor="directory-day">
              Day
            </label>

            <select
              id="directory-day"
              value={day}
              onChange={(event) =>
                setDay(event.target.value)
              }
            >
  
              <option value="">
                Any day
              </option>

              {availableDays.map((item) => (
                <option
                  key={item}
                  value={item}
                >
                  {item}
                </option>
              ))}
            </select>
          </div>

          <div className="markets__filter">
            <label htmlFor="directory-produce">
              Produce
            </label>

            <select
              id="directory-produce"
              value={produce}
              onChange={(event) =>
                setProduce(event.target.value)
              }
            >
              <option value="">
                Any produce
              </option>

              {produceTypes.map((item) => (
                <option
                  key={item}
                  value={item}
                >
                  {item}
                </option>
              ))}
            </select>
          </div>

          <div className="markets__filter">
            <label htmlFor="directory-sort">
              Sort by
            </label>

            <select
              id="directory-sort"
              value={sortBy}
              onChange={(event) =>
                setSortBy(event.target.value)
              }
            >
              <option value="name">
                Name
              </option>

              <option value="area">
                Area
              </option>
            </select>
          </div>

          <button
            type="button"
            className="markets__location"
            onClick={handleUseLocation}
            disabled={locationLoading}
          >
            <i
              className="bi bi-geo-alt"
              aria-hidden="true"
            ></i>

            {locationLoading
              ? 'Finding you...'
              : 'Use my location'}
          </button>

          {locationError && (
            <p className="markets__location-error">
              {locationError}
            </p>
          )}

          <button
            type="button"
            className="markets__clear"
            onClick={clearFilters}
          >
            Clear Filters
          </button>
        </section>

        <div className="markets__results">
          <p>
            {filteredMarkets.length}{' '}
            {filteredMarkets.length === 1
              ? 'market'
              : 'markets'} found
          </p>
        </div>

        {filteredMarkets.length > 0 ? (
          <div className="markets__grid">
            {filteredMarkets.map((market) => (
              <article
                className="market-card"
                key={market.id}
              >
                <div className="market-card__image">
                  <img
                    src={market.image}
                    alt={market.name}
                  />
                </div>

                <div className="market-card__content">
                  <span className="market-card__area">
                    {market.area}
                  </span>

                  {userLocation && (
                    <span className="market-card__distance">
                      <i
                        className="bi bi-geo-alt"
                        aria-hidden="true"
                      ></i>

                      {market.distance.toFixed(1)} km away
                    </span>
                  )}

                  {(() => {
                    const status = getMarketStatus(market.schedule);

                    return (
                      <span
                        className={`market-card__status ${
                          status.isOpen
                            ? 'market-card__status--open'
                            : 'market-card__status--closed'
                        }`}
                      >
                        <span
                          className="market-card__status-dot"
                          aria-hidden="true"
                        ></span>

                        {status.label}
                      </span>
                    );
                  })()}

                  <h2>{market.name}</h2>

                  <p>
                    {market.description}
                  </p>

                  <div className="market-card__actions">
                    <Link to={`/markets/${market.id}`}>
                      View Market
                    </Link>

                    <a
                      href={getGoogleMapsUrl(
                        market.coordinates.latitude,
                        market.coordinates.longitude
                      )}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="market-card__map-link"
                    >
                      <i
                        className="bi bi-map"
                        aria-hidden="true"
                      ></i>

                      View on Google Maps
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <section className="markets__empty">
            <i
              className="bi bi-search"
              aria-hidden="true"
            ></i>

            <h2>No markets found</h2>

            <p>
              Try changing your filters to find
              another market.
            </p>

            <button
              type="button"
              onClick={clearFilters}
            >
              Clear Filters
            </button>
          </section>
        )}

      </div>
    </main>
  );
}

export default Markets;

