import Image from "next/image";

const WeekTwo = () => {
  return (
    <ul className="list-disc list-inside ml-4">
      <li>
        Logo no início da segunda semana, tivemos nossa primeira reunião para
        alinhar as tarefas e organizar melhor o trabalho
      </li>

      <li>
        Após nos organizarmos com a reunião, seguimos fazendo o design de como
        seriam as telas quando um dos times ganhasse o jogo
        <div className="grid grid-cols-1 gap-x-4 gap-y-4 mt-4 sm:grid-cols-2 pb-4">
          <Image
            src="/image21.png"
            alt="Design da tela de início do jogo"
            width={300}
            height={300}
            className="w-full h-auto rounded-sm"
          />
          <Image
            src="/image22.png"
            alt="Design da tela de início do jogo"
            width={300}
            height={300}
            className="w-full h-auto rounded-sm"
          />
          <Image
            src="/image23.png"
            alt="Design da tela de início do jogo"
            width={300}
            height={300}
            className="w-full h-auto rounded-sm"
          />
          <Image
            src="/image24.png"
            alt="Design da tela de início do jogo"
            width={300}
            height={300}
            className="w-full h-auto rounded-sm"
          />
        </div>
      </li>

      <li>
        Na reunião decidimos armazenar as perguntas gerais e específicas dentro
        de um arquivo JSON, para que fossem exibidas de forma aleatória durante
        o jogo
        <Image
          src="/image25.png"
          alt="Design do fundo do projeto"
          width={600}
          height={600}
          className="mx-auto my-4 rounded-sm"
        />
      </li>
    </ul>
  );
};

export default WeekTwo;
