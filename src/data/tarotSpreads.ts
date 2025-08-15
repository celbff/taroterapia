export interface TarotSpread {
  id: string;
  name: string;
  description: string;
  positions: {
    id: number;
    name: string;
    meaning: string;
    x: number;
    y: number;
  }[];
}

export const tarotSpreads: TarotSpread[] = [
  {
    id: 'single-card',
    name: 'Carta Única',
    description: 'Uma carta para orientação rápida sobre sua situação atual.',
    positions: [
      {
        id: 1,
        name: 'Sua Situação',
        meaning: 'Esta carta representa sua situação atual e a energia que a cerca.',
        x: 50,
        y: 50
      }
    ]
  },
  {
    id: 'three-cards',
    name: 'Três Cartas',
    description: 'Passado, presente e futuro ou situação, ação e resultado.',
    positions: [
      {
        id: 1,
        name: 'Passado/Situação',
        meaning: 'Influências do passado ou situação atual.',
        x: 20,
        y: 50
      },
      {
        id: 2,
        name: 'Presente/Ação',
        meaning: 'Situação presente ou ação a ser tomada.',
        x: 50,
        y: 50
      },
      {
        id: 3,
        name: 'Futuro/Resultado',
        meaning: 'Tendências futuras ou resultado provável.',
        x: 80,
        y: 50
      }
    ]
  },
  {
    id: 'celtic-cross',
    name: 'Cruz Céltica',
    description: 'A jogada mais completa do tarot, revelando todos os aspectos de sua situação.',
    positions: [
      {
        id: 1,
        name: 'Situação Presente',
        meaning: 'O coração da questão, sua situação atual.',
        x: 50,
        y: 50
      },
      {
        id: 2,
        name: 'Desafio/Cruz',
        meaning: 'Obstáculos ou influências cruzadas em seu caminho.',
        x: 50,
        y: 30
      },
      {
        id: 3,
        name: 'Passado Distante',
        meaning: 'Fundação da situação, influências de longo prazo.',
        x: 30,
        y: 50
      },
      {
        id: 4,
        name: 'Passado Recente',
        meaning: 'Eventos recentes que levaram à situação atual.',
        x: 50,
        y: 70
      },
      {
        id: 5,
        name: 'Possível Resultado',
        meaning: 'Um possível resultado se nada mudar.',
        x: 70,
        y: 50
      },
      {
        id: 6,
        name: 'Futuro Próximo',
        meaning: 'Tendências que se manifestarão no futuro próximo.',
        x: 50,
        y: 10
      },
      {
        id: 7,
        name: 'Sua Abordagem',
        meaning: 'Sua atitude atual em relação à situação.',
        x: 85,
        y: 70
      },
      {
        id: 8,
        name: 'Influências Externas',
        meaning: 'Como outros veem você ou influências do ambiente.',
        x: 85,
        y: 50
      },
      {
        id: 9,
        name: 'Esperanças e Medos',
        meaning: 'Seus sentimentos internos sobre a situação.',
        x: 85,
        y: 30
      },
      {
        id: 10,
        name: 'Resultado Final',
        meaning: 'O resultado final considerando todas as influências.',
        x: 85,
        y: 10
      }
    ]
  },
  {
    id: 'love-spread',
    name: 'Jogada do Amor',
    description: 'Especial para questões amorosas e relacionamentos.',
    positions: [
      {
        id: 1,
        name: 'Você no Relacionamento',
        meaning: 'Suas energias e atitudes no relacionamento.',
        x: 30,
        y: 30
      },
      {
        id: 2,
        name: 'Seu Parceiro',
        meaning: 'As energias e atitudes do seu parceiro.',
        x: 70,
        y: 30
      },
      {
        id: 3,
        name: 'O Relacionamento',
        meaning: 'A dinâmica entre vocês dois.',
        x: 50,
        y: 50
      },
      {
        id: 4,
        name: 'Desafios',
        meaning: 'Obstáculos que o relacionamento enfrenta.',
        x: 20,
        y: 70
      },
      {
        id: 5,
        name: 'Potencial',
        meaning: 'Para onde o relacionamento pode ir.',
        x: 80,
        y: 70
      },
      {
        id: 6,
        name: 'Conselho',
        meaning: 'Orientação para fortalecer o relacionamento.',
        x: 50,
        y: 85
      }
    ]
  }
];