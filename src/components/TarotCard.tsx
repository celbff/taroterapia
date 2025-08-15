import React from 'react';
import { TarotCard as TarotCardType } from '../data/tarotCards';

interface TarotCardProps {
  card: TarotCardType | null;
  isRevealed: boolean;
  isReversed: boolean;
  position?: { x: number; y: number };
  size?: 'small' | 'medium' | 'large';
  onClick?: () => void;
}

const TarotCard: React.FC<TarotCardProps> = ({
  card,
  isRevealed,
  isReversed,
  position,
  size = 'medium',
  onClick
}) => {
  const sizeClasses = {
    small: 'w-16 h-24',
    medium: 'w-20 h-32',
    large: 'w-32 h-48'
  };

  const cardStyle = position ? {
    position: 'absolute' as const,
    left: `${position.x}%`,
    top: `${position.y}%`,
    transform: 'translate(-50%, -50%)'
  } : {};

  return (
    <div
      className={`${sizeClasses[size]} cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-2xl`}
      style={cardStyle}
      onClick={onClick}
    >
      <div className={`w-full h-full rounded-lg border-2 border-gold-400 shadow-lg transform ${
        isReversed ? 'rotate-180' : ''
      } transition-all duration-500`}>
        {!isRevealed ? (
          <div className="w-full h-full bg-gradient-to-br from-purple-800 via-indigo-900 to-blue-900 rounded-lg flex items-center justify-center">
            <div className="text-center">
              <div className="w-8 h-8 mx-auto mb-2 bg-gradient-to-r from-yellow-400 to-pink-400 rounded-full flex items-center justify-center">
                <span className="text-purple-900 font-bold text-xs">✦</span>
              </div>
              <div className="text-xs text-yellow-400 font-mystical">TAROT</div>
            </div>
          </div>
        ) : card ? (
          <div className="w-full h-full bg-gradient-to-br from-amber-100 to-amber-200 rounded-lg p-2 flex flex-col">
            <div className="text-xs font-bold text-purple-900 text-center mb-1 leading-tight">
              {card.name}
            </div>
            <div 
              className="flex-1 bg-cover bg-center rounded border"
              style={{ backgroundImage: `url(${card.image})` }}
            />
            <div className="text-xs text-purple-800 text-center mt-1">
              {card.arcana === 'major' ? 'Arcano Maior' : `${card.suit?.toUpperCase()}`}
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default TarotCard;