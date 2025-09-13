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
      <div className="bg-white w-full max-w-[794px] shadow-lg rounded-lg px-10 py-20">
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
                    alt="Imagem do design inicial do projeto"
                    width={600}
                    height={600}
                    className="mx-auto my-4 rounded-sm"
                  />
                </li>

                <li>
                  Criamos o protótipo de como seria o layout da área de regras
                  <Image
                    src="/image03.png"
                    alt="Imagem do design inicial do projeto"
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
