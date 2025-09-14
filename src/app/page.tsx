import Image from "next/image";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function Home() {
  return (
    <main className="flex justify-center bg-gray-100 min-h-screen md:p-4 md:py-5">
      <div className="bg-white w-full max-w-[794px] shadow-lg rounded-xl px-10 py-20">
        <h1 className="text-4xl mb-10 text-center font-oswald">
          Diário de bordo - Job Interview Kombat
        </h1>
        <h2 className="font-oswald text-2xl mb-6 underline">
          Desenvolvimento do projeto
        </h2>

        <Accordion type="multiple" className="w-full" defaultValue={["item-1"]}>
          <AccordionItem value={"item-1"}>
            <AccordionTrigger className="font-oswald font-normal text-2xl text-black">
              Semana 1 (27/07/2025 - 02/08/2025):{" "}
            </AccordionTrigger>

            <AccordionContent className="font-arial text-base text-black">
              <ul className="list-disc list-inside ml-4">
                <li>
                  Na primeira semana, após criarmos o repositório no Github do
                  projeto, focamos em criar a identidade visual do site. Por ser
                  um RPG que apresenta uma “luta verbal” simulando os jogos de
                  luta, nos inspiramos bastante no jogo de videogame “Mortal
                  Kombat”.
                  <p className="my-4">
                    Foi assim que tivemos a primeira impressão de como o projeto
                    ficaria.
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
                  Finalizamos o design do layout das regras, opções, créditos, e
                  tela de carregamento
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
                  Com o esqueleto já pronto, e os layouts já definidos,
                  decidimos os implementar de fato ao site
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
                  Após criarmos as telas iniciais, fizemos o design do layout da
                  área de “Jogar”
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
                  Para finalizar a primeira semana de desenvolvimento, fizemos o
                  design da tela quando o jogo se inicia
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
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value={"item-2"}>
            <AccordionTrigger className="font-oswald font-normal text-2xl text-black">
              Semana 2 (03/08/2025 - 09/08/2025):{" "}
            </AccordionTrigger>

            <AccordionContent className="font-arial text-base text-black">
              <p className="font-arial">Conteúdo da semana 2</p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value={"item-3"}>
            <AccordionTrigger className="font-oswald font-normal text-2xl text-black">
              Semana 3 (10/08/2025 - 16/08/2025):{" "}
            </AccordionTrigger>

            <AccordionContent className="font-arial text-base text-black">
              <p className="font-arial">Conteúdo da semana 3</p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value={"item-4"}>
            <AccordionTrigger className="font-oswald font-normal text-2xl text-black">
              Semana 4 (17/08/2025 - 23/08/2025):{" "}
            </AccordionTrigger>

            <AccordionContent className="font-arial text-base text-black">
              <p className="font-arial">Conteúdo da semana 4</p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value={"item-5"}>
            <AccordionTrigger className="font-oswald font-normal text-2xl text-black">
              Semana 5 (24/08/2025 - 30/08/2025):{" "}
            </AccordionTrigger>

            <AccordionContent className="font-arial text-base text-black">
              <p className="font-arial">Conteúdo da semana 5</p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value={"item-6"}>
            <AccordionTrigger className="font-oswald font-normal text-2xl text-black">
              Semana 6 (31/08/2025 - 06/09/2025):{" "}
            </AccordionTrigger>

            <AccordionContent className="font-arial text-base text-black">
              <p className="font-arial">Conteúdo da semana 6</p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value={"item-7"}>
            <AccordionTrigger className="font-oswald font-normal text-2xl text-black">
              Semana 7 (07/09/2025 - 13/09/2025):{" "}
            </AccordionTrigger>

            <AccordionContent className="font-arial text-base text-black">
              <p className="font-arial">Conteúdo da semana 7</p>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </main>
  );
}
