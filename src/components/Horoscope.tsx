import React, { useState } from 'react';
import { Star, Calendar, Heart, Briefcase, DollarSign } from 'lucide-react';

interface HoroscopeProps {
  onBack: () => void;
}

const zodiacSigns = [
  { name: 'Áries', dates: '21/03 - 19/04', element: 'Fogo', icon: '♈' },
  { name: 'Touro', dates: '20/04 - 20/05', element: 'Terra', icon: '♉' },
  { name: 'Gêmeos', dates: '21/05 - 20/06', element: 'Ar', icon: '♊' },
  { name: 'Câncer', dates: '21/06 - 22/07', element: 'Água', icon: '♋' },
  { name: 'Leão', dates: '23/07 - 22/08', element: 'Fogo', icon: '♌' },
  { name: 'Virgem', dates: '23/08 - 22/09', element: 'Terra', icon: '♍' },
  { name: 'Libra', dates: '23/09 - 22/10', element: 'Ar', icon: '♎' },
  { name: 'Escorpião', dates: '23/10 - 21/11', element: 'Água', icon: '♏' },
  { name: 'Sagitário', dates: '22/11 - 21/12', element: 'Fogo', icon: '♐' },
  { name: 'Capricórnio', dates: '22/12 - 19/01', element: 'Terra', icon: '♑' },
  { name: 'Aquário', dates: '20/01 - 18/02', element: 'Ar', icon: '♒' },
  { name: 'Peixes', dates: '19/02 - 20/03', element: 'Água', icon: '♓' }
];

const horoscopeData = {
  'Áries': {
    general: 'Hoje é um dia de energia renovada e iniciativas. Sua determinação natural estará em alta, favorecendo novos projetos e decisões importantes.',
    love: 'No amor, seja mais direto em suas intenções. A sinceridade será sua melhor aliada para conquistar ou fortalecer relacionamentos.',
    work: 'Profissionalmente, é hora de liderar e tomar a frente. Suas ideias inovadoras serão bem recebidas pelos superiores.',
    money: 'Cuidado com gastos impulsivos. Planeje melhor seus investimentos e evite decisões financeiras precipitadas.',
    lucky: 7
  },
  'Touro': {
    general: 'Dia favorável para consolidar projetos e buscar estabilidade. Sua paciência será recompensada com resultados sólidos.',
    love: 'Na vida amorosa, valorize os pequenos gestos e momentos íntimos. A sensualidade estará em evidência.',
    work: 'No trabalho, foque na qualidade ao invés da quantidade. Seus esforços constantes começam a dar frutos.',
    money: 'Excelente momento para investimentos de longo prazo. Sua prudência financeira será recompensada.',
    lucky: 3
  },
  'Gêmeos': {
    general: 'Sua versatilidade estará em alta hoje. Aproveite para se comunicar, aprender coisas novas e fazer conexões importantes.',
    love: 'No amor, a comunicação será fundamental. Converse abertamente sobre seus sentimentos e ouça seu parceiro.',
    work: 'Dia excelente para networking e parcerias. Sua habilidade de adaptação abrirá novas oportunidades.',
    money: 'Diversifique seus investimentos, mas evite mudanças muito bruscas. Pesquise bem antes de decidir.',
    lucky: 12
  },
  'Câncer': {
    general: 'Suas emoções estarão mais intensas hoje. Use sua intuição para tomar decisões importantes e cuidar de quem ama.',
    love: 'Momento de maior intimidade e conexão emocional. Demonstre seus sentimentos de forma carinhosa.',
    work: 'No ambiente profissional, sua empatia será um diferencial. Ajude colegas e construa relacionamentos sólidos.',
    money: 'Invista em segurança financeira e poupança. Evite gastos desnecessários com itens supérfluos.',
    lucky: 9
  },
  'Leão': {
    general: 'Dia de brilhar e mostrar seus talentos. Sua criatividade e carisma estarão em evidência, atraindo reconhecimento.',
    love: 'No amor, seja generoso e demonstre seu carinho de forma grandiosa. Surpresas românticas serão bem-vindas.',
    work: 'Profissionalmente, é hora de assumir a liderança. Seus projetos criativos terão grande aceitação.',
    money: 'Cuidado com gastos excessivos para impressionar outros. Mantenha o equilíbrio entre prazer e responsabilidade.',
    lucky: 15
  },
  'Virgem': {
    general: 'Dia ideal para organização e planejamento. Sua atenção aos detalhes será fundamental para o sucesso de seus projetos.',
    love: 'Na vida amorosa, pequenos gestos de cuidado farão toda a diferença. Seja prestativo e atencioso.',
    work: 'No trabalho, sua eficiência será reconhecida. É um bom momento para apresentar relatórios e análises detalhadas.',
    money: 'Revise seus gastos e faça um planejamento financeiro detalhado. Sua organização trará economia.',
    lucky: 6
  },
  'Libra': {
    general: 'Busque o equilíbrio em todas as áreas da vida. Sua diplomacia será essencial para resolver conflitos.',
    love: 'No amor, harmonia e parceria estarão em foco. Busque o meio-termo em discussões e valorize a beleza do relacionamento.',
    work: 'Profissionalmente, sua habilidade de mediar conflitos será valorizada. Trabalhe em equipe e busque consenso.',
    money: 'Equilibre gastos e economia. Evite extremos e busque investimentos que ofereçam estabilidade.',
    lucky: 11
  },
  'Escorpião': {
    general: 'Dia de transformações profundas e descobertas importantes. Confie em sua intuição para navegar por mudanças.',
    love: 'Na vida amorosa, intensidade e paixão estarão presentes. Seja honesto sobre seus sentimentos mais profundos.',
    work: 'No trabalho, sua capacidade de investigação e análise será fundamental. Mergulhe fundo nos projetos.',
    money: 'Momento favorável para investimentos de risco calculado. Sua intuição financeira estará aguçada.',
    lucky: 8
  },
  'Sagitário': {
    general: 'Dia de expansão e novas aventuras. Sua sede de conhecimento e liberdade abrirá caminhos inesperados.',
    love: 'No amor, busque parceiros que compartilhem seus ideais e aventuras. A liberdade será importante.',
    work: 'Profissionalmente, explore novas áreas e oportunidades internacionais. Sua visão ampla será valorizada.',
    money: 'Invista em educação e viagens. Gastos com crescimento pessoal trarão retorno no futuro.',
    lucky: 21
  },
  'Capricórnio': {
    general: 'Foque em seus objetivos de longo prazo. Sua disciplina e persistência começam a mostrar resultados concretos.',
    love: 'Na vida amorosa, demonstre comprometimento e seriedade. Relacionamentos estáveis serão favorecidos.',
    work: 'No trabalho, sua responsabilidade será reconhecida. É um bom momento para buscar promoções ou novos cargos.',
    money: 'Excelente dia para planejamento financeiro de longo prazo. Invista em segurança e estabilidade.',
    lucky: 10
  },
  'Aquário': {
    general: 'Dia de inovação e originalidade. Suas ideias únicas e visão futurista abrirão novas possibilidades.',
    love: 'No amor, valorize a amizade e a liberdade. Relacionamentos baseados em companheirismo serão favorecidos.',
    work: 'Profissionalmente, sua criatividade e pensamento inovador serão essenciais. Proponha soluções diferentes.',
    money: 'Considere investimentos em tecnologia e inovação. Sua visão futurista pode gerar bons retornos.',
    lucky: 17
  },
  'Peixes': {
    general: 'Confie em sua intuição e sensibilidade hoje. Sua compaixão e criatividade serão suas maiores forças.',
    love: 'Na vida amorosa, romantismo e espiritualidade estarão em alta. Conecte-se emocionalmente com seu parceiro.',
    work: 'No trabalho, sua empatia e criatividade serão diferenciais. Áreas artísticas e de cuidado serão favorecidas.',
    money: 'Seja cauteloso com investimentos baseados apenas em emoção. Busque conselhos práticos antes de decidir.',
    lucky: 4
  }
};

const Horoscope: React.FC<HoroscopeProps> = ({ onBack }) => {
  const [selectedSign, setSelectedSign] = useState<string | null>(null);

  const today = new Date().toLocaleDateString('pt-BR', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <button
            onClick={onBack}
            className="mb-4 px-6 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
          >
            ← Voltar
          </button>
          <h1 className="text-4xl font-bold text-white mb-4 flex items-center justify-center">
            <Star className="w-10 h-10 mr-4 text-yellow-400" />
            Horóscopo Diário
            <Star className="w-10 h-10 ml-4 text-yellow-400" />
          </h1>
          <p className="text-purple-200 text-lg mb-2">
            Descubra o que os astros reservam para você hoje
          </p>
          <p className="text-yellow-300 font-semibold capitalize">
            {today}
          </p>
        </div>

        {!selectedSign ? (
          <>
            {/* Grid de Signos */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-8">
              {zodiacSigns.map((sign) => (
                <button
                  key={sign.name}
                  onClick={() => setSelectedSign(sign.name)}
                  className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 text-center hover:bg-opacity-20 transition-all duration-300 hover:scale-105 border border-white border-opacity-20"
                >
                  <div className="text-4xl mb-3">{sign.icon}</div>
                  <h3 className="text-xl font-bold text-white mb-2">{sign.name}</h3>
                  <p className="text-purple-200 text-sm mb-1">{sign.dates}</p>
                  <p className="text-yellow-300 text-xs font-semibold">{sign.element}</p>
                </button>
              ))}
            </div>

            {/* Informações Gerais */}
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-8 text-center">
              <h2 className="text-2xl font-bold text-white mb-4">
                Escolha seu Signo para Ver a Previsão Completa
              </h2>
              <p className="text-purple-200 leading-relaxed">
                Clique no seu signo acima para descobrir as previsões detalhadas para amor, 
                trabalho, dinheiro e muito mais. Nossos astrólogos prepararam orientações 
                especiais para cada signo do zodíaco.
              </p>
            </div>
          </>
        ) : (
          /* Previsão Detalhada */
          <div className="space-y-6">
            {/* Header do Signo */}
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-8 text-center">
              <div className="text-6xl mb-4">
                {zodiacSigns.find(s => s.name === selectedSign)?.icon}
              </div>
              <h2 className="text-3xl font-bold text-white mb-2">{selectedSign}</h2>
              <p className="text-purple-200 text-lg">
                {zodiacSigns.find(s => s.name === selectedSign)?.dates}
              </p>
              <div className="mt-4">
                <span className="px-4 py-2 bg-yellow-500 text-purple-900 rounded-full font-semibold">
                  Número da Sorte: {horoscopeData[selectedSign as keyof typeof horoscopeData]?.lucky}
                </span>
              </div>
            </div>

            {/* Previsões por Categoria */}
            <div className="grid md:grid-cols-2 gap-6">
              {/* Geral */}
              <div className="bg-gradient-to-br from-purple-600 to-indigo-600 rounded-xl p-6">
                <div className="flex items-center mb-4">
                  <Calendar className="w-6 h-6 text-white mr-3" />
                  <h3 className="text-xl font-bold text-white">Previsão Geral</h3>
                </div>
                <p className="text-purple-100 leading-relaxed">
                  {horoscopeData[selectedSign as keyof typeof horoscopeData]?.general}
                </p>
              </div>

              {/* Amor */}
              <div className="bg-gradient-to-br from-pink-600 to-rose-600 rounded-xl p-6">
                <div className="flex items-center mb-4">
                  <Heart className="w-6 h-6 text-white mr-3" />
                  <h3 className="text-xl font-bold text-white">Amor</h3>
                </div>
                <p className="text-pink-100 leading-relaxed">
                  {horoscopeData[selectedSign as keyof typeof horoscopeData]?.love}
                </p>
              </div>

              {/* Trabalho */}
              <div className="bg-gradient-to-br from-emerald-600 to-teal-600 rounded-xl p-6">
                <div className="flex items-center mb-4">
                  <Briefcase className="w-6 h-6 text-white mr-3" />
                  <h3 className="text-xl font-bold text-white">Trabalho</h3>
                </div>
                <p className="text-emerald-100 leading-relaxed">
                  {horoscopeData[selectedSign as keyof typeof horoscopeData]?.work}
                </p>
              </div>

              {/* Dinheiro */}
              <div className="bg-gradient-to-br from-yellow-600 to-orange-600 rounded-xl p-6">
                <div className="flex items-center mb-4">
                  <DollarSign className="w-6 h-6 text-white mr-3" />
                  <h3 className="text-xl font-bold text-white">Dinheiro</h3>
                </div>
                <p className="text-yellow-100 leading-relaxed">
                  {horoscopeData[selectedSign as keyof typeof horoscopeData]?.money}
                </p>
              </div>
            </div>

            {/* Botões de Ação */}
            <div className="flex justify-center space-x-4">
              <button
                onClick={() => setSelectedSign(null)}
                className="px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
              >
                Ver Outros Signos
              </button>
              <button
                onClick={onBack}
                className="px-6 py-3 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors"
              >
                Voltar ao Menu
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Horoscope;