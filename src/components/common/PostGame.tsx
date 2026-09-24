const suggestionGroups = [
  {
    title: "JOGABILIDADE",
    items: [
      "Mais equipes na partida, com rodízio entre quem responde e quem dá o feedback",
      "Poder escolher o tempo de fala e de decisão",
      "Um botão de confirmação antes de começar cada combate",
      "Strikes ligados aos critérios de avaliação, com mais vidas para cada time",
      "Combates que se adaptam ao nível dos jogadores, com desafios bônus e um tempo que diminui aos poucos",
    ],
  },
  {
    title: "VISUAL",
    items: [
      "Barra de vida com degradê em blocos, mais fiel ao estilo pixel art",
      "Evitar elementos sobrepostos, como os emojis em cima dos botões da tela de saída",
      "Um título mais curto e uma logo mais trabalhada",
    ],
  },
  {
    title: "ACESSIBILIDADE",
    items: [
      "Um modo de cores para daltônicos",
      "Testar o jogo com pessoas disléxicas e neurodivergentes",
    ],
  },
];

const PostGame = () => {
  return (
    <ul className="log-list">
      <li>
        Lembra do PS do Round 5? Foi aqui que ele aconteceu, o jogo ganhou uma
        música nova, feita especialmente para o fundo do jogo
      </li>

      <li>
        Aplicamos o Job Interview Kombat em uma turma de graduação do CEFET-MG
        e, depois de jogar, a turma respondeu a um formulário de satisfação
      </li>

      <li>
        Junto com os elogios, como “você realmente se sente dentro de um jogo”,
        sobre as transições em tela cheia, vieram várias sugestões de melhoria:
        <div className="mt-5 grid gap-4 sm:grid-cols-2">
          {suggestionGroups.map((group, index) => (
            <div
              key={group.title}
              className={
                index === 0
                  ? "border border-arcade-line bg-black/20 p-4 sm:col-span-2"
                  : "border border-arcade-line bg-black/20 p-4"
              }
            >
              <p className="font-pixel text-base text-arcade-green">
                {group.title}
              </p>
              <ul className="mt-3 space-y-2">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="flex gap-2 text-sm leading-relaxed text-arcade-dim"
                  >
                    <span aria-hidden="true" className="text-arcade-green">
                      ›
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </li>

      <li>Essas sugestões vão ajudar a guiar as próximas versões do jogo</li>
    </ul>
  );
};

export default PostGame;
