
import React, { useState, useMemo } from 'react';
import ExchangeSelector from './ExchangeSelector';
import CalculatorInputs from './CalculatorInputs';
import EstimatedReturns from './EstimatedReturns';
import { CALCULATOR_EXCHANGES_DATA } from '../data/calculatorExchanges';

const Calculator: React.FC = () => {
    const [selectedExchangeId, setSelectedExchangeId] = useState<string>(CALCULATOR_EXCHANGES_DATA[0].id);
    const [fdv, setFdv] = useState<number>(5); // In Billions
    const [points, setPoints] = useState<number>(100000);
    const [airdropPercentage, setAirdropPercentage] = useState<number>(15);

    const selectedExchange = useMemo(() => {
        return CALCULATOR_EXCHANGES_DATA.find(ex => ex.id === selectedExchangeId) || CALCULATOR_EXCHANGES_DATA[0];
    }, [selectedExchangeId]);

    const calculations = useMemo(() => {
        const totalPointsPool = selectedExchange.totalPointsPool;
        const airdropAllocation = (fdv * 1_000_000_000) * (airdropPercentage / 100);
        
        if (totalPointsPool <= 0) {
            return {
                estimatedReturn: 0,
                pointsValue: 0,
                yourShare: 0,
                totalPointsPool,
                airdropAllocation
            };
        }

        const yourShare = points / totalPointsPool;
        const estimatedReturn = airdropAllocation * yourShare;
        const pointsValue = airdropAllocation / totalPointsPool;

        return {
            estimatedReturn,
            pointsValue,
            yourShare,
            totalPointsPool,
            airdropAllocation
        };
    }, [fdv, points, airdropPercentage, selectedExchange]);

    return (
        <div className="space-y-8">
            <ExchangeSelector
                selectedExchangeId={selectedExchangeId}
                setSelectedExchangeId={setSelectedExchangeId}
            />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
                <CalculatorInputs
                    fdv={fdv}
                    setFdv={setFdv}
                    points={points}
                    setPoints={setPoints}
                    airdropPercentage={airdropPercentage}
                    setAirdropPercentage={setAirdropPercentage}
                    exchangeName={selectedExchange.name}
                />
                <EstimatedReturns
                    yourPoints={points}
                    calculations={calculations}
                />
            </div>
        </div>
    );
};

export default Calculator;
