import React from 'react';

interface CalculatorInputsProps {
    fdv: number;
    setFdv: (value: number) => void;
    points: number;
    setPoints: (value: number) => void;
    airdropPercentage: number;
    setAirdropPercentage: (value: number) => void;
    exchangeName: string;
}

const PercentageButton: React.FC<{ value: number; current: number; onClick: (value: number) => void }> = ({ value, current, onClick }) => {
    const isActive = value === current;
    return (
        <button
            onClick={() => onClick(value)}
            className={`flex-1 py-2 text-sm font-semibold rounded-md transition-colors ${isActive ? 'bg-blue-600 text-white' : 'bg-slate-200 text-slate-800 hover:bg-slate-300'}`}
        >
            {value}%
        </button>
    );
};

const CalculatorInputs: React.FC<CalculatorInputsProps> = ({
    fdv, setFdv, points, setPoints, airdropPercentage, setAirdropPercentage, exchangeName
}) => {
    return (
        <div className="bg-white p-6 rounded-xl border border-slate-200/80 shadow-sm">
            <h3 className="text-xl font-bold text-slate-800 mb-6">Calculator Inputs</h3>
            
            <div className="space-y-6">
                <div>
                    <label htmlFor="fdv" className="block text-sm font-bold text-slate-700 mb-2">
                        Expected FDV (Fully Diluted Valuation)
                    </label>
                    <div className="relative">
                        <span className="absolute inset-y-0 left-0 pl-4 flex items-center text-slate-400">$</span>
                        <input
                            type="number"
                            id="fdv"
                            value={fdv}
                            onChange={(e) => setFdv(parseFloat(e.target.value) || 0)}
                            className="w-full pl-8 pr-10 py-3 bg-slate-700 text-white border border-slate-600 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                            placeholder="e.g., 5"
                        />
                        <span className="absolute inset-y-0 right-0 pr-4 flex items-center text-slate-400">B</span>
                    </div>
                    <p className="text-xs text-slate-500 mt-2">Select the expected market cap at launch</p>
                </div>
                
                <div>
                    <label htmlFor="points" className="block text-sm font-bold text-slate-700 mb-2">
                        Your {exchangeName} Points
                    </label>
                    <input
                        type="number"
                        id="points"
                        value={points}
                        onChange={(e) => setPoints(parseInt(e.target.value, 10) || 0)}
                        className="w-full px-4 py-3 bg-slate-700 text-white border border-slate-600 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                        placeholder="e.g., 100000"
                    />
                    <p className="text-xs text-slate-500 mt-2">Total points you've earned</p>
                </div>

                <div>
                    <label htmlFor="airdrop-percentage" className="block text-sm font-bold text-slate-700 mb-2">
                        Airdrop Percentage
                    </label>
                     <div className="relative">
                        <input
                            type="number"
                            id="airdrop-percentage"
                            value={airdropPercentage}
                            onChange={(e) => setAirdropPercentage(parseFloat(e.target.value) || 0)}
                            className="w-full px-4 py-3 pr-8 bg-slate-700 text-white border border-slate-600 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                            placeholder="e.g., 15"
                        />
                         <span className="absolute inset-y-0 right-0 pr-4 flex items-center text-slate-400">%</span>
                    </div>
                    <div className="flex space-x-2 mt-3">
                        {[10, 20, 30, 50].map(p => (
                            <PercentageButton key={p} value={p} current={airdropPercentage} onClick={setAirdropPercentage} />
                        ))}
                    </div>
                     <p className="text-xs text-slate-500 mt-2">Percentage of FDV allocated to airdrop</p>
                </div>
            </div>
        </div>
    );
};

export default CalculatorInputs;