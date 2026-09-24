import { Play } from "lucide-react";

const GAME_URL = "https://pedroaugusto08.github.io/Job-Interview-Kombat/";

const steps = [
  {
    title: "ESCOLHA A VAGA",
    text: "Os times escolhem uma profissão, como desenvolvedor ou designer, ou jogam no modo geral.",
  },
  {
    title: "RESPONDA EM INGLÊS",
    text: "A cada round, os times respondem a perguntas de entrevista antes que o tempo acabe.",
  },
  {
    title: "OS JUÍZES DECIDEM",
    text: "Os juízes avaliam as respostas e escolhem qual time leva o strike. Vence quem resistir até o fim.",
  },
];

const criteria = ["CLAREZA", "CONFIANÇA", "RELEVÂNCIA", "ORIGINALIDADE"];

const AboutGame = () => {
  return (
    <section className="neon-panel mt-14 p-5 sm:p-8">
      <h2 className="font-pixel text-base text-arcade-yellow">SOBRE O JOGO</h2>

      <p className="mt-4 leading-relaxed text-arcade-text">
        O Job Interview Kombat é um RPG para treinar entrevistas de emprego em
        inglês, criado na disciplina de Inglês Instrumental do CEFET-MG, Campus
        Divinópolis. Inspirado nos jogos de luta, ele transforma a entrevista em
        uma batalha verbal entre dois times.
      </p>

      <ol className="mt-6 grid gap-4 sm:grid-cols-3">
        {steps.map((step, index) => (
          <li
            key={step.title}
            className="border border-arcade-line bg-black/20 p-4"
          >
            <span className="flex items-center gap-3">
              <span className="flex size-7 shrink-0 items-center justify-center bg-arcade-yellow font-pixel text-base text-arcade-bg">
                {index + 1}
              </span>
              <span className="font-pixel text-base leading-snug text-arcade-text">
                {step.title}
              </span>
            </span>
            <p className="mt-3 text-sm leading-relaxed text-arcade-dim">
              {step.text}
            </p>
          </li>
        ))}
      </ol>

      <div className="mt-6">
        <p className="font-oswald text-sm tracking-wide text-arcade-dim">
          Os juízes avaliam
        </p>
        <ul className="mt-2 flex flex-wrap gap-2">
          {criteria.map((criterion) => (
            <li
              key={criterion}
              className="border border-arcade-pink/60 bg-arcade-pink/10 px-2 font-pixel text-base text-arcade-pink"
            >
              {criterion}
            </li>
          ))}
        </ul>
      </div>

      <p className="mt-6 text-sm leading-relaxed text-arcade-dim">
        O jogo aplica a metodologia ativa GV/GO: quem joga forma o Grupo de
        Vivência, e os juízes e colegas que assistem formam o Grupo de
        Observação.
      </p>

      <div className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-3">
        <a
          href={GAME_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="arcade-button font-pixel text-base"
        >
          <Play className="size-4 fill-current" aria-hidden="true" />
          JOGAR AGORA
        </a>
        <span className="text-sm text-arcade-dim">abre em uma nova aba</span>
      </div>
    </section>
  );
};

export default AboutGame;
