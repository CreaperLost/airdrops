

import React from 'react';
import Calculator from './Calculator';

const CalculatorSection: React.FC = () => {
  return (
    <div className="bg-slate-100 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-800">
            DEX Airdrop Points Calculator
          </h1>
          <p className="mt-4 text-lg text-slate-600 max-w-3xl mx-auto">
            Estimate your potential airdrop rewards from promising DEX exchanges. Calculate points, tokens, and potential USD values.
          </p>
        </div>
        <Calculator />
      </div>
    </div>
  );
};

export default CalculatorSection;