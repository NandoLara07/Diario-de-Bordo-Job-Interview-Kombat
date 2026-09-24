import Image from "next/image";

const MetaPreparation = () => {
  return (
    <ul className="log-list">
      <li>
        Surgiu a ideia de usar o símbolo no centro da tela de escolha de
        profissão como um modo de jogo geral
        <Image
          src="/image35.jpg"
          alt="Proposta de usar o símbolo central da tela de escolha como modo geral"
          width={482}
          height={394}
          className="shot mx-auto my-5"
        />
      </li>

      <li>
        Logo depois, liberamos as outras profissões, criamos novos ícones e
        adicionamos o modo geral, que usa apenas perguntas gerais
      </li>

      <li>
        Organizamos a escala da equipe no estande da META e preparamos brindes
        para quem jogasse: chaveiros e bombons, que só apareciam quando alguém
        vencia a partida
      </li>

      <li>Escrevemos o artigo do projeto para a FEBRACE</li>
    </ul>
  );
};

export default MetaPreparation;
