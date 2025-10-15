
import React, { useState } from 'react';
import Header from './components/Header';
import ExchangesSection from './components/ExchangesSection';
import CalculatorSection from './components/CalculatorSection';
import Hero from './components/Hero';

const App: React.FC = () => {
  const [activePage, setActivePage] = useState<'exchanges' | 'calculator'>('exchanges');

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800">
      <Header activePage={activePage} setActivePage={setActivePage} />
      <main>
        {activePage === 'exchanges' && (
          <>
            <Hero />
            <ExchangesSection />
          </>
        )}
        {activePage === 'calculator' && (
          <CalculatorSection />
        )}
      </main>
    </div>
  );
};

export default App;
