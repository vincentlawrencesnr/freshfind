import { useState } from 'react';
import { Link } from 'react-router-dom';
import produce from '../../data/produce.json';
import markets from '../../data/markets.json';

import './ProduceGuide.css';

function ProduceGuide() {
  const [category, setCategory] = useState('All');

  const categories = [
    'All',
    'Fruits',
    'Vegetables',
    'Herbs'
  ];

  const filteredProduce =
    category === 'All'
      ? produce
      : produce.filter((item) => item.category === category);

  const getMarketsForProduce = (produceName) => {
  return markets.filter((market) =>
    market.produce.includes(produceName)
  );
};    

  return (
    <main className="produce-guide">
      <div className="produce-guide__container">

        <header className="produce-guide__header">
          <span className="produce-guide__eyebrow">
            Fresh produce
          </span>

          <h1>Produce Guide</h1>

          <p>
            Learn about seasonal produce and discover
            what you can find at local markets.
          </p>
        </header>

        <div
          className="produce-guide__filters"
          aria-label="Produce categories"
        >
          {categories.map((item) => (
            <button
              key={item}
              type="button"
              className={
                category === item
                  ? 'produce-guide__filter produce-guide__filter--active'
                  : 'produce-guide__filter'
              }
              onClick={() => setCategory(item)}
            >
              {item}
            </button>
          ))}
        </div>

        <section className="produce-guide__grid">
          {filteredProduce.map((item) => {

            const availableMarkets = getMarketsForProduce(item.name);

            return (
            <article
              className="produce-card"
              key={item.id}
            >
              <div className="produce-card__image">
                <img
                  src={item.image}
                  alt={item.name}
                />
              </div>

              <div className="produce-card__content">
                <span className="produce-card__category">
                  {item.category}
                </span>

                <h2>{item.name}</h2>

                <p>
                  {item.description}
                </p>

                <div className="produce-card__season">
                  <i
                    className="bi bi-calendar3"
                    aria-hidden="true"
                  ></i>

                  <span>
                    Typical season: {item.season}
                  </span>
                </div>

                <div className="produce-card__markets">
                  <span className="produce-card__markets-label">
                    Available at:
                  </span>

                  <div className="produce-card__market-list">
                    {availableMarkets.map((market) => (
                      <Link
                        key={market.id}
                        to={`/markets/${market.id}`}
                      >
                        {market.name}
                      </Link>
                    ))}
                  </div>
                </div>

              </div>
            </article>
          )})}
        </section>

      </div>
    </main>
  );
}

export default ProduceGuide;