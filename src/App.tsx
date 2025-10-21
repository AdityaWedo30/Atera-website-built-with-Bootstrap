import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './styles/App.css';
import Header from './components/layout/Header';
import HeroSection from './sections/HeroSection';
import WhatToCookSection from './sections/WhatToCookSection';
import BestOfWeekSection from './sections/BestOfWeekSection';
import Footer from './components/layout/Footer';
import AboutPage from './sections/AboutPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function Home() {
	return (
		<>
			<HeroSection />
			<WhatToCookSection />
			<BestOfWeekSection />
		</>
	);
}

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
