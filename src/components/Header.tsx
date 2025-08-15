import React from 'react';
import { Star, Moon, Sun } from 'lucide-react';

interface HeaderProps {
  onNavigate?: (section: string) => void;
}

const Header: React.FC<HeaderProps> = ({ onNavigate }) => {
  return (
    <header className="bg-gradient-to-r from-purple-900 via-indigo-900 to-blue-900 text-white">
      <div className="container mx-auto px-4 py-6">
        <div className="flex items-center justify-center space-x-4">
          <Star className="w-8 h-8 text-yellow-400" />
          <h1 className="text-4xl font-bold bg-gradient-to-r from-yellow-400 to-pink-400 bg-clip-text text-transparent">
            Taroterapia Online
          </h1>
          <Moon className="w-8 h-8 text-blue-300" />
        </div>
        <p className="text-center mt-3 text-lg text-purple-200">
          Consulte as cartas e descubra os mistérios do seu destino
        </p>
      </div>
      <div className="bg-black bg-opacity-20 border-t border-purple-500">
        <div className="container mx-auto px-4 py-3">
          <nav className="flex justify-center space-x-8">
            <button 
              onClick={() => onNavigate?.('home')}
              className="text-white hover:text-yellow-400 transition-colors font-medium"
            >
              Consulta Gratuita
            </button>
            <button 
              onClick={() => onNavigate?.('arcanum')}
              className="text-white hover:text-yellow-400 transition-colors font-medium"
            >
              Arcano Pessoal
            </button>
            <button 
              onClick={() => onNavigate?.('meanings')}
              className="text-white hover:text-yellow-400 transition-colors font-medium"
            >
              Significados
            </button>
            <button 
              onClick={() => onNavigate?.('horoscope')}
              className="text-white hover:text-yellow-400 transition-colors font-medium"
            >
              Horóscopo
            </button>
            <button 
              onClick={() => onNavigate?.('numerology')}
              className="text-white hover:text-yellow-400 transition-colors font-medium"
            >
              Numerologia
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;