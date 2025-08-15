import React, { useState } from 'react';
import Header from './components/Header';
import SpreadSelector from './components/SpreadSelector';
import TarotReading from './components/TarotReading';
import CardMeanings from './components/CardMeanings';
import Horoscope from './components/Horoscope';
import Numerology from './components/Numerology';
import PersonalArcanum from './components/PersonalArcanum';
import { tarotSpreads } from './data/tarotSpreads';
import { TarotSpread } from './data/tarotSpreads';

type AppView = 'home' | 'reading' | 'meanings' | 'horoscope' | 'numerology' | 'arcanum';

function App() {
  const [currentView, setCurrentView] = useState<AppView>('home');
  const [selectedSpread, setSelectedSpread] = useState<TarotSpread | null>(null);

  const handleSpreadSelect = (spread: TarotSpread) => {
    setSelectedSpread(spread);
    setCurrentView('reading');
  };

  const handleBackToHome = () => {
    setCurrentView('home');
    setSelectedSpread(null);
  };

  const showMeanings = () => {
    setCurrentView('meanings');
  };

  const handleNavigate = (section: string) => {
    switch (section) {
      case 'home':
        setCurrentView('home');
        setSelectedSpread(null);
        break;
      case 'meanings':
        setCurrentView('meanings');
        break;
      case 'horoscope':
        setCurrentView('horoscope');
        break;
      case 'numerology':
        setCurrentView('numerology');
        break;
      case 'arcanum':
        setCurrentView('arcanum');
        break;
    }
  };

  if (currentView === 'reading' && selectedSpread) {
    return <TarotReading spread={selectedSpread} onBack={handleBackToHome} />;
  }

  if (currentView === 'meanings') {
    return <CardMeanings onBack={handleBackToHome} />;
  }

  if (currentView === 'horoscope') {
    return <Horoscope onBack={handleBackToHome} />;
  }

  if (currentView === 'numerology') {
    return <Numerology onBack={handleBackToHome} />;
  }

  if (currentView === 'arcanum') {
    return <PersonalArcanum onBack={handleBackToHome} />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-100">
      <Header onNavigate={handleNavigate} />
      
      <main className="container mx-auto px-4 py-8">
        {/* Seção Principal */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-purple-900 mb-4">
            Bem-vindo ao Mundo Místico do Tarot
          </h2>
          <p className="text-lg text-purple-700 max-w-2xl mx-auto leading-relaxed">
            Descubra os segredos do seu destino através das antigas cartas do tarot. 
            Nossa consulta online oferece interpretações precisas e orientação espiritual 
            para iluminar seu caminho.
          </p>
        </div>

        {/* Botões de Navegação */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          <button
            onClick={() => handleNavigate('arcanum')}
            className="px-8 py-4 bg-gradient-to-r from-yellow-600 to-orange-600 text-white rounded-xl font-semibold text-lg hover:from-yellow-700 hover:to-orange-700 hover:scale-105 transform transition-all shadow-lg"
          >
            🌟 Arcano Pessoal
          </button>
          <button
            onClick={showMeanings}
            className="px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-xl font-semibold text-lg hover:from-indigo-700 hover:to-purple-700 hover:scale-105 transform transition-all shadow-lg"
          >
            📚 Consultar Significados
          </button>
          <button 
            onClick={() => handleNavigate('horoscope')}
            className="px-8 py-4 bg-gradient-to-r from-pink-600 to-rose-600 text-white rounded-xl font-semibold text-lg hover:from-pink-700 hover:to-rose-700 hover:scale-105 transform transition-all shadow-lg"
          >
            🔮 Horóscopo Diário
          </button>
          <button 
            onClick={() => handleNavigate('numerology')}
            className="px-8 py-4 bg-gradient-to-r from-emerald-600 to-teal-600 text-white rounded-xl font-semibold text-lg hover:from-emerald-700 hover:to-teal-700 hover:scale-105 transform transition-all shadow-lg"
          >
            ✨ Numerologia
          </button>
        </div>

        {/* Seletor de Jogadas */}
        <SpreadSelector
          spreads={tarotSpreads}
          selectedSpread={selectedSpread}
          onSpreadSelect={handleSpreadSelect}
        />

        {/* Seção Informativa */}
        <div className="grid md:grid-cols-3 gap-8 mt-12">
          <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
            <div className="text-4xl mb-4 text-center">🌟</div>
            <h3 className="text-xl font-bold text-purple-900 mb-3 text-center">
              Consultas Precisas
            </h3>
            <p className="text-purple-700 text-center leading-relaxed">
              Interpretações detalhadas baseadas em séculos de tradição esotérica, 
              oferecendo insights profundos sobre sua vida.
            </p>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
            <div className="text-4xl mb-4 text-center">🔮</div>
            <h3 className="text-xl font-bold text-purple-900 mb-3 text-center">
              Diferentes Jogadas
            </h3>
            <p className="text-purple-700 text-center leading-relaxed">
              Escolha entre várias modalidades de consulta, desde a carta única 
              até a complexa Cruz Céltica, adaptando-se às suas necessidades.
            </p>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
            <div className="text-4xl mb-4 text-center">✨</div>
            <h3 className="text-xl font-bold text-purple-900 mb-3 text-center">
              Orientação Espiritual
            </h3>
            <p className="text-purple-700 text-center leading-relaxed">
              Encontre direcionamento espiritual e clareza mental para tomar 
              decisões importantes em sua jornada de vida.
            </p>
          </div>
        </div>

        {/* Rodapé da Página Principal */}
        <footer className="mt-16 text-center">
          <div className="bg-gradient-to-r from-purple-900 to-indigo-900 rounded-xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              🌙 Conecte-se com sua Intuição 🌙
            </h3>
            <p className="text-purple-200 mb-6 max-w-2xl mx-auto">
              O tarot é uma ferramenta ancestral de autoconhecimento e orientação espiritual. 
              Permita que as cartas revelem os caminhos ocultos do seu destino e encontre 
              as respostas que sua alma busca.
            </p>
            <div className="text-sm text-purple-300">
              ✨ Taroterapia Online - Consultas gratuitas disponíveis 24h ✨
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}

export default App;