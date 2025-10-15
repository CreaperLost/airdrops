

import React from 'react';

interface EstimatedReturnsProps {
    yourPoints: number;
    calculations: {
        estimatedReturn: number;
        pointsValue: number;
        yourShare: number;
        totalPointsPool: number;
        airdropAllocation: number;
    };
}

const formatCurrency = (value: number) => {
    if (isNaN(value)) return '$0.00';
    if (value >= 1_000_000_000) return `$${(value / 1_000_000_000).toFixed(2)}B`;
    if (value >= 1_000_000) return `$${(value / 1_000_000).toFixed(2)}M`;
    if (value >= 1000) return `$${(value / 1000).toFixed(2)}K`;
    return `$${value.toFixed(2)}`;
};

const formatLargeNumber = (value: number) => {
    return value.toLocaleString('en-US');
};

const EstimatedReturns: React.FC<EstimatedReturnsProps> = ({ calculations, yourPoints }) => {
    const { estimatedReturn, pointsValue, yourShare, totalPointsPool, airdropAllocation } = calculations;
    
    return (
        <div className="bg-white p-6 rounded-xl border border-slate-200/80 shadow-sm">
            <h3 className="text-lg font-bold text-slate-800 mb-4">Estimated Returns</h3>
            
            <div className="bg-blue-600 text-white p-6 rounded-lg text-center mb-6">
                <span className="text-sm text-blue-200">Your Estimated Value</span>
                <p className="text-4xl font-bold mt-1">
                    {formatCurrency(estimatedReturn)}
                </p>
                <p className="text-xs text-blue-200 mt-2">Based on {formatLargeNumber(yourPoints)} points</p>
            </div>
            
            <div className="space-y-4 mb-6">
                <div className="flex justify-between items-center text-sm">
                    <span className="text-slate-500">Points Value</span>
                    <span className="font-bold text-slate-800">${pointsValue.toFixed(2)}</span>
                </div>
                <div className="flex justify-between items-center text-sm">
                    <span className="text-slate-500">Your Share</span>
                    <span className="font-bold text-slate-800">{yourShare.toLocaleString('en-US', { style: 'percent', minimumFractionDigits: 4, maximumFractionDigits: 4 })}</span>
                </div>
            </div>

            <div className="border-t border-slate-200 pt-4">
                <h4 className="text-sm font-semibold text-slate-600 mb-3">Calculation Breakdown</h4>
                <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                        <span className="text-slate-500">Total Points Pool</span>
                        <span className="text-slate-700 font-medium">{formatLargeNumber(totalPointsPool)}</span>
                    </div>
                    <div className="flex justify-between">
                        <span className="text-slate-500">Airdrop Allocation</span>
                        <span className="text-slate-700 font-medium">{formatCurrency(airdropAllocation)}</span>
                    </div>
                    <div className="flex justify-between">
                        <span className="text-slate-500">Your Points</span>
                        <span className="text-slate-700 font-medium">{formatLargeNumber(yourPoints)}</span>
                    </div>
                    <div className="flex justify-between">
                        <span className="text-slate-500">Estimated Return</span>
                        <span className="text-green-600 font-bold">{formatCurrency(estimatedReturn)}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EstimatedReturns;
