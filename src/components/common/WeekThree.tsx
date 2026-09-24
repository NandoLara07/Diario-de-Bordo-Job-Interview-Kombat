import Image from "next/image";

const WeekThree = () => {
  return (
    <ul className="log-list">
      <li>
        Arrumamos os fundos das telas, colocamos as imagens no lugar, corrigimos
        alguns bugs e ajustamos no JavaScript o fluxo entre as telas da partida
        <div className="grid grid-cols-1 gap-x-4 gap-y-4 mt-5 sm:grid-cols-2">
          <Image
            src="/image32.jpg"
            alt="Tela da primeira pergunta implementada no jogo"
            width={640}
            height={318}
            className="shot w-full h-auto"
          />
          <Image
            src="/image33.jpg"
            alt="Tela de vez do Time 1 com o aviso de luta"
            width={640}
            height={316}
            className="shot w-full h-auto"
          />
        </div>
      </li>

      <li>
        A tela de saída ficou pronta e passou a ser carregada pelo JavaScript,
        para poder aparecer em qualquer tela do jogo
      </li>

      <li>
        Adicionamos as barras de vida dos times e melhoramos a etapa em que os
        juízes avaliam as respostas. Nessa parte, definimos que o strike vai para
        o time que será atacado
      </li>

      <li>
        Melhoramos no CSS as transições da contagem regressiva que abre a
        partida
      </li>

      <li>
        Descobrimos que os navegadores restringem bastante o comando do
        JavaScript que fecha a aba. A solução foi fazer a opção de sair levar o
        jogador de volta para a tela inicial
      </li>

      <li>
        A tela de vitória ficou quase pronta, ainda em um HTML separado, para
        depois ser juntada ao código principal
      </li>
    </ul>
  );
};

export default WeekThree;
