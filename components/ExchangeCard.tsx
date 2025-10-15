import React from 'react';
import { Exchange } from '../types';

interface ExchangeCardProps {
    exchange: Exchange;
}

const ExchangeCard: React.FC<ExchangeCardProps> = ({ exchange }) => {
    // Truncate description to make the card more compact
    const truncatedDescription = exchange.description.length > 120 
        ? `${exchange.description.substring(0, 120)}...` 
        : exchange.description;

    return (
        <div className="bg-white border border-slate-200 rounded-xl p-4 flex flex-col shadow-sm hover:shadow-lg transition-shadow duration-300">
            <div className="mb-3">
                <h3 className="text-lg font-bold text-slate-800">{exchange.name}</h3>
            </div>
            
            <p className="text-slate-600 text-sm mb-4 flex-grow">{truncatedDescription}</p>
            
            <div className="mt-auto border-t border-slate-200 pt-4 flex items-end justify-between">
                <div>
                    <div className="flex items-start gap-x-6 mb-2">
                        <div>
                            <span className="text-slate-500 block text-xs">Maker Fee</span>
                            <span className="font-semibold text-slate-700 text-sm">{exchange.makerFee}</span>
                        </div>
                        <div>
                            <span className="text-slate-500 block text-xs">Taker Fee</span>
                            <span className="font-semibold text-slate-700 text-sm">{exchange.takerFee}</span>
                        </div>
                    </div>
                    <div>
                        <span className="text-slate-500 block text-xs">Blockchains</span>
                        <div className="flex flex-wrap gap-1 mt-1">
                            {exchange.blockchains.map(chain => (
                               <span key={chain} className="text-xs bg-blue-100 text-blue-700 font-semibold px-2 py-0.5 rounded-full">{chain}</span>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="flex items-center gap-2">
                     <a href={exchange.tutorialUrl} target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-slate-100 text-slate-700 text-sm font-semibold rounded-lg hover:bg-slate-200 transition-colors flex-shrink-0 whitespace-nowrap">Tutorial</a>
                     <a href={exchange.websiteUrl} target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-blue-600 text-white text-sm font-semibold rounded-lg hover:bg-blue-700 transition-colors flex-shrink-0 whitespace-nowrap">Visit Website</a>
                </div>
            </div>
        </div>
    );
};

export default ExchangeCard;