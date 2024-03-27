//Arquivo temporario de dados.
//Serve temporariamente para simular os dados recebidos do back-end

const dadosUser = {
  usuario01: {
    nome: "@SamuelFont01",
    nickName: "Samuel",
    imagem:
      "https://i.pinimg.com/564x/8b/05/a1/8b05a119e51ac632dae59f387bc53328.jpg",
    imagemCapa: "https://images2.alphacoders.com/110/1107088.jpg",
  },
  usuario02: {
    nome: "SamuelBack01",
    nickName: "Samuel",
    imagem:
      "https://b2157270.smushcdn.com/2157270/wp-content/uploads/2021/01/dynquedo-273x300.jpg?lossy=0&strip=1&webp=1",
    imagemCapa:
      "https://www.pichauarena.com.br/wp-content/uploads/2022/01/pain-gaming-line-up-cblol-2022.jpg",
  },
};

const dadosMesa = [
  {
    id: 0,
    image:
      "https://www.nicepng.com/png/detail/128-1280406_view-user-icon-png-user-circle-icon-png.png",
    name: "Lucas",
    title: "Dungeons and Dragons",
    data: "10/08",
    description:
      "Os aventureiros se encontram à beira de uma antiga e misteriosa floresta, conhecida como Bosque Sombrio. Por séculos, a floresta foi assombrada pelo temível Dragão Rubro, uma criatura lendária de escamas vermelhas que domina o local com fogo e fúria. O povo da região vive sob o constante medo da ira do dragão, e agora, um grupo destemido de heróis se prepara para enfrentar o desafio que assola a terra.",
  },
  {
    id: 1,
    image:
      "https://www.nicepng.com/png/detail/128-1280406_view-user-icon-png-user-circle-icon-png.png",
    name: "Samuel",
    title: "As fronteiras do imperio vermelho",
    data: "10/08",
    description:
      "Nossos aventureiros se reúnem em uma agitada cidade portuária chamada Havenbrook. Rumores sobre um fenômeno misterioso cercam a cidade, com relatos de estrelas cadentes que caem em uma direção específica. Os sábios locais acreditam que isso está relacionado à lendária Torre Celestial, um artefato ancestral de poder inimaginável que aparece uma vez a cada século.",
  },
  {
    id: 2,
    image:
      "https://www.nicepng.com/png/detail/128-1280406_view-user-icon-png-user-circle-icon-png.png",
    name: "Arthur",
    title: "Masmorras e Dragões",
    data: "10/08",
    description:
      "Os aventureiros chegam a uma remota e gelada região conhecida como o Abismo Congelado. Uma vez um lugar próspero e habitado, agora está envolto em trevas e frio implacável. Rumores falam de uma antiga maldição que cobriu a terra e aprisionou almas na escuridão.",
  },
  {
    id: 3,
    image:
      "https://www.nicepng.com/png/detail/128-1280406_view-user-icon-png-user-circle-icon-png.png",
    name: "Tamires",
    title: "Contos de Sullmar",
    data: "10/08",
    description:
      "Os aventureiros chegam a uma remota e gelada região conhecida como o Abismo Congelado. Uma vez um lugar próspero e habitado, agora está envolto em trevas e frio implacável. Rumores falam de uma antiga maldição que cobriu a terra e aprisionou almas na escuridão.",
  },
];

const dadosFicha = [
  {
    id: 0,
    name: "Sir Alden",
    image:
      "https://www.pcgamesn.com/wp-content/sites/pcgamesn/2022/12/baldurs-gate-3-patch-9-paladin-oathbreaker.jpg",
    description:
      "Sir Alden, o Paladino de Pacto Quebrado, é um cavaleiro nobre marcado por uma promessa desfeita com uma divindade ancestral. Seu olhar reflete um fardo interno, buscando redenção através da justiça e do combate. Armado com uma espada outrora abençoada, ele trilha seu caminho em busca de reconciliação e expiação.",
    classe: "Paladino do Pacto quebrado",
    xp: "16,500",
  },
  {
    id: 1,
    name: "Casador",
    image:
      "https://i.pinimg.com/564x/e0/22/a3/e022a302a4f6330770feca6605b61f02.jpg",
    description:
      "Casador nasceu em um pequeno vilarejo na borda da Floresta das Sombras, um lugar enigmático e temido por todos na região. Seus olhos eram profundos poços de escuridão, e ele muitas vezes se encontrava vagando na floresta sozinho, atraído pelo poder misterioso que emanava de suas profundezas.",
    classe: "Bruxo",
    xp: "10,330",
  },
  {
    id: 2,
    name: "Aldreth",
    image:
      "https://i0.wp.com/orbedosdragoes.com/wp-content/uploads/2018/01/DD5_Mago_Zoom.png?fit=587%2C434&ssl=1",
    description:
      "Casador começou a estudar essas habilidades incomuns. Ele aprendeu a canalizar a magia que o cercava e a utilizá-la para se comunicar com as criaturas da floresta. Ele se tornou um verdadeiro guardião do local, protegendo-o de ameaças mágicas e mundanas.",
    classe: "Mago",
    xp: "12,330",
  },
  {
    id: 3,
    name: "Bruno",
    image:
      "https://i.pinimg.com/736x/3b/e3/0c/3be30cf28f302431f259025d70404c23--halfling-character-counts.jpg",
    description:
      "Bruno, é um halfling, e é isso apenas, um halfling com adagas, poxa tó sem criatividade, Ah, ele é orfão talvez...",
    classe: "Ladino",
    xp: "6,330",
  },
];

const dados = {
  dadosUser,
  dadosMesa,
  dadosFicha,
};

export default dados;
