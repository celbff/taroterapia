import React, { useState } from 'react';
import { TarotSpread } from '../data/tarotSpreads';
import { TarotCard as TarotCardType, tarotCards } from '../data/tarotCards';
import TarotCard from './TarotCard';
import { Shuffle, Eye, RotateCcw } from 'lucide-react';

interface TarotReadingProps {
  spread: TarotSpread;
  onBack: () => void;
}

interface DrawnCard {
  card: TarotCardType;
  isReversed: boolean;
  isRevealed: boolean;
}

const TarotReading: React.FC<TarotReadingProps> = ({ spread, onBack }) => {
  const [drawnCards, setDrawnCards] = useState<DrawnCard[]>([]);
  const [isShuffling, setIsShuffling] = useState(false);
  const [allRevealed, setAllRevealed] = useState(false);

  const shuffleAndDraw = () => {
    setIsShuffling(true);
    
    setTimeout(() => {
      const shuffledCards = [...tarotCards].sort(() => Math.random() - 0.5);
      const cards = shuffledCards
        .slice(0, spread.positions.length)
        .map(card => ({
          card,
          isReversed: Math.random() < 0.3, // 30% chance de carta invertida
          isRevealed: false
        }));
      
      setDrawnCards(cards);
      setAllRevealed(false);
      setIsShuffling(false);
    }, 1500);
  };

  const revealCard = (index: number) => {
    setDrawnCards(prev => prev.map((drawnCard, i) => 
      i === index ? { ...drawnCard, isRevealed: true } : drawnCard
    ));
  };

  const revealAll = () => {
    setDrawnCards(prev => prev.map(card => ({ ...card, isRevealed: true })));
    setAllRevealed(true);
  };

  const reset = () => {
    setDrawnCards([]);
    setAllRevealed(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900">
      <div className="container mx-auto px-4 py-8">
        {/* Header da Consulta */}
        <div className="text-center mb-8">
          <button
            onClick={onBack}
            className="mb-4 px-6 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
          >
            ← Voltar
          </button>
          <h1 className="text-4xl font-bold text-white mb-2">{spread.name}</h1>
          <p className="text-purple-200 text-lg">{spread.description}</p>
        </div>

        {/* Controles */}
        <div className="flex justify-center space-x-4 mb-8">
          <button
            onClick={shuffleAndDraw}
            disabled={isShuffling}
            className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-semibold transition-all ${
              isShuffling
                ? 'bg-gray-600 cursor-not-allowed'
                : 'bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 hover:scale-105 shadow-lg'
            } text-white`}
          >
            <Shuffle className={`w-5 h-5 ${isShuffling ? 'animate-spin' : ''}`} />
            <span>{isShuffling ? 'Embaralhando...' : 'Embaralhar e Tirar Cartas'}</span>
          </button>

          {drawnCards.length > 0 && !allRevealed && (
            <button
              onClick={revealAll}
              className="flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-yellow-600 to-orange-600 text-white rounded-lg font-semibold hover:from-yellow-700 hover:to-orange-700 hover:scale-105 shadow-lg transition-all"
            >
              <Eye className="w-5 h-5" />
              <span>Revelar Todas</span>
            </button>
          )}

          {drawnCards.length > 0 && (
            <button
              onClick={reset}
              className="flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-gray-600 to-gray-700 text-white rounded-lg font-semibold hover:from-gray-700 hover:to-gray-800 hover:scale-105 shadow-lg transition-all"
            >
              <RotateCcw className="w-5 h-5" />
              <span>Nova Consulta</span>
            </button>
          )}
        </div>

        {/* Área das Cartas */}
        <div className="relative bg-gradient-to-br from-green-800 to-green-900 rounded-xl p-8 mb-8 min-h-[400px] border-4 border-yellow-600">
          {drawnCards.length === 0 ? (
            <div className="flex items-center justify-center h-full">
              <div className="text-center text-green-200">
                <div className="text-6xl mb-4">🌟</div>
                <p className="text-xl">Clique em "Embaralhar e Tirar Cartas" para começar sua consulta</p>
              </div>
            </div>
          ) : (
            spread.positions.map((position, index) => (
              <div key={position.id}>
                <TarotCard
                  card={drawnCards[index]?.card || null}
                  isRevealed={drawnCards[index]?.isRevealed || false}
                  isReversed={drawnCards[index]?.isReversed || false}
                  position={{ x: position.x, y: position.y }}
                  size="large"
                  onClick={() => !drawnCards[index]?.isRevealed && revealCard(index)}
                />
                {drawnCards[index]?.isRevealed && (
                  <div
                    className="absolute bg-black bg-opacity-80 text-white p-2 rounded text-xs max-w-[200px] z-10"
                    style={{
                      left: `${position.x}%`,
                      top: `${position.y + 12}%`,
                      transform: 'translateX(-50%)'
                    }}
                  >
                    <div className="font-bold mb-1">{position.name}</div>
                    <div className="text-xs text-gray-300">{position.meaning}</div>
                  </div>
                )}
              </div>
            ))
          )}
        </div>

        {/* Interpretações */}
        {allRevealed && drawnCards.length > 0 && (
          <div className="bg-white rounded-xl shadow-2xl p-8">
            <h2 className="text-3xl font-bold text-purple-900 mb-6 text-center">
              Interpretação da Sua Consulta
            </h2>
            <div className="space-y-6">
              {spread.positions.map((position, index) => {
                const drawnCard = drawnCards[index];
                if (!drawnCard) return null;

                return (
                  <div key={position.id} className="border-b border-purple-200 pb-6">
                    <div className="flex flex-col md:flex-row gap-4">
                      <div className="flex-shrink-0">
                        <TarotCard
                          card={drawnCard.card}
                          isRevealed={true}
                          isReversed={drawnCard.isReversed}
                          size="medium"
                        />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-purple-800 mb-2">
                          {position.name}: {drawnCard.card.name}
                          {drawnCard.isReversed && ' (Invertida)'}
                        </h3>
                        <p className="text-purple-600 mb-3 italic">
                          {position.meaning}
                        </p>
                        <div className="bg-purple-50 p-4 rounded-lg">
                          <p className="text-purple-800 leading-relaxed">
                            {drawnCard.isReversed 
                              ? drawnCard.card.meaningReversed 
                              : drawnCard.card.meaningUpright}
                          </p>
                        </div>
                        <div className="mt-3">
                          <div className="text-sm text-purple-600 font-semibold mb-1">
                            Palavras-chave:
                          </div>
                          <div className="flex flex-wrap gap-1">
                            {drawnCard.card.keywords.map((keyword, i) => (
                              <span
                                key={i}
                                className="px-2 py-1 bg-purple-100 text-purple-700 rounded-full text-xs"
                              >
                                {keyword}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Síntese Final */}
            <div className="mt-8 bg-gradient-to-r from-purple-100 to-pink-100 p-6 rounded-xl">
              <h3 className="text-2xl font-bold text-purple-900 mb-4 text-center">
                Mensagem Final
              </h3>
              <p className="text-purple-800 text-lg leading-relaxed text-center">
                As cartas revelam um momento importante em sua jornada. 
                Cada carta escolhida carrega uma mensagem especial para você. 
                Reflita sobre os significados apresentados e confie em sua intuição 
                para aplicar esses insights em sua vida. Lembre-se de que você é 
                o arquiteto do seu próprio destino.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default TarotReading;