import Image from "next/image";

const TutorialAndBanner = () => {
  return (
    <ul className="log-list">
      <li>
        O tutorial foi implementado e entrou no jogo. Ele é aberto por um botão
        no menu principal e, durante o round, balões explicam cada etapa da
        partida enquanto os times respondem
        <Image
          src="/image38.png"
          alt="Botão do tutorial no menu principal"
          width={196}
          height={120}
          className="mx-auto my-5"
        />
        <div className="grid grid-cols-1 gap-y-4">
          <Image
            src="/image39.png"
            alt="Pergunta do tutorial: Why did you quit your last job?"
            width={600}
            height={269}
            className="shot w-full h-auto"
          />
          <Image
            src="/image40.png"
            alt="Balão explicando o jogo e a resposta do Time 2 no tutorial"
            width={600}
            height={270}
            className="shot w-full h-auto"
          />
        </div>
      </li>

      <li>
        O banner do projeto para a 34ª META ficou pronto
        <a
          href="/image36.jpg"
          target="_blank"
          rel="noopener noreferrer"
          className="mx-auto my-5 block w-full max-w-[420px]"
        >
          <Image
            src="/image36.jpg"
            alt="Banner do Job Interview Kombat para a 34ª META"
            width={700}
            height={1050}
            className="shot w-full"
          />
        </a>
        <p className="text-center text-sm text-arcade-dim">
          Clique no banner para ver em tamanho real
        </p>
      </li>
    </ul>
  );
};

export default TutorialAndBanner;
