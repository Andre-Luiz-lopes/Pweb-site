const quizQuestions = [
  {
    question: "Qual é o nome completo do protagonista de Hajime no Ippo?",
    options: ["Ippo Makunouchi", "Takeshi Sendou", "Mamoru Takamura", "Ichiro Miyata"],
    answer: "Ippo Makunouchi"
  },
  {
    question: "Qual é o golpe especial de Ippo?",
    options: ["Dempsey Roll", "Gazelle Punch", "Dragon Fish Blow", "Counter"],
    answer: "Dempsey Roll"
  },
  {
    question: "Quem é o treinador de Ippo?",
    options: ["Genji Kamogawa", "Mamoru Takamura", "Ichiro Miyata", "Ryo Mashiba"],
    answer: "Genji Kamogawa"
  },
  {
    question: "Qual é o apelido de Mamoru Takamura?",
    options: ["O Monstro", "O Falcão", "O Dragão", "O Tigre"],
    answer: "O Falcão"
  },
  {
    question: "Qual boxeador é conhecido pelo 'Flicker Jab'?",
    options: ["Ichiro Miyata", "Ryo Mashiba", "Takeshi Sendou", "Ippo Makunouchi"],
    answer: "Ryo Mashiba"
  },
  {
    question: "Quem é o rival mais antigo de Ippo?",
    options: ["Ichiro Miyata", "Takeshi Sendou", "Ryo Mashiba", "Masaru Aoki"],
    answer: "Ichiro Miyata"
  },
  {
    question: "Qual destes NÃO é um membro do ginásio Kamogawa?",
    options: ["Masaru Aoki", "Tatsuya Kimura", "Ryo Mashiba", "Mamoru Takamura"],
    answer: "Ryo Mashiba"
  },
  {
    question: "Qual é o sonho de Ippo?",
    options: ["Descobrir o que significa ser forte", "Ser campeão mundial", "Ser treinador", "Ser empresário"],
    answer: "Descobrir o que significa ser forte"
  },
  {
    question: "Quem é o campeão japonês dos pesos-pena quando Ippo começa a lutar?",
    options: ["Eiji Date", "Ryo Mashiba", "Ichiro Miyata", "Takeshi Sendou"],
    answer: "Eiji Date"
  },
  {
    question: "Qual destes golpes Ippo NÃO usa?",
    options: ["Sonic Blow", "Dempsey Roll", "Gazelle Punch", "Liver Blow"],
    answer: "Sonic Blow"
  },
  {
    question: "Qual destes personagens é famoso pelo 'Counter'?",
    options: ["Ichiro Miyata", "Ippo Makunouchi", "Takeshi Sendou", "Eiji Date"],
    answer: "Ichiro Miyata"
  },
  {
    question: "Quem é o boxeador que trabalha em uma loja de flores?",
    options: ["Ryo Mashiba", "Ippo Makunouchi", "Tatsuya Kimura", "Takeshi Sendou"],
    answer: "Ryo Mashiba"
  },
  {
    question: "Qual é o nome do ginásio rival do Kamogawa?",
    options: ["Ono Boxing Gym", "Shinoda Boxing Gym", "Hachinohe Boxing Gym", "Naniwa Boxing Club"],
    answer: "Naniwa Boxing Club"
  }
];

const personagens = [
  {
    nome: "Ippo Makunouchi",
    imagem: "/images/ippo.png",
    opcoes: ["Ippo Makunouchi", "Mamoru Takamura", "Ichiro Miyata", "Ryo Mashiba"]
  },
  {
    nome: "Mamoru Takamura",
    imagem: "/images/takamura.jpg",
    opcoes: ["Ippo Makunouchi", "Mamoru Takamura", "Takeshi Sendou", "Masaru Aoki"]
  },
  {
    nome: "Ichiro Miyata",
    imagem: "/images/miyata.jpg",
    opcoes: ["Ichiro Miyata", "Ryo Mashiba", "Tatsuya Kimura", "Eiji Date"]
  },
  {
    nome: "Ryo Mashiba",
    imagem: "/images/mashiba.jpg",
    opcoes: ["Ryo Mashiba", "Ippo Makunouchi", "Mamoru Takamura", "Takeshi Sendou"]
  }
  // Adicione mais personagens se quiser
];

module.exports = { quizQuestions, personagens };