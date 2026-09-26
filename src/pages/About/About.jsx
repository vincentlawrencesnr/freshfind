import { Link } from 'react-router-dom';

import './About.css';

function About() {
  return (
    <main className="about">
      <div className="about__container">

        <header className="about__header">
          <span className="about__eyebrow">
            About Local Markets
          </span>

          <h1>
            Connecting people with local markets.
          </h1>

          <p>
            Local Markets makes it easier to discover
            fresh produce, explore nearby markets, and
            connect with local communities.
          </p>
        </header>

        <section className="about__intro">
          <div className="about__intro-content">
            <span className="about__section-label">
              Our Purpose
            </span>

            <h2>
              Making local markets easier to discover.
            </h2>

            <p>
              Finding fresh produce should not have to be
              complicated. Local Markets brings useful
              market information together in one place so
              visitors can discover markets, explore what
              they offer, and find locations that fit their
              needs.
            </p>

            <p>
              From market schedules and available produce
              to opening status and directions, the
              platform is designed to make exploring local
              markets simpler.
            </p>
          </div>

          <div className="about__intro-card">
            <i
              className="bi bi-shop"
              aria-hidden="true"
            ></i>

            <h3>
              Explore local.
            </h3>

            <p>
              Discover markets, fresh produce, and local
              communities around Lagos.
            </p>
          </div>
        </section>

        <section className="about__features">
          <div className="about__section-header">
            <span className="about__section-label">
              What You Can Do
            </span>

            <h2>
              Everything you need to explore.
            </h2>
          </div>

          <div className="about__feature-grid">

            <article className="about__feature">
              <div className="about__feature-icon">
                <i
                  className="bi bi-search"
                  aria-hidden="true"
                ></i>
              </div>

              <h3>
                Discover Markets
              </h3>

              <p>
                Browse a directory of local markets and
                explore the details of each location.
              </p>
            </article>

            <article className="about__feature">
              <div className="about__feature-icon">
                <i
                  className="bi bi-geo-alt"
                  aria-hidden="true"
                ></i>
              </div>

              <h3>
                Find Nearby
              </h3>

              <p>
                Use your browser location to discover
                markets based on your distance from them.
              </p>
            </article>

            <article className="about__feature">
              <div className="about__feature-icon">
                <i
                  className="bi bi-clock"
                  aria-hidden="true"
                ></i>
              </div>

              <h3>
                Check Market Status
              </h3>

              <p>
                See whether a market is currently open
                based on its scheduled operating hours.
              </p>
            </article>

            <article className="about__feature">
              <div className="about__feature-icon">
                <i
                  className="bi bi-map"
                  aria-hidden="true"
                ></i>
              </div>

              <h3>
                Get Directions
              </h3>

              <p>
                Open a market's location directly in
                Google Maps when you're ready to visit.
              </p>
            </article>

          </div>
        </section>

        <section className="about__cta">
          <div>
            <span className="about__section-label">
              Start Exploring
            </span>

            <h2>
              Ready to discover a local market?
            </h2>

            <p>
              Browse the market directory and find fresh
              produce near you.
            </p>
          </div>

          <Link
            to="/markets"
            className="about__cta-link"
          >
            Explore Markets

            <i
              className="bi bi-arrow-right"
              aria-hidden="true"
            ></i>
          </Link>
        </section>

      </div>
    </main>
  );
}

export default About;