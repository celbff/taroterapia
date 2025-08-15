import React, { useState } from 'react';
import { Calculator, Hash, Calendar, User } from 'lucide-react';

interface NumerologyProps {
  onBack: () => void;
}

const numerologyMeanings = {
  1: {
    title: 'O Líder',
    description: 'Pessoas com número 1 são líderes naturais, independentes e pioneiras. Possuem grande força de vontade e determinação.',
    traits: ['Liderança', 'Independência', 'Inovação', 'Determinação', 'Ambição'],
    challenges: 'Pode ser muito dominador ou egocêntrico. Precisa aprender a trabalhar em equipe.',
    career: 'Empreendedorismo, gerência, política, áreas que exigem liderança.',
    love: 'Busca parceiros que admirem sua força, mas que também tenham personalidade própria.'
  },
  2: {
    title: 'O Cooperador',
    description: 'Pessoas diplomáticas, sensíveis e cooperativas. Excelentes mediadoras e trabalham bem em equipe.',
    traits: ['Diplomacia', 'Sensibilidade', 'Cooperação', 'Paciência', 'Intuição'],
    challenges: 'Pode ser muito dependente dos outros ou indeciso. Precisa desenvolver mais confiança.',
    career: 'Psicologia, mediação, trabalho social, artes, áreas que envolvem relacionamentos.',
    love: 'Valoriza relacionamentos harmoniosos e busca parceiros compreensivos e carinhosos.'
  },
  3: {
    title: 'O Comunicador',
    description: 'Pessoas criativas, expressivas e otimistas. Possuem grande habilidade de comunicação e inspiram outros.',
    traits: ['Criatividade', 'Comunicação', 'Otimismo', 'Inspiração', 'Sociabilidade'],
    challenges: 'Pode ser superficial ou disperso. Precisa focar mais em seus objetivos.',
    career: 'Arte, comunicação, entretenimento, educação, marketing.',
    love: 'Busca relacionamentos divertidos e estimulantes, com boa comunicação.'
  },
  4: {
    title: 'O Construtor',
    description: 'Pessoas práticas, organizadas e trabalhadoras. Constroem bases sólidas e são muito confiáveis.',
    traits: ['Organização', 'Praticidade', 'Confiabilidade', 'Disciplina', 'Estabilidade'],
    challenges: 'Pode ser muito rígido ou resistente a mudanças. Precisa ser mais flexível.',
    career: 'Engenharia, arquitetura, administração, contabilidade, áreas técnicas.',
    love: 'Valoriza relacionamentos estáveis e duradouros, baseados em confiança mútua.'
  },
  5: {
    title: 'O Aventureiro',
    description: 'Pessoas livres, versáteis e aventureiras. Buscam constantemente novas experiências e mudanças.',
    traits: ['Liberdade', 'Versatilidade', 'Aventura', 'Curiosidade', 'Adaptabilidade'],
    challenges: 'Pode ser muito instável ou irresponsável. Precisa aprender a se comprometer.',
    career: 'Viagens, vendas, jornalismo, áreas que oferecem variedade e movimento.',
    love: 'Busca relacionamentos que ofereçam liberdade e aventura, sem muitas restrições.'
  },
  6: {
    title: 'O Cuidador',
    description: 'Pessoas responsáveis, carinhosas e protetoras. Dedicam-se ao bem-estar da família e comunidade.',
    traits: ['Responsabilidade', 'Cuidado', 'Proteção', 'Harmonia', 'Serviço'],
    challenges: 'Pode ser muito controlador ou sacrificar-se demais pelos outros.',
    career: 'Saúde, educação, serviço social, áreas de cuidado e bem-estar.',
    love: 'Valoriza família e relacionamentos profundos, sendo muito dedicado ao parceiro.'
  },
  7: {
    title: 'O Místico',
    description: 'Pessoas introspectivas, analíticas e espirituais. Buscam conhecimento profundo e verdades ocultas.',
    traits: ['Introspecção', 'Análise', 'Espiritualidade', 'Sabedoria', 'Intuição'],
    challenges: 'Pode ser muito isolado ou crítico. Precisa se conectar mais com outros.',
    career: 'Pesquisa, ciência, filosofia, espiritualidade, áreas analíticas.',
    love: 'Busca conexões profundas e espirituais, valorizando a compreensão mútua.'
  },
  8: {
    title: 'O Executivo',
    description: 'Pessoas ambiciosas, práticas e orientadas para o sucesso material. Excelentes organizadores e líderes.',
    traits: ['Ambição', 'Organização', 'Liderança', 'Materialismo', 'Eficiência'],
    challenges: 'Pode ser muito materialista ou autoritário. Precisa equilibrar trabalho e vida pessoal.',
    career: 'Negócios, finanças, administração, áreas que envolvem poder e dinheiro.',
    love: 'Busca parceiros que admirem seu sucesso e compartilhem suas ambições.'
  },
  9: {
    title: 'O Humanitário',
    description: 'Pessoas generosas, compassivas e idealistas. Dedicam-se a causas maiores e ao bem da humanidade.',
    traits: ['Generosidade', 'Compaixão', 'Idealismo', 'Sabedoria', 'Universalidade'],
    challenges: 'Pode ser muito idealista ou negligenciar necessidades pessoais.',
    career: 'Trabalho humanitário, arte, educação, áreas que beneficiam a sociedade.',
    love: 'Busca relacionamentos baseados em valores elevados e propósito comum.'
  }
};

const Numerology: React.FC<NumerologyProps> = ({ onBack }) => {
  const [name, setName] = useState('');
  const [birthDate, setBirthDate] = useState('');
  const [result, setResult] = useState<number | null>(null);
  const [calculationType, setCalculationType] = useState<'name' | 'birth'>('name');

  const calculateNameNumber = (fullName: string): number => {
    const letterValues: { [key: string]: number } = {
      'A': 1, 'B': 2, 'C': 3, 'D': 4, 'E': 5, 'F': 6, 'G': 7, 'H': 8, 'I': 9,
      'J': 1, 'K': 2, 'L': 3, 'M': 4, 'N': 5, 'O': 6, 'P': 7, 'Q': 8, 'R': 9,
      'S': 1, 'T': 2, 'U': 3, 'V': 4, 'W': 5, 'X': 6, 'Y': 7, 'Z': 8
    };

    let sum = 0;
    for (const char of fullName.toUpperCase().replace(/[^A-Z]/g, '')) {
      sum += letterValues[char] || 0;
    }

    while (sum > 9) {
      sum = sum.toString().split('').reduce((acc, digit) => acc + parseInt(digit), 0);
    }

    return sum;
  };

  const calculateBirthNumber = (date: string): number => {
    const digits = date.replace(/\D/g, '');
    let sum = 0;
    
    for (const digit of digits) {
      sum += parseInt(digit);
    }

    while (sum > 9) {
      sum = sum.toString().split('').reduce((acc, digit) => acc + parseInt(digit), 0);
    }

    return sum;
  };

  const handleCalculate = () => {
    if (calculationType === 'name' && name.trim()) {
      setResult(calculateNameNumber(name));
    } else if (calculationType === 'birth' && birthDate) {
      setResult(calculateBirthNumber(birthDate));
    }
  };

  const reset = () => {
    setName('');
    setBirthDate('');
    setResult(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-900 via-teal-900 to-cyan-900">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <button
            onClick={onBack}
            className="mb-4 px-6 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition-colors"
          >
            ← Voltar
          </button>
          <h1 className="text-4xl font-bold text-white mb-4 flex items-center justify-center">
            <Hash className="w-10 h-10 mr-4 text-emerald-400" />
            Numerologia Pessoal
            <Hash className="w-10 h-10 ml-4 text-emerald-400" />
          </h1>
          <p className="text-teal-200 text-lg">
            Descubra os segredos dos números em sua vida
          </p>
        </div>

        {!result ? (
          <div className="max-w-2xl mx-auto">
            {/* Seletor de Tipo de Cálculo */}
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 mb-6">
              <h2 className="text-2xl font-bold text-white mb-4 text-center">
                Escolha o Tipo de Cálculo
              </h2>
              <div className="grid md:grid-cols-2 gap-4">
                <button
                  onClick={() => setCalculationType('name')}
                  className={`p-4 rounded-lg border-2 transition-all ${
                    calculationType === 'name'
                      ? 'border-emerald-400 bg-emerald-600 bg-opacity-30'
                      : 'border-white border-opacity-30 hover:border-emerald-400'
                  }`}
                >
                  <User className="w-8 h-8 text-white mx-auto mb-2" />
                  <h3 className="text-lg font-bold text-white mb-2">Número do Nome</h3>
                  <p className="text-teal-200 text-sm">
                    Baseado nas letras do seu nome completo
                  </p>
                </button>
                <button
                  onClick={() => setCalculationType('birth')}
                  className={`p-4 rounded-lg border-2 transition-all ${
                    calculationType === 'birth'
                      ? 'border-emerald-400 bg-emerald-600 bg-opacity-30'
                      : 'border-white border-opacity-30 hover:border-emerald-400'
                  }`}
                >
                  <Calendar className="w-8 h-8 text-white mx-auto mb-2" />
                  <h3 className="text-lg font-bold text-white mb-2">Número do Nascimento</h3>
                  <p className="text-teal-200 text-sm">
                    Baseado na sua data de nascimento
                  </p>
                </button>
              </div>
            </div>

            {/* Formulário */}
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-8">
              <h3 className="text-xl font-bold text-white mb-6 text-center">
                {calculationType === 'name' ? 'Digite seu Nome Completo' : 'Digite sua Data de Nascimento'}
              </h3>
              
              {calculationType === 'name' ? (
                <div className="mb-6">
                  <label className="block text-teal-200 mb-2">Nome Completo:</label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Ex: Maria Silva Santos"
                    className="w-full px-4 py-3 rounded-lg bg-white bg-opacity-20 text-white placeholder-teal-300 border border-white border-opacity-30 focus:border-emerald-400 focus:outline-none"
                  />
                </div>
              ) : (
                <div className="mb-6">
                  <label className="block text-teal-200 mb-2">Data de Nascimento:</label>
                  <input
                    type="date"
                    value={birthDate}
                    onChange={(e) => setBirthDate(e.target.value)}
                    className="w-full px-4 py-3 rounded-lg bg-white bg-opacity-20 text-white border border-white border-opacity-30 focus:border-emerald-400 focus:outline-none"
                  />
                </div>
              )}

              <button
                onClick={handleCalculate}
                disabled={calculationType === 'name' ? !name.trim() : !birthDate}
                className="w-full py-3 bg-gradient-to-r from-emerald-600 to-teal-600 text-white rounded-lg font-semibold hover:from-emerald-700 hover:to-teal-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all flex items-center justify-center"
              >
                <Calculator className="w-5 h-5 mr-2" />
                Calcular Meu Número
              </button>
            </div>

            {/* Informações sobre Numerologia */}
            <div className="mt-8 bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6">
              <h3 className="text-xl font-bold text-white mb-4 text-center">
                Sobre a Numerologia
              </h3>
              <p className="text-teal-200 leading-relaxed text-center">
                A numerologia é uma ciência milenar que estuda a influência dos números em nossas vidas. 
                Cada número possui uma vibração única que pode revelar aspectos importantes da sua 
                personalidade, destino e propósito de vida. Descubra o que os números revelam sobre você!
              </p>
            </div>
          </div>
        ) : (
          /* Resultado */
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <div className="inline-block bg-gradient-to-r from-emerald-400 to-teal-400 text-emerald-900 rounded-full w-32 h-32 flex items-center justify-center mb-4">
                <span className="text-6xl font-bold">{result}</span>
              </div>
              <h2 className="text-3xl font-bold text-white mb-2">
                Seu Número é {result}
              </h2>
              <h3 className="text-2xl text-emerald-300 mb-4">
                {numerologyMeanings[result as keyof typeof numerologyMeanings].title}
              </h3>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              {/* Descrição Principal */}
              <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6">
                <h4 className="text-xl font-bold text-white mb-4">Descrição</h4>
                <p className="text-teal-200 leading-relaxed">
                  {numerologyMeanings[result as keyof typeof numerologyMeanings].description}
                </p>
              </div>

              {/* Características */}
              <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6">
                <h4 className="text-xl font-bold text-white mb-4">Características</h4>
                <div className="flex flex-wrap gap-2">
                  {numerologyMeanings[result as keyof typeof numerologyMeanings].traits.map((trait, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-emerald-600 bg-opacity-50 text-emerald-100 rounded-full text-sm"
                    >
                      {trait}
                    </span>
                  ))}
                </div>
              </div>

              {/* Desafios */}
              <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6">
                <h4 className="text-xl font-bold text-white mb-4">Desafios</h4>
                <p className="text-teal-200 leading-relaxed">
                  {numerologyMeanings[result as keyof typeof numerologyMeanings].challenges}
                </p>
              </div>

              {/* Carreira */}
              <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6">
                <h4 className="text-xl font-bold text-white mb-4">Carreira</h4>
                <p className="text-teal-200 leading-relaxed">
                  {numerologyMeanings[result as keyof typeof numerologyMeanings].career}
                </p>
              </div>
            </div>

            {/* Amor */}
            <div className="bg-gradient-to-r from-pink-600 to-rose-600 rounded-xl p-6 mb-8">
              <h4 className="text-xl font-bold text-white mb-4">Amor e Relacionamentos</h4>
              <p className="text-pink-100 leading-relaxed">
                {numerologyMeanings[result as keyof typeof numerologyMeanings].love}
              </p>
            </div>

            {/* Botões */}
            <div className="flex justify-center space-x-4">
              <button
                onClick={reset}
                className="px-6 py-3 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition-colors"
              >
                Novo Cálculo
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

export default Numerology;