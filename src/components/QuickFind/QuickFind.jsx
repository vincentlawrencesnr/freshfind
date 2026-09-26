import { useState } from 'react';
import { Link } from 'react-router-dom';
import markets from '../../data/markets.json';

import './QuickFind.css';

function QuickFind() {
  const [area, setArea] = useState('');
  const [day, setDay] = useState('');
  const [produce, setProduce] = useState('');
  const [filteredMarkets, setFilteredMarkets] = useState([]);
  const [hasSearched, setHasSearched] = useState(false);

  const clearFilters = () => {
  setArea('');
  setDay('');
  setProduce('');
  setFilteredMarkets([]);
  setHasSearched(false);
};


 const handleSubmit = (event) => {
  event.preventDefault();

  const results = markets.filter((market) => {
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
  });

  setFilteredMarkets(results);

  setHasSearched(true);
};



const areas = [
  ...new Set(markets.map((market) => market.area))
];

const days = [
  ...new Set(
    markets.flatMap((market) =>
      market.schedule.map((schedule) => schedule.day)
    )
  )
];

const produceItems = [
  ...new Set(
    markets.flatMap((market) => market.produce)
  )
];

  return (
    <section
      className="quick-find"
      id="find-market"
    >
      <div className="quick-find__container">

        <div className="quick-find__header">
          <span className="quick-find__eyebrow">
            Find your market
          </span>

          <h2 className="quick-find__title">
            Fresh finds are closer than you think.
          </h2>

          <p className="quick-find__description">
            Search farmers markets by area, day, or the
            produce you're looking for.
          </p>
        </div>

        <form
          className="quick-find__form"
          onSubmit={handleSubmit}
        >

          <div className="quick-find__field">

            <label htmlFor="market-area">
              Area
            </label>

            {/* <select
              id="market-area"
              value={area}
              onChange={(event) => setArea(event.target.value)}
            >
              <option value="">
                Any area
              </option>

              <option value="Lekki">
                Lekki
              </option>

              <option value="Ikeja">
                Ikeja
              </option>

              <option value="Yaba">
                Yaba
              </option>

              <option value="Surulere">
                Surulere
              </option>

              <option value="Victoria Island">
                Victoria Island
              </option>
            </select> */}

            <select
              id="market-area"
              value={area}
              onChange={(event) => setArea(event.target.value)}
            >
              <option value="">
                Any area
              </option>

              {areas.map((area) => (
                <option
                  key={area}
                  value={area}
                >
                  {area}
                </option>
              ))}
            </select>

          </div>

          <div className="quick-find__field">

            <label htmlFor="market-day">
              Day
            </label>

            {/* <select
              id="market-day"
              value={day}
              onChange={(event) => setDay(event.target.value)}
            >
              <option value="">
                Any day
              </option>

              <option value="Monday">Monday</option>
              <option value="Tuesday">Tuesday</option>
              <option value="Wednesday">Wednesday</option>
              <option value="Thursday">Thursday</option>
              <option value="Friday">Friday</option>
              <option value="Saturday">Saturday</option>
              <option value="Sunday">Sunday</option>
            </select> */}

            <select
              id="market-day"
              value={day}
              onChange={(event) => setDay(event.target.value)}
            >
              <option value="">
                Any day
              </option>

              {days.map((day) => (
                <option
                  key={day}
                  value={day}
                >
                  {day}
                </option>
              ))}
            </select>

          </div>

          <div className="quick-find__field">

            <label htmlFor="market-produce">
              Produce
            </label>

            {/* <select
              id="market-produce"
              value={produce}
              onChange={(event) => setProduce(event.target.value)}
            >
              <option value="">
                Any produce
              </option>

              <option value="Tomatoes">Tomatoes</option>
              <option value="Plantain">Plantain</option>
              <option value="Peppers">Peppers</option>
              <option value="Spinach">Spinach</option>
              <option value="Pineapple">Pineapple</option>
              <option value="Carrots">Carrots</option>
              <option value="Lettuce">Lettuce</option>
              <option value="Mango">Mango</option>
              <option value="Basil">Basil</option>
              <option value="Okra">Okra</option>
              <option value="Banana">Banana</option>
              <option value="Ginger">Ginger</option>
              <option value="Watermelon">Watermelon</option>
              <option value="Cucumber">Cucumber</option>
              <option value="Mint">Mint</option>
              <option value="Coconut">Coconut</option>
            </select> */}

            <select
              id="market-produce"
              value={produce}
              onChange={(event) => setProduce(event.target.value)}
            >
              <option value="">
                Any produce
              </option>

              {produceItems.map((item) => (
                <option
                  key={item}
                  value={item}
                >
                  {item}
                </option>
              ))}
            </select>

          </div>

          <button
            type="submit"
            className="quick-find__submit"
          >
            <i
              className="bi bi-search"
              aria-hidden="true"
            ></i>

            Find Markets
          </button>

        </form>

        {filteredMarkets.length > 0 && (
            <div className="quick-find__results">
                <p className="quick-find__results-count">
                {filteredMarkets.length}{' '}
                {filteredMarkets.length === 1 ? 'market' : 'markets'} found
                </p>

                <div className="quick-find__results-grid">
                {filteredMarkets.map((market) => (
                    <article
                        key={market.id}
                        className="quick-find__result-card"
                        >
                        <div className="quick-find__result-image">
                            <img
                            src={market.image}
                            alt={market.name}
                            />
                        </div>

                        <div className="quick-find__result-content">
                            <span className="quick-find__result-area">
                            {market.area}
                            </span>

                            <h3>{market.name}</h3>

                            <p>{market.description}</p>

                            <div className="quick-find__result-schedule">
                            <i
                                className="bi bi-clock"
                                aria-hidden="true"
                            ></i>

                            <span>
                                {market.schedule
                                .map(
                                    (schedule) =>
                                    `${schedule.day}: ${schedule.open} - ${schedule.close}`
                                )
                                .join(' • ')}
                            </span>
                            </div>

                            <div className="quick-find__result-address">
                            <i
                                className="bi bi-geo-alt"
                                aria-hidden="true"
                            ></i>

                            <span>{market.address}</span>
                            </div>

                            <Link
                            to={`/markets/${market.id}`}
                            className="quick-find__view-button"
                            >
                            View Market
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
            )}


        {hasSearched && filteredMarkets.length === 0 && (
            <div className="quick-find__no-results">
                <i
                className="bi bi-search"
                aria-hidden="true"
                ></i>

                <h3>No markets found</h3>

                <p>
                We couldn't find a market matching your selected filters.
                </p>

                <button
                type="button"
                className="quick-find__clear-button"
                onClick={clearFilters}
                >
                Clear Filters
                </button>
            </div>
            )}    

      </div>
    </section>
  );
}

export default QuickFind;