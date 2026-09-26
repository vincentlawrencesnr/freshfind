import { Link } from 'react-router-dom';
import Hero from '../../components/Hero/Hero';
import QuickFind from '../../components/QuickFind/QuickFind';
import markets from '../../data/markets.json';
import SeasonalPicks from '../../components/SeasonalPicks/SeasonalPicks';
import FeaturedMarkets from '../../components/FeaturedMarkets/FeaturedMarkets';
import MarketClock from '../../components/MarketClock/MarketClock';
import VisitorCounter from '../../components/VisitorCounter/VisitorCounter';

import './Home.css';

function Home() {
  

  return (
    <main className="home">
      <Hero />

      <QuickFind />

      <MarketClock />

      <FeaturedMarkets />

      <SeasonalPicks />

      <VisitorCounter />

    </main>
  );
}

export default Home;