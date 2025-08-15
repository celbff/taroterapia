export interface TarotCard {
  id: number;
  name: string;
  arcana: 'major' | 'minor';
  suit?: 'cups' | 'pentacles' | 'swords' | 'wands';
  number?: number;
  keywords: string[];
  meaningUpright: string;
  meaningReversed: string;
  description: string;
  image: string;
}

export const tarotCards: TarotCard[] = [
  // Arcanos Maiores
  {
    id: 0,
    name: 'O Louco',
    arcana: 'major',
    keywords: ['novo começo', 'aventura', 'espontaneidade', 'inocência'],
    meaningUpright: 'Representa novos começos, aventura, potencial ilimitado e um salto de fé. É hora de confiar no universo e seguir seu coração.',
    meaningReversed: 'Imprudência, falta de direção, decisões precipitadas ou medo de dar o próximo passo.',
    description: 'O Louco simboliza o início de uma jornada espiritual, representando a alma pura antes de ganhar experiência no mundo.',
    image: 'https://images.pexels.com/photos/6985001/pexels-photo-6985001.jpeg'
  },
  {
    id: 1,
    name: 'O Mago',
    arcana: 'major',
    keywords: ['manifestação', 'poder pessoal', 'habilidade', 'concentração'],
    meaningUpright: 'Você tem o poder e as habilidades necessárias para alcançar seus objetivos. É hora de agir com confiança e determinação.',
    meaningReversed: 'Manipulação, falta de energia, talentos desperdiçados ou ilusões sobre suas capacidades.',
    description: 'O Mago representa o poder de manifestação e a habilidade de transformar ideias em realidade através da vontade focada.',
    image: 'https://images.pexels.com/photos/6985002/pexels-photo-6985002.jpeg'
  },
  {
    id: 2,
    name: 'A Sacerdotisa',
    arcana: 'major',
    keywords: ['intuição', 'sabedoria interior', 'mistério', 'subconsciente'],
    meaningUpright: 'Confie em sua intuição e sabedoria interior. Há conhecimento oculto disponível para você se souber como acessá-lo.',
    meaningReversed: 'Desconexão da intuição, superficialidade, falta de compreensão interior.',
    description: 'A Sacerdotisa é a guardiã dos mistérios ocultos e representa a sabedoria que vem de dentro.',
    image: 'https://images.pexels.com/photos/6985003/pexels-photo-6985003.jpeg'
  },
  {
    id: 3,
    name: 'A Imperatriz',
    arcana: 'major',
    keywords: ['fertilidade', 'feminilidade', 'abundância', 'criatividade'],
    meaningUpright: 'Abundância, criatividade e fertilidade em todas as áreas da vida. Momento de crescimento e prosperidade.',
    meaningReversed: 'Bloqueios criativos, dependência excessiva dos outros, falta de autoestima.',
    description: 'A Imperatriz representa a energia feminina criativa e a abundância da natureza.',
    image: 'https://images.pexels.com/photos/6985004/pexels-photo-6985004.jpeg'
  },
  {
    id: 4,
    name: 'O Imperador',
    arcana: 'major',
    keywords: ['autoridade', 'estrutura', 'controle', 'paternidade'],
    meaningUpright: 'Liderança, autoridade e estrutura são necessárias. É hora de assumir o controle e estabelecer ordem.',
    meaningReversed: 'Abuso de poder, rigidez excessiva, falta de disciplina ou autoridade.',
    description: 'O Imperador representa a autoridade masculina, estrutura e o poder de criar ordem do caos.',
    image: 'https://images.pexels.com/photos/6985005/pexels-photo-6985005.jpeg'
  },
  {
    id: 5,
    name: 'O Hierofante',
    arcana: 'major',
    keywords: ['tradição', 'educação', 'conformidade', 'instituições'],
    meaningUpright: 'Busque orientação em tradições estabelecidas e ensinamentos espirituais. Aprendizado através de instituições.',
    meaningReversed: 'Rebelião contra convenções, dogmatismo excessivo ou rejeição de conselhos sábios.',
    description: 'O Hierofante é o professor espiritual que transmite conhecimento sagrado através de instituições tradicionais.',
    image: 'https://images.pexels.com/photos/6985006/pexels-photo-6985006.jpeg'
  },
  {
    id: 6,
    name: 'Os Amantes',
    arcana: 'major',
    keywords: ['amor', 'relacionamentos', 'escolhas', 'harmonia'],
    meaningUpright: 'Amor verdadeiro, parcerias harmoniosas e escolhas importantes sobre relacionamentos.',
    meaningReversed: 'Desarmonia nos relacionamentos, escolhas difíceis ou falta de comprometimento.',
    description: 'Os Amantes representam a união sagrada e as escolhas que fazemos sobre amor e relacionamentos.',
    image: 'https://images.pexels.com/photos/6985007/pexels-photo-6985007.jpeg'
  },
  {
    id: 7,
    name: 'O Carro',
    arcana: 'major',
    keywords: ['determinação', 'controle', 'vitória', 'direção'],
    meaningUpright: 'Determinação, controle e movimento em direção ao sucesso. Você está no comando de sua vida.',
    meaningReversed: 'Falta de controle, direção perdida ou obstáculos que impedem o progresso.',
    description: 'O Carro simboliza a determinação e o controle necessários para alcançar objetivos.',
    image: 'https://images.pexels.com/photos/6985008/pexels-photo-6985008.jpeg'
  },
  {
    id: 8,
    name: 'A Força',
    arcana: 'major',
    keywords: ['força interior', 'coragem', 'paciência', 'autocontrole'],
    meaningUpright: 'Força interior, coragem e a capacidade de superar desafios através da paciência e autocontrole.',
    meaningReversed: 'Fraqueza interior, falta de confiança, impaciência ou abuso de poder.',
    description: 'A Força representa o poder que vem de dentro, a coragem de enfrentar desafios com compaixão.',
    image: 'https://images.pexels.com/photos/6985009/pexels-photo-6985009.jpeg'
  },
  {
    id: 9,
    name: 'O Eremita',
    arcana: 'major',
    keywords: ['introspecção', 'busca interior', 'sabedoria', 'solidão'],
    meaningUpright: 'Momento de introspecção e busca interior. A sabedoria vem através da contemplação silenciosa.',
    meaningReversed: 'Isolamento excessivo, recusa a buscar orientação ou perda de direção espiritual.',
    description: 'O Eremita representa a jornada interior em busca da verdade e iluminação espiritual.',
    image: 'https://images.pexels.com/photos/6985010/pexels-photo-6985010.jpeg'
  },
  {
    id: 10,
    name: 'A Roda da Fortuna',
    arcana: 'major',
    keywords: ['destino', 'mudança', 'ciclos', 'sorte'],
    meaningUpright: 'Mudanças positivas, boa sorte e o início de um novo ciclo de prosperidade.',
    meaningReversed: 'Má sorte, resistência à mudança ou ciclos negativos que precisam ser quebrados.',
    description: 'A Roda da Fortuna representa os ciclos da vida e o papel do destino em nossas experiências.',
    image: 'https://images.pexels.com/photos/6985011/pexels-photo-6985011.jpeg'
  },
  {
    id: 11,
    name: 'A Justiça',
    arcana: 'major',
    keywords: ['justiça', 'equilíbrio', 'verdade', 'responsabilidade'],
    meaningUpright: 'Justiça será feita, decisões justas e equilibrio. Você colherá o que plantou.',
    meaningReversed: 'Injustiça, desequilibrio, decisões parciais ou falta de responsabilidade.',
    description: 'A Justiça representa a lei cármica e a necessidade de equilibrio e verdade em nossas ações.',
    image: 'https://images.pexels.com/photos/6985012/pexels-photo-6985012.jpeg'
  },
  {
    id: 12,
    name: 'O Pendurado',
    arcana: 'major',
    keywords: ['sacrifício', 'perspectiva', 'pausa', 'entrega'],
    meaningUpright: 'Momento de pausa e reflexão. Sacrifícios necessários para ganhar nova perspectiva.',
    meaningReversed: 'Resistência à mudança, sacrifícios desnecessários ou falta de perspectiva.',
    description: 'O Pendurado representa a necessidade de mudar de perspectiva através da entrega e sacrifício.',
    image: 'https://images.pexels.com/photos/6985013/pexels-photo-6985013.jpeg'
  },
  {
    id: 13,
    name: 'A Morte',
    arcana: 'major',
    keywords: ['transformação', 'fim', 'renascimento', 'mudança'],
    meaningUpright: 'Transformação profunda, fim de um ciclo e o início de algo novo. Renascimento espiritual.',
    meaningReversed: 'Resistência à mudança, medo de transformação ou transformações incompletas.',
    description: 'A Morte representa transformação e renascimento, não a morte física, mas mudanças profundas.',
    image: 'https://images.pexels.com/photos/6985014/pexels-photo-6985014.jpeg'
  },
  {
    id: 14,
    name: 'A Temperança',
    arcana: 'major',
    keywords: ['moderação', 'equilíbrio', 'paciência', 'harmonia'],
    meaningUpright: 'Moderação, paciência e a busca pelo equilibrio. Combinação harmoniosa de elementos opostos.',
    meaningReversed: 'Excessos, impaciência, falta de equilibrio ou conflitos internos.',
    description: 'A Temperança representa a necessidade de moderação e equilibrio em todas as áreas da vida.',
    image: 'https://images.pexels.com/photos/6985015/pexels-photo-6985015.jpeg'
  },
  {
    id: 15,
    name: 'O Diabo',
    arcana: 'major',
    keywords: ['tentação', 'materialismo', 'vícios', 'ilusão'],
    meaningUpright: 'Tentações materiais, vícios ou situações que limitam sua liberdade espiritual.',
    meaningReversed: 'Libertação de vícios, superação de tentações ou quebra de correntes limitantes.',
    description: 'O Diabo representa as ilusões materiais e os vícios que nos prendem e limitam nosso crescimento.',
    image: 'https://images.pexels.com/photos/6985016/pexels-photo-6985016.jpeg'
  },
  {
    id: 16,
    name: 'A Torre',
    arcana: 'major',
    keywords: ['mudança súbita', 'revelação', 'destruição', 'libertação'],
    meaningUpright: 'Mudanças súbitas e necessárias. Destruição de estruturas antigas para dar lugar ao novo.',
    meaningReversed: 'Resistência à mudança necessária, evitação de verdades dolorosas.',
    description: 'A Torre representa mudanças súbitas e necessárias que destroem o antigo para construir o novo.',
    image: 'https://images.pexels.com/photos/6985017/pexels-photo-6985017.jpeg'
  },
  {
    id: 17,
    name: 'A Estrela',
    arcana: 'major',
    keywords: ['esperança', 'inspiração', 'orientação', 'espiritualidade'],
    meaningUpright: 'Esperança renovada, inspiração espiritual e orientação divina iluminando seu caminho.',
    meaningReversed: 'Perda de fé, desânimo, falta de inspiração ou desconexão espiritual.',
    description: 'A Estrela representa esperança, inspiração e a orientação espiritual que nos guia.',
    image: 'https://images.pexels.com/photos/6985018/pexels-photo-6985018.jpeg'
  },
  {
    id: 18,
    name: 'A Lua',
    arcana: 'major',
    keywords: ['ilusão', 'intuição', 'subconsciente', 'mistério'],
    meaningUpright: 'Ilusões, medos subconscientes e a necessidade de confiar em sua intuição em tempos incertos.',
    meaningReversed: 'Superação de ilusões, clareza mental ou libertação de medos subconscientes.',
    description: 'A Lua representa o reino do subconsciente, ilusões e a necessidade de navegar pela incerteza.',
    image: 'https://images.pexels.com/photos/6985019/pexels-photo-6985019.jpeg'
  },
  {
    id: 19,
    name: 'O Sol',
    arcana: 'major',
    keywords: ['sucesso', 'vitalidade', 'alegria', 'iluminação'],
    meaningUpright: 'Sucesso, alegria, vitalidade e iluminação. Momento de celebração e realização.',
    meaningReversed: 'Falta de energia, pessimismo ou dificuldade em ver o lado positivo das situações.',
    description: 'O Sol representa sucesso, vitalidade e a alegria que vem da realização pessoal.',
    image: 'https://images.pexels.com/photos/6985020/pexels-photo-6985020.jpeg'
  },
  {
    id: 20,
    name: 'O Julgamento',
    arcana: 'major',
    keywords: ['renascimento', 'despertar', 'perdão', 'chamado'],
    meaningUpright: 'Renascimento espiritual, despertar para um novo propósito e o chamado para uma vida superior.',
    meaningReversed: 'Julgamento severo de si mesmo, resistência ao chamado espiritual.',
    description: 'O Julgamento representa o despertar espiritual e o chamado para uma existência mais elevada.',
    image: 'https://images.pexels.com/photos/6985021/pexels-photo-6985021.jpeg'
  },
  {
    id: 21,
    name: 'O Mundo',
    arcana: 'major',
    keywords: ['realização', 'completude', 'sucesso', 'integração'],
    meaningUpright: 'Realização completa, sucesso em todos os níveis e integração de todas as experiências de vida.',
    meaningReversed: 'Falta de encerramento, objetivos incompletos ou dificuldade em integrar experiências.',
    description: 'O Mundo representa a completude da jornada espiritual e a realização de todos os potenciais.',
    image: 'https://images.pexels.com/photos/6985022/pexels-photo-6985022.jpeg'
  },
  // Arcanos Menores - Copas
  {
    id: 22,
    name: 'Ás de Copas',
    arcana: 'minor',
    suit: 'cups',
    number: 1,
    keywords: ['novo amor', 'emoções', 'intuição', 'espiritualidade'],
    meaningUpright: 'Início de um novo amor ou renovação emocional. Abertura do coração e conexão espiritual.',
    meaningReversed: 'Bloqueios emocionais, amor não correspondido ou dificuldades espirituais.',
    description: 'O Ás de Copas representa o início de experiências emocionais profundas e conexões espirituais.',
    image: 'https://images.pexels.com/photos/6985023/pexels-photo-6985023.jpeg'
  },
  {
    id: 23,
    name: 'Dois de Copas',
    arcana: 'minor',
    suit: 'cups',
    number: 2,
    keywords: ['parceria', 'união', 'amor mútuo', 'harmonia'],
    meaningUpright: 'União harmoniosa, parceria amorosa ou amizade profunda. Conexão emocional equilibrada.',
    meaningReversed: 'Desentendimentos, separação ou desequilíbrio emocional em relacionamentos.',
    description: 'O Dois de Copas simboliza a união perfeita entre duas pessoas em amor ou amizade.',
    image: 'https://images.pexels.com/photos/6985024/pexels-photo-6985024.jpeg'
  },
  {
    id: 24,
    name: 'Três de Copas',
    arcana: 'minor',
    suit: 'cups',
    number: 3,
    keywords: ['celebração', 'amizade', 'comunidade', 'alegria'],
    meaningUpright: 'Celebração com amigos, alegria compartilhada e senso de comunidade.',
    meaningReversed: 'Isolamento social, fofocas ou conflitos entre amigos.',
    description: 'O Três de Copas representa a alegria da amizade e celebrações em grupo.',
    image: 'https://images.pexels.com/photos/6985025/pexels-photo-6985025.jpeg'
  },
  // Arcanos Menores - Espadas
  {
    id: 25,
    name: 'Ás de Espadas',
    arcana: 'minor',
    suit: 'swords',
    number: 1,
    keywords: ['clareza mental', 'verdade', 'justiça', 'novo pensamento'],
    meaningUpright: 'Clareza mental, descoberta da verdade e novos insights. Momento de justiça.',
    meaningReversed: 'Confusão mental, injustiça ou uso inadequado do poder intelectual.',
    description: 'O Ás de Espadas representa o poder da mente clara e a busca pela verdade.',
    image: 'https://images.pexels.com/photos/6985026/pexels-photo-6985026.jpeg'
  },
  {
    id: 26,
    name: 'Dois de Espadas',
    arcana: 'minor',
    suit: 'swords',
    number: 2,
    keywords: ['indecisão', 'bloqueio', 'escolha difícil', 'impasse'],
    meaningUpright: 'Indecisão, necessidade de fazer uma escolha difícil ou impasse mental.',
    meaningReversed: 'Decisão tomada, fim do bloqueio ou escolha baseada em emoções.',
    description: 'O Dois de Espadas simboliza momentos de indecisão e a necessidade de escolher.',
    image: 'https://images.pexels.com/photos/6985027/pexels-photo-6985027.jpeg'
  },
  // Arcanos Menores - Paus
  {
    id: 27,
    name: 'Ás de Paus',
    arcana: 'minor',
    suit: 'wands',
    number: 1,
    keywords: ['novo projeto', 'inspiração', 'energia criativa', 'potencial'],
    meaningUpright: 'Novo projeto ou empreendimento, inspiração criativa e energia para começar.',
    meaningReversed: 'Falta de direção, projetos abandonados ou energia criativa bloqueada.',
    description: 'O Ás de Paus representa o início de novos projetos e a energia criativa.',
    image: 'https://images.pexels.com/photos/6985028/pexels-photo-6985028.jpeg'
  },
  {
    id: 28,
    name: 'Dois de Paus',
    arcana: 'minor',
    suit: 'wands',
    number: 2,
    keywords: ['planejamento', 'futuro', 'decisões', 'poder pessoal'],
    meaningUpright: 'Planejamento para o futuro, tomada de decisões importantes e poder pessoal.',
    meaningReversed: 'Falta de planejamento, medo do futuro ou decisões precipitadas.',
    description: 'O Dois de Paus simboliza o planejamento e as decisões sobre o futuro.',
    image: 'https://images.pexels.com/photos/6985029/pexels-photo-6985029.jpeg'
  },
  // Arcanos Menores - Ouros
  {
    id: 29,
    name: 'Ás de Ouros',
    arcana: 'minor',
    suit: 'pentacles',
    number: 1,
    keywords: ['nova oportunidade', 'prosperidade', 'manifestação', 'abundância'],
    meaningUpright: 'Nova oportunidade financeira, prosperidade e manifestação material.',
    meaningReversed: 'Oportunidade perdida, problemas financeiros ou materialismo excessivo.',
    description: 'O Ás de Ouros representa novas oportunidades de prosperidade e abundância.',
    image: 'https://images.pexels.com/photos/6985030/pexels-photo-6985030.jpeg'
  },
  {
    id: 30,
    name: 'Dois de Ouros',
    arcana: 'minor',
    suit: 'pentacles',
    number: 2,
    keywords: ['equilíbrio', 'adaptabilidade', 'múltiplas tarefas', 'flexibilidade'],
    meaningUpright: 'Equilíbrio entre diferentes áreas da vida, adaptabilidade e flexibilidade.',
    meaningReversed: 'Desequilíbrio, sobrecarga ou dificuldade em gerenciar múltiplas responsabilidades.',
    description: 'O Dois de Ouros simboliza a necessidade de equilibrar diferentes aspectos da vida.',
    image: 'https://images.pexels.com/photos/6985031/pexels-photo-6985031.jpeg'
  }
];