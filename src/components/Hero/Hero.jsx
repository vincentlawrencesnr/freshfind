import './Hero.css';

function Hero() {
  return (
    <section className="hero">
      <div className="hero__container">

        <div className="hero__content">

          <span className="hero__eyebrow">
            Fresh All Along
          </span>

          <h1 className="hero__title">
            Discover fresh markets
            <span> in your community.</span>
          </h1>

          <p className="hero__description">
            Find farmers markets near you, explore seasonal
            produce, and plan your next visit with confidence.
          </p>

          <div className="hero__actions">

            <a
              href="#find-market"
              className="hero__primary-action"
            >
              <i
                className="bi bi-geo-alt-fill"
                aria-hidden="true"
              ></i>

              Find a Market
            </a>

            <a
              href="#seasonal-picks"
              className="hero__secondary-action"
            >
              Explore Produce

              <i
                className="bi bi-arrow-right"
                aria-hidden="true"
              ></i>
            </a>

          </div>

        </div>

        <div className="hero__visual">

          <div className="hero__image-wrapper">
            <img
              src="/images/hero/hero-market.jpg"
              alt="Fresh produce displayed at a farmers market"
              className="hero__image"
            />
          </div>

        </div>

      </div>
    </section>
  );
}

export default Hero;