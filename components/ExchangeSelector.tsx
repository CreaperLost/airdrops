import React from 'react';
import { CALCULATOR_EXCHANGES_DATA } from '../data/calculatorExchanges';
import { CalculatorExchange } from '../data/calculatorExchanges';


interface ExchangeSelectorProps {
    selectedExchangeId: string;
    setSelectedExchangeId: (id: string) => void;
}

const ExchangeSelector: React.FC<ExchangeSelectorProps> = ({ selectedExchangeId, setSelectedExchangeId }) => {
    return (
        <div className="bg-white p-6 rounded-xl border border-slate-200/80 shadow-sm">
            <h3 className="text-lg font-bold text-slate-800 mb-4">Select Exchange</h3>
            <div className="grid grid-cols-4 sm:grid-cols-5 md:grid-cols-6 lg:grid-cols-7 gap-3">
                {CALCULATOR_EXCHANGES_DATA.map((exchange: CalculatorExchange) => (
                    <button
                        key={exchange.id}
                        onClick={() => setSelectedExchangeId(exchange.id)}
                        className={`px-4 py-2 border rounded-lg flex items-center justify-center text-center transition-all duration-200 ${
                            selectedExchangeId === exchange.id
                                ? 'border-blue-600 bg-blue-50'
                                : 'border-slate-200 hover:border-slate-300 hover:bg-slate-50'
                        }`}
                    >
                        <span className="text-sm font-semibold text-slate-700">{exchange.name}</span>
                    </button>
                ))}
            </div>
        </div>
    );
};

export default ExchangeSelector;