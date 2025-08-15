import React, { useState } from 'react';
import { tarotCards } from '../data/tarotCards';
import TarotCard from './TarotCard';
import { Search, Filter } from 'lucide-react';

interface CardMeaningsProps {
  onBack: () => void;
}

const CardMeanings: React.FC<CardMeaningsProps> = ({ onBack }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filter, setFilter] = useState<'all' | 'major' | 'minor'>('all');
  const [selectedCard, setSelectedCard] = useState<number | null>(null);

  const filteredCards = tarotCards.filter(card => {
    const matchesSearch = card.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = filter === 'all' || card.arcana === filter;
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-indigo-100">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <button
            onClick={onBack}
            className="mb-4 px-6 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
          >
            ← Voltar
          </button>
          <h1 className="text-4xl font-bold text-purple-900 mb-4">
            Significados das Cartas
          </h1>
          <p className="text-purple-700 text-lg">
            Explore os significados profundos de cada carta do tarot
          </p>
        </div>

        {/* Filtros e Busca */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Buscar carta..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              />
            </div>
            <div className="flex items-center space-x-2">
              <Filter className="w-5 h-5 text-gray-600" />
              <select
                value={filter}
                onChange={(e) => setFilter(e.target.value as 'all' | 'major' | 'minor')}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              >
                <option value="all">Todas as Cartas</option>
                <option value="major">Arcanos Maiores</option>
                <option value="minor">Arcanos Menores</option>
              </select>
            </div>
          </div>
        </div>

        {/* Grid de Cartas */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-4 mb-8">
          {filteredCards.map((card, index) => (
            <div key={card.id} className="text-center">
              <TarotCard
                card={card}
                isRevealed={true}
                isReversed={false}
                size="medium"
                onClick={() => setSelectedCard(selectedCard === index ? null : index)}
              />
              <p className="text-sm text-purple-800 mt-2 font-medium">
                {card.name}
              </p>
            </div>
          ))}
        </div>

        {/* Detalhes da Carta Selecionada */}
        {selectedCard !== null && (
          <div className="bg-white rounded-xl shadow-2xl p-8">
            <div className="flex flex-col lg:flex-row gap-8">
              {/* Carta */}
              <div className="flex-shrink-0 text-center">
                <TarotCard
                  card={filteredCards[selectedCard]}
                  isRevealed={true}
                  isReversed={false}
                  size="large"
                />
                <h2 className="text-2xl font-bold text-purple-900 mt-4">
                  {filteredCards[selectedCard].name}
                </h2>
                <p className="text-purple-600 text-lg">
                  {filteredCards[selectedCard].arcana === 'major' 
                    ? 'Arcano Maior' 
                    : `${filteredCards[selectedCard].suit?.toUpperCase()} - Arcano Menor`}
                </p>
              </div>

              {/* Detalhes */}
              <div className="flex-1">
                <div className="space-y-6">
                  {/* Descrição */}
                  <div>
                    <h3 className="text-xl font-bold text-purple-800 mb-3">
                      Descrição
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      {filteredCards[selectedCard].description}
                    </p>
                  </div>

                  {/* Palavras-chave */}
                  <div>
                    <h3 className="text-xl font-bold text-purple-800 mb-3">
                      Palavras-chave
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {filteredCards[selectedCard].keywords.map((keyword, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm font-medium"
                        >
                          {keyword}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Significados */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-green-50 p-4 rounded-lg">
                      <h4 className="text-lg font-bold text-green-800 mb-2 flex items-center">
                        <span className="mr-2">⬆️</span>
                        Posição Normal
                      </h4>
                      <p className="text-green-700 leading-relaxed">
                        {filteredCards[selectedCard].meaningUpright}
                      </p>
                    </div>
                    <div className="bg-orange-50 p-4 rounded-lg">
                      <h4 className="text-lg font-bold text-orange-800 mb-2 flex items-center">
                        <span className="mr-2">⬇️</span>
                        Posição Invertida
                      </h4>
                      <p className="text-orange-700 leading-relaxed">
                        {filteredCards[selectedCard].meaningReversed}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CardMeanings;