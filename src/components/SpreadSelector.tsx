import React from 'react';
import { TarotSpread } from '../data/tarotSpreads';

interface SpreadSelectorProps {
  spreads: TarotSpread[];
  selectedSpread: TarotSpread | null;
  onSpreadSelect: (spread: TarotSpread) => void;
}

const SpreadSelector: React.FC<SpreadSelectorProps> = ({
  spreads,
  selectedSpread,
  onSpreadSelect
}) => {
  return (
    <div className="bg-gradient-to-br from-purple-100 to-indigo-100 rounded-lg p-6 mb-8">
      <h2 className="text-2xl font-bold text-purple-900 mb-4 text-center">
        Escolha o Tipo de Consulta
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {spreads.map((spread) => (
          <button
            key={spread.id}
            onClick={() => onSpreadSelect(spread)}
            className={`p-4 rounded-lg border-2 transition-all duration-300 ${
              selectedSpread?.id === spread.id
                ? 'border-purple-600 bg-purple-200 shadow-lg transform scale-105'
                : 'border-purple-300 bg-white hover:border-purple-500 hover:shadow-md hover:transform hover:scale-102'
            }`}
          >
            <div className="text-lg font-semibold text-purple-900 mb-2">
              {spread.name}
            </div>
            <div className="text-sm text-purple-700 leading-relaxed">
              {spread.description}
            </div>
            <div className="text-xs text-purple-600 mt-2">
              {spread.positions.length} carta{spread.positions.length > 1 ? 's' : ''}
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default SpreadSelector;