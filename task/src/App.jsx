import React, { useState } from 'react';
import './App.css';
import Home from "./pages/Home";
import About from "./pages/About";
import Footer from "./components/Footer";
import Navbar from './components/Navbar';
import Button from './components/Button';
import Card from './components/Card';
import TaskManager from './components/TaskManager';

export default function App() {
  const [page, setPage] = useState('home');
  const [activeCard, setActiveCard] = useState(null); // track which card is active

  const cards = [
    { title: "Card 1", content: "This is the first card" },
    { title: "Card 2", content: "This is the second card" },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      {/* Navbar */}
      <Navbar />

      {/* Main content */}
      <main className="flex-grow p-4">
        {/* Page content */}
        {page === 'home' && <Home />}
        {page === 'about' && <About />}

        {/* Navigation buttons */}
        <div className="mt-4 flex gap-2">
          <Button variant="primary" onClick={() => setPage('home')}>Home</Button>
          <Button variant="secondary" onClick={() => setPage('about')}>About</Button>
        </div>

        {/* Cards with active state */}
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
          {cards.map((card, index) => (
            <Card
              key={index}
              title={card.title}
              content={card.content}
              active={activeCard === index}         // highlight if active
              onClick={() => setActiveCard(index)}  // set active on click
            />
          ))}
        </div>

        {/* TaskManager component */}
        <div className="mt-6">
          <TaskManager />
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
