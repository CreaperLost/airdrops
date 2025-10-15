import React from 'react';
import { EXCHANGES } from '../constants';
import ExchangeCard from './ExchangeCard';

const ExchangesSection: React.FC = () => {
    return (
        <div className="pb-16 bg-slate-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {EXCHANGES.map(exchange => (
                        <ExchangeCard key={exchange.id} exchange={exchange} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ExchangesSection;