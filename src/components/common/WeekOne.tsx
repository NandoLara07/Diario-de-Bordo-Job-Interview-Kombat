import Image from "next/image";

const WeekOne = () => {
  return (
    <ul className="list-disc list-inside ml-4">
      <li>
        Na primeira semana, após criarmos o repositório no Github do projeto,
        focamos em criar a identidade visual do site. Por ser um RPG que
        apresenta uma “luta verbal” simulando os jogos de luta, nos inspiramos
        bastante no jogo de videogame “Mortal Kombat”.
        <p className="my-4">
          Foi assim que tivemos a primeira impressão de como o projeto ficaria.
        </p>
        <Image
          src="/image01.png"
          alt="Imagem do design inicial do projeto"
          width={600}
          height={600}
          className="mx-auto rounded-sm"
        />
        <br />
      </li>

      <li>
        Com os botões já posicionados, decidimos fazer o fundo.
        <Image
          src="/image02.png"
          alt="Design do fundo do projeto"
          width={600}
          height={600}
          className="mx-auto my-4 rounded-sm"
        />
      </li>

      <li>
        Criamos o protótipo de como seria o layout da área de regras
        <Image
          src="/image03.png"
          alt="Protótipo do layout da área de regras"
          width={600}
          height={600}
          className="mx-auto my-4 rounded-sm"
        />
      </li>

      <li>
        Adicionamos um som ao passar o mouse pelas opções do Menu
        <div className="w-full max-w-[600px] mx-auto aspect-video my-4">
          <iframe
            src="https://www.youtube.com/embed/LSPjR5Lgi-8?si=rbHw-iLgVA70YCo6"
            title="YouTube video player"
            className="w-full h-full rounded-sm shadow-lg"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
      </li>

      <li>
        Adicionamos animação para a tela de início
        <div className="w-full max-w-[600px] mx-auto aspect-video my-4">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/YMIT5H7AXTA?si=1h82ccV2ZP4yPCNh"
            title="YouTube video player"
            className="w-full h-full rounded-sm"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
      </li>

      <li>
        Finalizamos o design do layout das regras, opções, créditos, e tela de
        carregamento
        <Image
          src="/image04.png"
          alt="Design das regras do projeto"
          width={600}
          height={600}
          className="mx-auto my-4 rounded-sm"
        />
        <Image
          src="/image05.png"
          alt="Design das opções do projeto"
          width={600}
          height={600}
          className="mx-auto my-4 rounded-sm"
        />
        <Image
          src="/image06.png"
          alt="Design dos créditos do projeto"
          width={600}
          height={600}
          className="mx-auto my-4 rounded-sm"
        />
        <Image
          src="/image07.png"
          alt="Design da tela de carregamento do projeto"
          width={600}
          height={600}
          className="mx-auto my-4 rounded-sm"
        />
      </li>

      <li>
        Fizemos o esqueleto funcional dos menus no site
        <div className="w-full max-w-[600px] mx-auto aspect-video my-4">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/FqkZ8RMfrTw?si=dzIOUDZGJUB0oPnS"
            title="YouTube video player"
            className="w-full h-full rounded-sm"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
      </li>

      <li>
        Com o esqueleto já pronto, e os layouts já definidos, decidimos os
        implementar de fato ao site
        <Image
          src="/image08.png"
          alt="Implementação do layout das regras"
          width={600}
          height={600}
          className="mx-auto my-4 rounded-sm"
        />
        <Image
          src="/image09.png"
          alt="Implementação do layout das opções"
          width={600}
          height={600}
          className="mx-auto my-4 rounded-sm"
        />
        <Image
          src="/image10.png"
          alt="Implementação do layout dos créditos"
          width={600}
          height={600}
          className="mx-auto my-4 rounded-sm"
        />
        <Image
          src="/image11.png"
          alt="Implementação da tela de carregamento"
          width={600}
          height={600}
          className="mx-auto my-4 rounded-sm"
        />
      </li>

      <li>
        Após criarmos as telas iniciais, fizemos o design do layout da área de
        “Jogar”
        <Image
          src="/image12.png"
          alt="Design do layout da área de jogar"
          width={600}
          height={600}
          className="mx-auto my-4 rounded-sm"
        />
        <Image
          src="/image13.png"
          alt="Design do layout da área de jogar"
          width={600}
          height={600}
          className="mx-auto my-4 rounded-sm"
        />
      </li>

      <li>
        Para finalizar a primeira semana de desenvolvimento, fizemos o design da
        tela quando o jogo se inicia
        <div className="grid grid-cols-1 gap-x-4 gap-y-4 mt-4 sm:grid-cols-2">
          <Image
            src="/image14.png"
            alt="Design da tela de início do jogo"
            width={300}
            height={300}
            className="w-full h-auto rounded-sm"
          />
          <Image
            src="/image15.png"
            alt="Design da tela de início do jogo"
            width={300}
            height={300}
            className="w-full h-auto rounded-sm"
          />
          <Image
            src="/image16.png"
            alt="Design da tela de início do jogo"
            width={300}
            height={300}
            className="w-full h-auto rounded-sm"
          />
          <Image
            src="/image17.png"
            alt="Design da tela de início do jogo"
            width={300}
            height={300}
            className="w-full h-auto rounded-sm"
          />
          <Image
            src="/image18.png"
            alt="Design da tela de início do jogo"
            width={300}
            height={300}
            className="w-full h-auto rounded-sm"
          />
          <Image
            src="/image19.png"
            alt="Design da tela de início do jogo"
            width={300}
            height={300}
            className="w-full h-auto rounded-sm"
          />
        </div>
        <Image
          src="/image20.png"
          alt="Implementação da tela de carregamento"
          width={600}
          height={600}
          className="mx-auto my-4 rounded-sm"
        />
      </li>
    </ul>
  );
};

export default WeekOne;
