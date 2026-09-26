import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar/Navbar';

import Home from './pages/Home/Home';
import Markets from './pages/Markets/Markets';
import MarketDetails from './pages/MarketDetails/MarketDetails';
import ProduceGuide from './pages/ProduceGuide/ProduceGuide';
import Contact from './pages/Contact/Contact';
import About from './pages/About/About';
import Bookmarks from './pages/Bookmarks/Bookmarks';
import ChatbotPage from './pages/Chatbot/ChatbotPage';
import Auth from './pages/Auth/Auth';
import ChatbotLauncher from './components/ChatbotLauncher/ChatbotLauncher';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/markets" element={<Markets />} />

        <Route
          path="/markets/:marketId"
          element={<MarketDetails />}
        />

        <Route
          path="/produce"
          element={<ProduceGuide />}
        />

        <Route path="/contact" element={<Contact />} />

        <Route path="/about" element={<About />} />

        <Route path="/chatbot" element={<ChatbotPage />} />

        <Route path="/bookmarks" element={<Bookmarks />} />

        <Route path="/auth" element={<Auth />} />

      </Routes>

      <ChatbotLauncher />
      <Footer />
    </BrowserRouter>
  );
}

export default App;