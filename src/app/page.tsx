import AboutGame from "@/components/common/AboutGame";
import StageJourney from "@/components/common/StageJourney";

import PreGame from "@/components/common/PreGame";
import WeekOne from "@/components/common/WeekOne";
import WeekTwo from "@/components/common/WeekTwo";
import WeekThree from "@/components/common/WeekThree";
import WeekFour from "@/components/common/WeekFour";
import WeekFive from "@/components/common/WeekFive";
import WeekSix from "@/components/common/WeekSix";
import TutorialWeeks from "@/components/common/TutorialWeeks";
import TutorialAndBanner from "@/components/common/TutorialAndBanner";
import Snept2025 from "@/components/common/Snept2025";
import MetaPreparation from "@/components/common/MetaPreparation";
import Meta2025 from "@/components/common/Meta2025";
import PostGame from "@/components/common/PostGame";

const preGame = {
  label: "Preparação",
  period: "24/06/2025 - 26/07/2025",
  stage: "PLANEJAMENTO",
  content: <PreGame />,
};

const rounds = [
  {
    label: "Semana 1",
    period: "27/07/2025 - 02/08/2025",
    stage: "IDENTIDADE VISUAL",
    content: <WeekOne />,
  },
  {
    label: "Semana 2",
    period: "03/08/2025 - 09/08/2025",
    stage: "TELAS DA LUTA E INTEGRAÇÃO",
    content: <WeekTwo />,
  },
  {
    label: "Semana 3",
    period: "10/08/2025 - 16/08/2025",
    stage: "JULGAMENTO E BARRAS DE VIDA",
    content: <WeekThree />,
  },
  {
    label: "Semana 4",
    period: "17/08/2025 - 23/08/2025",
    stage: "AJUSTES E TELA DE VITÓRIA",
    content: <WeekFour />,
  },
  {
    label: "Semana 5",
    period: "24/08/2025 - 30/08/2025",
    stage: "MÚSICA E SITE NO AR",
    content: <WeekFive />,
  },
  {
    label: "Semana 6",
    period: "31/08/2025 - 06/09/2025",
    stage: "VERSÃO 1.0",
    content: <WeekSix />,
  },
  {
    label: "Semanas 7 e 8",
    period: "07/09/2025 - 20/09/2025",
    stage: "IDEIA DE UM TUTORIAL",
    content: <TutorialWeeks />,
  },
  {
    label: "Semanas 9 e 10",
    period: "21/09/2025 - 04/10/2025",
    stage: "TUTORIAL E BANNER",
    content: <TutorialAndBanner />,
  },
  {
    label: "Semana 11",
    period: "05/10/2025 - 11/10/2025",
    stage: "SNEPT EM BRASÍLIA",
    content: <Snept2025 />,
    extra: true,
  },
  {
    label: "Semana 12",
    period: "12/10/2025 - 18/10/2025",
    stage: "RETA FINAL PARA A META",
    content: <MetaPreparation />,
  },
  {
    label: "Semanas 13 a 16",
    period: "19/10/2025 - 15/11/2025",
    stage: "META 2025",
    content: <Meta2025 />,
  },
];

const postGame = {
  label: "Depois da META",
  stage: "NOVA MÚSICA E FEEDBACK",
  content: <PostGame />,
};

let roundNumber = 0;
const entries = [
  { kind: "pre" as const, badge: "PRÉ-JOGO", ...preGame },
  ...rounds.map((round) => {
    if (round.extra)
      return { kind: "extra" as const, badge: "ROUND EXTRA", ...round };
    roundNumber += 1;
    return {
      kind: "round" as const,
      badge: `ROUND ${roundNumber}`,
      number: roundNumber,
      ...round,
    };
  }),
  { kind: "post" as const, badge: "PÓS-JOGO", ...postGame },
];

export default function Home() {
  return (
    <main className="arcade-grid relative min-h-screen overflow-hidden">
      <div className="crt-overlay" aria-hidden="true" />
      <div className="arcade-glow" aria-hidden="true" />

      <div className="relative mx-auto w-full max-w-[880px] px-4 py-14 sm:px-6 md:py-20">
        <header className="text-center">
          <p className="font-pixel text-base tracking-widest text-arcade-cyan">
            CEFET-MG · 2025
          </p>

          <h1 className="title-kombat mt-7 font-arcade text-[1.35rem] leading-[1.7] sm:text-3xl md:text-4xl">
            JOB INTERVIEW
            <br />
            KOMBAT
          </h1>

          <p className="mt-8 inline-block bg-arcade-yellow px-4 py-2 font-pixel text-base text-arcade-bg">
            DIÁRIO DE BORDO
          </p>

          <p className="mx-auto mt-7 max-w-[56ch] text-sm text-arcade-dim sm:text-base">
            O registro semana a semana do desenvolvimento do nosso RPG de
            entrevistas de emprego: dos primeiros rascunhos da identidade visual
            até as apresentações em Brasília e na 34ª META.
          </p>
        </header>

        <AboutGame />

        <StageJourney stages={entries} defaultOpen={["ROUND 1"]} />

        <footer className="mt-16 text-center">
          <p className="blink font-pixel text-base text-arcade-pink">
            ▶ CONTINUA...
          </p>
          <p className="easter-egg mx-auto mt-3 w-fit font-pixel text-base text-arcade-dim cursor-pointer">
            JOB INTERVIEW KOMBAT 2.0?...
          </p>
          <p className="mt-8 font-oswald text-sm tracking-wider text-arcade-dim">
            Job Interview Kombat · Diário de bordo · CEFET-MG
          </p>
        </footer>
      </div>
    </main>
  );
}
