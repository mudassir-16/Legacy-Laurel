import React, { Suspense } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutEvent from './components/AboutEvent';
import DepartmentOverview from './components/DepartmentOverview';
import EventHighlights from './components/EventHighlights';
import Schedule from './components/Schedule';
import VenueContact from './components/VenueContact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <main>
        <HeroSection />
        <AboutEvent />
        <DepartmentOverview />
        <EventHighlights />
        <Schedule />
        <VenueContact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
