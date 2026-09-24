import Image from "next/image";

const WeekTwo = () => {
  return (
    <ul className="log-list">
      <li>
        Logo no início da segunda semana, tivemos nossa primeira reunião para
        alinhar as tarefas e organizar melhor o trabalho
      </li>

      <li>
        Durante a reunião também escrevemos o README do repositório, com a
        apresentação do projeto, o funcionamento do jogo, a metodologia GV/GO e
        as tecnologias utilizadas
      </li>

      <li>
        Implementamos no site a tela de escolha de profissão (“Choose your
        job”), com um cartão que explica cada vaga
        <div className="grid grid-cols-1 gap-x-4 gap-y-4 mt-5 sm:grid-cols-2">
          <Image
            src="/image26.jpg"
            alt="Tela de escolha de profissão implementada"
            width={640}
            height={313}
            className="shot w-full h-auto"
          />
          <Image
            src="/image27.jpg"
            alt="Cartão de descrição da profissão de desenvolvedor"
            width={640}
            height={317}
            className="shot w-full h-auto"
          />
        </div>
      </li>

      <li>
        Para não deixar todo o código em um arquivo só, separamos o JavaScript
        por tela. O jogo passou a abrir em uma página própria, recebendo pela
        URL a profissão escolhida (por exemplo, game.html?job=designer), para
        então selecionar as perguntas certas
      </li>

      <li>
        Após nos organizarmos com a reunião, seguimos fazendo o design de como
        seriam as telas quando um dos times ganhasse o jogo
        <div className="grid grid-cols-1 gap-x-4 gap-y-4 mt-5 sm:grid-cols-2">
          <Image
            src="/image21.png"
            alt="Design da tela de vitória do jogo"
            width={600}
            height={352}
            className="shot w-full h-auto"
          />
          <Image
            src="/image22.png"
            alt="Design da tela de vitória do jogo"
            width={600}
            height={347}
            className="shot w-full h-auto"
          />
          <Image
            src="/image23.png"
            alt="Design da tela de vitória do jogo"
            width={600}
            height={339}
            className="shot w-full h-auto"
          />
          <Image
            src="/image24.png"
            alt="Design do placar da partida"
            width={600}
            height={334}
            className="shot w-full h-auto"
          />
        </div>
      </li>

      <li>
        Também fizemos o design das telas da luta e do julgamento: o confronto
        entre os times com os botões de strike, as chamadas para os juízes
        decidirem quem leva dano e a tela de saída do jogo
        <div className="grid grid-cols-1 gap-x-4 gap-y-4 mt-5 sm:grid-cols-2">
          <Image
            src="/image28.jpg"
            alt="Design da tela de confronto entre o Time 1 e o Time 2"
            width={640}
            height={360}
            className="shot w-full h-auto"
          />
          <Image
            src="/image29.jpg"
            alt="Design da tela que anuncia a hora do julgamento"
            width={640}
            height={360}
            className="shot w-full h-auto"
          />
          <Image
            src="/image30.jpg"
            alt="Design da tela em que os juízes decidem quem leva dano"
            width={640}
            height={360}
            className="shot w-full h-auto"
          />
          <Image
            src="/image31.jpg"
            alt="Design da tela de saída do jogo"
            width={640}
            height={360}
            className="shot w-full h-auto"
          />
        </div>
      </li>

      <li>
        Para guiar a implementação, organizamos no Drive uma pasta com todas as
        telas nomeadas e numeradas na ordem em que aparecem no jogo, além de uma
        planilha de planejamento dividida em etapas: identidade visual,
        integração e lógica, mecânicas e transições, e ajustes e efeitos
        sonoros
      </li>

      <li>
        Na reunião decidimos armazenar as perguntas gerais e específicas dentro
        de um arquivo JSON, para que fossem exibidas de forma aleatória durante
        o jogo
        <Image
          src="/image25.png"
          alt="Arquivo JSON com as perguntas gerais e específicas"
          width={600}
          height={321}
          className="shot mx-auto my-5"
        />
      </li>

      <li>Implementamos no site a tela de “Play” de forma funcional</li>

      <li>
        Integramos as telas à lógica do JSON: em cada partida, metade das
        perguntas é geral e a outra metade é específica da profissão escolhida
      </li>

      <li>
        Repensamos o fluxo da partida: em vez de uma tela só para o tempo de
        pensar, a própria tela da pergunta avisa os jogadores para irem
        pensando. Também criamos a tela da hora do debate
      </li>

      <li>
        Fechamos a semana com a base do sistema de votação dos juízes e dos
        cronômetros de resposta
      </li>
    </ul>
  );
};

export default WeekTwo;
