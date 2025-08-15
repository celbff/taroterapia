import React, { useState } from 'react';
import { Star, Calculator, Calendar, User, Heart } from 'lucide-react';
import { tarotCards } from '../data/tarotCards';

interface PersonalArcanumProps {
  onBack: () => void;
}

const PersonalArcanum: React.FC<PersonalArcanumProps> = ({ onBack }) => {
  const [name, setName] = useState('');
  const [birthDate, setBirthDate] = useState('');
  const [result, setResult] = useState<{
    personalityArcanum: number;
    soulArcanum: number;
    yearArcanum: number;
    nameArcanum?: number;
  } | null>(null);
  const [calculationType, setCalculationType] = useState<'birth' | 'name' | 'both'>('birth');

  const calculateNameArcanum = (fullName: string): number => {
    // Tabela de valores das letras baseada na numerologia pitagórica
    const letterValues: { [key: string]: number } = {
      'A': 1, 'B': 2, 'C': 3, 'D': 4, 'E': 5, 'F': 6, 'G': 7, 'H': 8, 'I': 9,
      'J': 1, 'K': 2, 'L': 3, 'M': 4, 'N': 5, 'O': 6, 'P': 7, 'Q': 8, 'R': 9,
      'S': 1, 'T': 2, 'U': 3, 'V': 4, 'W': 5, 'X': 6, 'Y': 7, 'Z': 8
    };

    // Remove acentos e caracteres especiais, mantém apenas letras
    const cleanName = fullName
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .toUpperCase()
      .replace(/[^A-Z]/g, '');

    let sum = 0;
    for (const char of cleanName) {
      sum += letterValues[char] || 0;
    }

    // Reduz até obter um número de 1 a 22
    while (sum > 22) {
      sum = sum.toString().split('').reduce((acc, digit) => acc + parseInt(digit), 0);
    }

    return sum === 0 ? 22 : sum;
  };

  const calculatePersonalArcanum = (date: string) => {
    const [year, month, day] = date.split('-').map(Number);
    
    // Arcano da Personalidade: soma dia + mês + ano, reduz até número de 1-22
    let personalitySum = day + month + year;
    while (personalitySum > 22) {
      personalitySum = personalitySum.toString().split('').reduce((acc, digit) => acc + parseInt(digit), 0);
    }
    if (personalitySum === 0) personalitySum = 22;

    // Arcano da Alma: soma dia + mês, reduz até número de 1-22
    let soulSum = day + month;
    while (soulSum > 22) {
      soulSum = soulSum.toString().split('').reduce((acc, digit) => acc + parseInt(digit), 0);
    }
    if (soulSum === 0) soulSum = 22;

    // Arcano do Ano Pessoal: soma dia + mês + ano atual
    const currentYear = new Date().getFullYear();
    let yearSum = day + month + currentYear;
    while (yearSum > 22) {
      yearSum = yearSum.toString().split('').reduce((acc, digit) => acc + parseInt(digit), 0);
    }
    if (yearSum === 0) yearSum = 22;

    return {
      personalityArcanum: personalitySum,
      soulArcanum: soulSum,
      yearArcanum: yearSum
    };
  };

  const handleCalculate = () => {
    if (calculationType === 'birth' && birthDate) {
      setResult(calculatePersonalArcanum(birthDate));
    } else if (calculationType === 'name' && name.trim()) {
      const nameArcanum = calculateNameArcanum(name);
      setResult({
        personalityArcanum: nameArcanum,
        soulArcanum: nameArcanum,
        yearArcanum: nameArcanum,
        nameArcanum: nameArcanum
      });
    } else if (calculationType === 'both' && birthDate && name.trim()) {
      const birthResult = calculatePersonalArcanum(birthDate);
      const nameArcanum = calculateNameArcanum(name);
      setResult({
        ...birthResult,
        nameArcanum: nameArcanum
      });
    }
  };

  const reset = () => {
    setName('');
    setBirthDate('');
    setResult(null);
  };

  const getArcanumCard = (number: number) => {
    // Ajustar para o índice correto (O Louco é 0, mas número 22 no cálculo)
    const cardIndex = number === 22 ? 0 : number - 1;
    return tarotCards[cardIndex];
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900">
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
            Cálculo do Arcano Pessoal
            <Star className="w-10 h-10 ml-4 text-yellow-400" />
          </h1>
          <p className="text-purple-200 text-lg max-w-3xl mx-auto">
            Descubra seus arcanos pessoais baseados na sua data de nascimento. 
            Cada pessoa possui três arcanos principais que revelam aspectos únicos da personalidade e destino.
          </p>
        </div>

        {!result ? (
          <div className="max-w-2xl mx-auto">
            {/* Seletor de Tipo de Cálculo */}
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 mb-6">
              <h2 className="text-2xl font-bold text-white mb-4 text-center">
                Escolha o Tipo de Cálculo
              </h2>
              <div className="grid md:grid-cols-3 gap-4">
                <button
                  onClick={() => setCalculationType('birth')}
                  className={`p-4 rounded-lg border-2 transition-all ${
                    calculationType === 'birth'
                      ? 'border-yellow-400 bg-purple-600 bg-opacity-30'
                      : 'border-white border-opacity-30 hover:border-yellow-400'
                  }`}
                >
                  <Calendar className="w-8 h-8 text-white mx-auto mb-2" />
                  <h3 className="text-lg font-bold text-white mb-2">Por Data</h3>
                  <p className="text-purple-200 text-sm">
                    Baseado na sua data de nascimento
                  </p>
                </button>
                <button
                  onClick={() => setCalculationType('name')}
                  className={`p-4 rounded-lg border-2 transition-all ${
                    calculationType === 'name'
                      ? 'border-yellow-400 bg-purple-600 bg-opacity-30'
                      : 'border-white border-opacity-30 hover:border-yellow-400'
                  }`}
                >
                  <User className="w-8 h-8 text-white mx-auto mb-2" />
                  <h3 className="text-lg font-bold text-white mb-2">Por Nome</h3>
                  <p className="text-purple-200 text-sm">
                    Baseado no seu nome completo
                  </p>
                </button>
                <button
                  onClick={() => setCalculationType('both')}
                  className={`p-4 rounded-lg border-2 transition-all ${
                    calculationType === 'both'
                      ? 'border-yellow-400 bg-purple-600 bg-opacity-30'
                      : 'border-white border-opacity-30 hover:border-yellow-400'
                  }`}
                >
                  <Star className="w-8 h-8 text-white mx-auto mb-2" />
                  <h3 className="text-lg font-bold text-white mb-2">Completo</h3>
                  <p className="text-purple-200 text-sm">
                    Nome + data para análise completa
                  </p>
                </button>
              </div>
            </div>

            {/* Explicação */}
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-8 mb-8">
              <h2 className="text-2xl font-bold text-white mb-6 text-center">
                {calculationType === 'name' ? 'Arcano do Nome' : 'Arcanos Pessoais'}
              </h2>
              {calculationType === 'name' ? (
                <div className="text-center">
                  <User className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
                  <p className="text-purple-200 leading-relaxed">
                    O Arcano do Nome revela a energia vibratória do seu nome completo, 
                    mostrando características da sua personalidade e missão de vida. 
                    Cada letra possui um valor numérico que, somado, resulta em um 
                    dos 22 Arcanos Maiores do Tarot.
                  </p>
                </div>
              ) : calculationType === 'both' ? (
                <div className="grid md:grid-cols-2 gap-6 text-center">
                  <div className="bg-purple-600 bg-opacity-30 rounded-lg p-4">
                    <Calendar className="w-8 h-8 text-yellow-400 mx-auto mb-3" />
                    <h3 className="text-lg font-bold text-white mb-2">Arcanos da Data</h3>
                    <p className="text-purple-200 text-sm">
                      Personalidade, Alma e Ano Pessoal baseados na data de nascimento
                    </p>
                  </div>
                  <div className="bg-pink-600 bg-opacity-30 rounded-lg p-4">
                    <User className="w-8 h-8 text-yellow-400 mx-auto mb-3" />
                    <h3 className="text-lg font-bold text-white mb-2">Arcano do Nome</h3>
                    <p className="text-purple-200 text-sm">
                      Energia vibratória e missão de vida através do nome completo
                    </p>
                  </div>
                </div>
              ) : (
                <div className="grid md:grid-cols-3 gap-6 text-center">
                <div className="bg-purple-600 bg-opacity-30 rounded-lg p-4">
                  <User className="w-8 h-8 text-yellow-400 mx-auto mb-3" />
                  <h3 className="text-lg font-bold text-white mb-2">Arcano da Personalidade</h3>
                  <p className="text-purple-200 text-sm">
                    Revela sua personalidade externa, como você se apresenta ao mundo
                  </p>
                </div>
                <div className="bg-pink-600 bg-opacity-30 rounded-lg p-4">
                  <Heart className="w-8 h-8 text-yellow-400 mx-auto mb-3" />
                  <h3 className="text-lg font-bold text-white mb-2">Arcano da Alma</h3>
                  <p className="text-purple-200 text-sm">
                    Representa sua essência interior, seus desejos mais profundos
                  </p>
                </div>
                <div className="bg-indigo-600 bg-opacity-30 rounded-lg p-4">
                  <Calendar className="w-8 h-8 text-yellow-400 mx-auto mb-3" />
                  <h3 className="text-lg font-bold text-white mb-2">Arcano do Ano</h3>
                  <p className="text-purple-200 text-sm">
                    Indica as energias e temas principais do seu ano pessoal atual
                  </p>
                </div>
              </div>
              )}
            </div>

            {/* Formulário */}
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-8">
              <h3 className="text-xl font-bold text-white mb-6 text-center">
                {calculationType === 'name' ? 'Digite seu Nome Completo' : 
                 calculationType === 'both' ? 'Digite seus Dados' : 'Digite sua Data de Nascimento'}
              </h3>
              
              {(calculationType === 'name' || calculationType === 'both') && (
                <div className="mb-6">
                  <label className="block text-purple-200 mb-3 text-lg">Nome Completo:</label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Ex: Maria Silva Santos"
                    className="w-full px-4 py-4 rounded-lg bg-white bg-opacity-20 text-white text-lg placeholder-purple-300 border border-white border-opacity-30 focus:border-yellow-400 focus:outline-none"
                  />
                  <p className="text-purple-300 text-sm mt-2">
                    Digite seu nome completo como consta nos documentos
                  </p>
                </div>
              )}
              
              {(calculationType === 'birth' || calculationType === 'both') && (
                <div className="mb-6">
                <label className="block text-purple-200 mb-3 text-lg">Data de Nascimento:</label>
                <input
                  type="date"
                  value={birthDate}
                  onChange={(e) => setBirthDate(e.target.value)}
                  className="w-full px-4 py-4 rounded-lg bg-white bg-opacity-20 text-white text-lg border border-white border-opacity-30 focus:border-yellow-400 focus:outline-none"
                />
              </div>
              )}

              <button
                onClick={handleCalculate}
                disabled={
                  (calculationType === 'birth' && !birthDate) ||
                  (calculationType === 'name' && !name.trim()) ||
                  (calculationType === 'both' && (!birthDate || !name.trim()))
                }
                className="w-full py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg font-semibold text-lg hover:from-purple-700 hover:to-pink-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all flex items-center justify-center"
              >
                <Calculator className="w-6 h-6 mr-3" />
                Calcular Meus Arcanos Pessoais
              </button>
            </div>

            {/* Informações Adicionais */}
            <div className="mt-8 bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6">
              <h3 className="text-xl font-bold text-white mb-4 text-center">
                {calculationType === 'name' ? 'Como Funciona o Cálculo por Nome?' : 'Como Funciona o Cálculo?'}
              </h3>
              <div className="text-purple-200 space-y-3">
                {calculationType === 'name' && (
                  <>
                    <p><strong>Numerologia do Nome:</strong> Cada letra do seu nome possui um valor numérico de 1 a 9.</p>
                    <p><strong>Soma das Letras:</strong> Todos os valores são somados e reduzidos até obter um número de 1 a 22.</p>
                    <p><strong>Arcano Correspondente:</strong> O número final corresponde a um dos 22 Arcanos Maiores do Tarot.</p>
                  </>
                )}
                {calculationType === 'birth' && (
                  <>
                <p><strong>Arcano da Personalidade:</strong> Soma-se dia + mês + ano de nascimento e reduz-se até obter um número de 1 a 22.</p>
                <p><strong>Arcano da Alma:</strong> Soma-se apenas dia + mês de nascimento e reduz-se até obter um número de 1 a 22.</p>
                <p><strong>Arcano do Ano Pessoal:</strong> Soma-se dia + mês de nascimento + ano atual e reduz-se até obter um número de 1 a 22.</p>
                  </>
                )}
                {calculationType === 'both' && (
                  <>
                    <p><strong>Análise Completa:</strong> Combina os arcanos da data de nascimento com o arcano do nome.</p>
                    <p><strong>Visão Holística:</strong> Oferece uma perspectiva mais ampla da sua personalidade e destino.</p>
                  </>
                )}
              </div>
            </div>
          </div>
        ) : (
          /* Resultado */
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-white mb-4">
                {calculationType === 'name' ? 'Seu Arcano do Nome' : 'Seus Arcanos Pessoais'}
              </h2>
              <p className="text-purple-200 text-lg">
                {calculationType === 'name' ? `Baseado no nome: ${name}` :
                 calculationType === 'both' ? `Baseado no nome "${name}" e data ${new Date(birthDate + 'T00:00:00').toLocaleDateString('pt-BR')}` :
                 `Baseado na sua data de nascimento: ${new Date(birthDate + 'T00:00:00').toLocaleDateString('pt-BR')}`}
              </p>
            </div>

            {calculationType === 'name' ? (
              /* Arcano do Nome */
              <div className="flex justify-center mb-12">
                <div className="bg-gradient-to-br from-purple-600 to-pink-600 rounded-xl p-8 text-center max-w-md">
                  <User className="w-16 h-16 text-yellow-400 mx-auto mb-4" />
                  <h3 className="text-3xl font-bold text-white mb-4">Arcano do Nome</h3>
                  <div className="bg-white bg-opacity-20 rounded-lg p-6 mb-4">
                    <div className="text-6xl font-bold text-yellow-400 mb-3">
                      {result.personalityArcanum}
                    </div>
                    <div className="text-2xl text-white font-semibold">
                      {getArcanumCard(result.personalityArcanum)?.name}
                    </div>
                  </div>
                  <p className="text-purple-100 leading-relaxed">
                    Este é o arcano que governa a energia do seu nome e revela aspectos importantes da sua personalidade e missão de vida.
                  </p>
                </div>
              </div>
            ) : (
              /* Cards dos Arcanos */
              <div className={`grid ${result.nameArcanum ? 'md:grid-cols-4' : 'md:grid-cols-3'} gap-6 mb-12`}>
              {/* Arcano da Personalidade */}
              <div className="bg-gradient-to-br from-purple-600 to-indigo-600 rounded-xl p-6 text-center">
                <User className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-white mb-2">Personalidade</h3>
                <div className="bg-white bg-opacity-20 rounded-lg p-4 mb-4">
                  <div className="text-4xl font-bold text-yellow-400 mb-2">
                    {result.personalityArcanum}
                  </div>
                  <div className="text-lg text-white font-semibold">
                    {getArcanumCard(result.personalityArcanum)?.name}
                  </div>
                </div>
                <p className="text-purple-100 text-sm leading-relaxed">
                  {getArcanumCard(result.personalityArcanum)?.meaningUpright}
                </p>
              </div>

              {/* Arcano da Alma */}
              <div className="bg-gradient-to-br from-pink-600 to-rose-600 rounded-xl p-6 text-center">
                <Heart className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-white mb-2">Alma</h3>
                <div className="bg-white bg-opacity-20 rounded-lg p-4 mb-4">
                  <div className="text-4xl font-bold text-yellow-400 mb-2">
                    {result.soulArcanum}
                  </div>
                  <div className="text-lg text-white font-semibold">
                    {getArcanumCard(result.soulArcanum)?.name}
                  </div>
                </div>
                <p className="text-pink-100 text-sm leading-relaxed">
                  {getArcanumCard(result.soulArcanum)?.description}
                </p>
              </div>

              {/* Arcano do Ano */}
              <div className="bg-gradient-to-br from-indigo-600 to-blue-600 rounded-xl p-6 text-center">
                <Calendar className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-white mb-2">Ano {new Date().getFullYear()}</h3>
                <div className="bg-white bg-opacity-20 rounded-lg p-4 mb-4">
                  <div className="text-4xl font-bold text-yellow-400 mb-2">
                    {result.yearArcanum}
                  </div>
                  <div className="text-lg text-white font-semibold">
                    {getArcanumCard(result.yearArcanum)?.name}
                  </div>
                </div>
                <p className="text-blue-100 text-sm leading-relaxed">
                  Este arcano influencia as energias e temas principais do seu ano pessoal atual.
                </p>
              </div>

              {/* Arcano do Nome (se calculado) */}
              {result.nameArcanum && (
                <div className="bg-gradient-to-br from-yellow-600 to-orange-600 rounded-xl p-6 text-center">
                  <User className="w-12 h-12 text-white mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-white mb-2">Nome</h3>
                  <div className="bg-white bg-opacity-20 rounded-lg p-4 mb-4">
                    <div className="text-4xl font-bold text-white mb-2">
                      {result.nameArcanum}
                    </div>
                    <div className="text-lg text-white font-semibold">
                      {getArcanumCard(result.nameArcanum)?.name}
                    </div>
                  </div>
                  <p className="text-yellow-100 text-sm leading-relaxed">
                    A energia vibratória do seu nome e sua missão de vida.
                  </p>
                </div>
              )}
            </div>
            )}

            {/* Interpretação Detalhada */}
            <div className="bg-white rounded-xl shadow-2xl p-8 mb-8">
              <h3 className="text-3xl font-bold text-purple-900 mb-8 text-center">
                {calculationType === 'name' ? 'Interpretação do Seu Arcano do Nome' : 'Interpretação Completa dos Seus Arcanos'}
              </h3>
              
              <div className="space-y-8">
                {calculationType === 'name' ? (
                  /* Interpretação do Nome */
                  <div className="border-l-4 border-purple-600 pl-6">
                    <h4 className="text-2xl font-bold text-purple-800 mb-3 flex items-center">
                      <User className="w-6 h-6 mr-3" />
                      Arcano do Nome: {getArcanumCard(result.personalityArcanum)?.name}
                    </h4>
                    <div className="bg-purple-50 p-4 rounded-lg mb-4">
                      <p className="text-purple-800 leading-relaxed">
                        <strong>Energia do seu nome:</strong> {getArcanumCard(result.personalityArcanum)?.description}
                      </p>
                    </div>
                    <div className="bg-purple-50 p-4 rounded-lg mb-4">
                      <p className="text-purple-800 leading-relaxed">
                        <strong>Significado:</strong> {getArcanumCard(result.personalityArcanum)?.meaningUpright}
                      </p>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {getArcanumCard(result.personalityArcanum)?.keywords.map((keyword, i) => (
                        <span key={i} className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm">
                          {keyword}
                        </span>
                      ))}
                    </div>
                  </div>
                ) : (
                  <>
                {/* Personalidade */}
                <div className="border-l-4 border-purple-600 pl-6">
                  <h4 className="text-2xl font-bold text-purple-800 mb-3 flex items-center">
                    <User className="w-6 h-6 mr-3" />
                    Arcano da Personalidade: {getArcanumCard(result.personalityArcanum)?.name}
                  </h4>
                  <div className="bg-purple-50 p-4 rounded-lg mb-4">
                    <p className="text-purple-800 leading-relaxed">
                      <strong>Como você se apresenta ao mundo:</strong> {getArcanumCard(result.personalityArcanum)?.meaningUpright}
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {getArcanumCard(result.personalityArcanum)?.keywords.map((keyword, i) => (
                      <span key={i} className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm">
                        {keyword}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Alma */}
                <div className="border-l-4 border-pink-600 pl-6">
                  <h4 className="text-2xl font-bold text-pink-800 mb-3 flex items-center">
                    <Heart className="w-6 h-6 mr-3" />
                    Arcano da Alma: {getArcanumCard(result.soulArcanum)?.name}
                  </h4>
                  <div className="bg-pink-50 p-4 rounded-lg mb-4">
                    <p className="text-pink-800 leading-relaxed">
                      <strong>Sua essência interior:</strong> {getArcanumCard(result.soulArcanum)?.description}
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {getArcanumCard(result.soulArcanum)?.keywords.map((keyword, i) => (
                      <span key={i} className="px-3 py-1 bg-pink-100 text-pink-800 rounded-full text-sm">
                        {keyword}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Ano Pessoal */}
                <div className="border-l-4 border-indigo-600 pl-6">
                  <h4 className="text-2xl font-bold text-indigo-800 mb-3 flex items-center">
                    <Calendar className="w-6 h-6 mr-3" />
                    Arcano do Ano {new Date().getFullYear()}: {getArcanumCard(result.yearArcanum)?.name}
                  </h4>
                  <div className="bg-indigo-50 p-4 rounded-lg mb-4">
                    <p className="text-indigo-800 leading-relaxed">
                      <strong>Energias do seu ano pessoal:</strong> {getArcanumCard(result.yearArcanum)?.meaningUpright}
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {getArcanumCard(result.yearArcanum)?.keywords.map((keyword, i) => (
                      <span key={i} className="px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-sm">
                        {keyword}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Arcano do Nome (se calculado) */}
                {result.nameArcanum && (
                  <div className="border-l-4 border-yellow-600 pl-6">
                    <h4 className="text-2xl font-bold text-yellow-800 mb-3 flex items-center">
                      <User className="w-6 h-6 mr-3" />
                      Arcano do Nome: {getArcanumCard(result.nameArcanum)?.name}
                    </h4>
                    <div className="bg-yellow-50 p-4 rounded-lg mb-4">
                      <p className="text-yellow-800 leading-relaxed">
                        <strong>Energia vibratória do seu nome:</strong> {getArcanumCard(result.nameArcanum)?.description}
                      </p>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {getArcanumCard(result.nameArcanum)?.keywords.map((keyword, i) => (
                        <span key={i} className="px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-sm">
                          {keyword}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
                  </>
                )}
              </div>
            </div>

            {/* Síntese Final */}
            <div className="bg-gradient-to-r from-purple-100 to-pink-100 rounded-xl p-8 mb-8">
              <h3 className="text-2xl font-bold text-purple-900 mb-4 text-center">
                {calculationType === 'name' ? 'Mensagem do Seu Arcano do Nome' : 'Síntese dos Seus Arcanos Pessoais'}
              </h3>
              <p className="text-purple-800 text-lg leading-relaxed text-center">
                {calculationType === 'name' ? 
                  `O arcano ${getArcanumCard(result.personalityArcanum)?.name} revela a energia única do seu nome "${name}". 
                  Esta vibração influencia sua personalidade, talentos naturais e missão de vida. 
                  Reflita sobre como essas características se manifestam em sua jornada e use 
                  esse conhecimento para potencializar seus dons naturais.` :
                `Seus arcanos pessoais revelam uma combinação única de energias que influenciam 
                sua jornada de vida. O Arcano da Personalidade mostra como você interage com o mundo, 
                o Arcano da Alma revela seus desejos mais profundos, e o Arcano do Ano indica 
                as oportunidades e desafios do período atual. Use essas informações como guia 
                para o autoconhecimento e crescimento pessoal.`}
              </p>
            </div>

            {/* Botões */}
            <div className="flex justify-center space-x-4">
              <button
                onClick={reset}
                className="px-8 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors font-semibold"
              >
                Novo Cálculo
              </button>
              <button
                onClick={onBack}
                className="px-8 py-3 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors font-semibold"
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

export default PersonalArcanum;