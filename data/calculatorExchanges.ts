// data/calculatorExchanges.ts
export interface CalculatorExchange {
    id: string;
    name: string;
    totalPointsPool: number;
}

export const CALCULATOR_EXCHANGES_DATA: CalculatorExchange[] = [
    { id: 'lighter', name: 'Lighter', totalPointsPool: 12_000_000 },
    { id: 'pacifica', name: 'Pacifica', totalPointsPool: 24_000_000 },
    { id: 'extended', name: 'Extended', totalPointsPool: 50_000_000 },
    { id: 'edgex', name: 'EdgeX', totalPointsPool: 6_500_000 },
    { id: 'paradex', name: 'Paradex', totalPointsPool: 350_000_000 },
    { id: 'bullpen', name: 'Bullpen', totalPointsPool: 69_900_000 },
    { id: 'variational', name: 'Variational', totalPointsPool: 50_000_000 },
    { id: 'vest', name: 'Vest', totalPointsPool: 50_000_000 },
    { id: 'ostium', name: 'Ostium', totalPointsPool: 24_000_000 },
    { id: 'reya', name: 'Reya', totalPointsPool: 12_000_000 },
];