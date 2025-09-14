import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import WeekOne from "@/components/common/WeekOne";
import WeekTwo from "@/components/common/WeekTwo";

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
              <WeekOne />
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value={"item-2"}>
            <AccordionTrigger className="font-oswald font-normal text-2xl text-black">
              Semana 2 (03/08/2025 - 09/08/2025):{" "}
            </AccordionTrigger>

            <AccordionContent className="font-arial text-base text-black">
              <WeekTwo />
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
