"use client";

import { useState, type CSSProperties, type ReactNode } from "react";
import { Flag, Gamepad2, Star, Trophy } from "lucide-react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { cn } from "@/lib/utils";

type StageKind = "pre" | "round" | "extra" | "post";

type Stage = {
  kind: StageKind;
  badge: string;
  label: string;
  period?: string;
  stage: string;
  content: ReactNode;
  number?: number;
};

type StageJourneyProps = {
  stages: Stage[];
  defaultOpen: string[];
};

const stageId = (index: number) => `fase-${index}`;

const badgeStyles: Record<StageKind, string> = {
  pre: "border-arcade-yellow/50 bg-arcade-yellow/10 text-arcade-yellow",
  round: "border-arcade-yellow/50 bg-arcade-yellow/10 text-arcade-yellow",
  extra: "border-arcade-cyan/60 bg-arcade-cyan/10 text-arcade-cyan",
  post: "border-arcade-green/60 bg-arcade-green/10 text-arcade-green",
};

const accentText: Record<StageKind, string> = {
  pre: "text-arcade-yellow",
  round: "text-arcade-yellow",
  extra: "text-arcade-cyan",
  post: "text-arcade-green",
};

const chevronStyles: Record<StageKind, string> = {
  pre: "[&>svg]:text-arcade-yellow",
  round: "[&>svg]:text-arcade-yellow",
  extra: "[&>svg]:text-arcade-cyan",
  post: "[&>svg]:text-arcade-green",
};

const whenOf = (stage: Stage) =>
  stage.period ? `${stage.label} · ${stage.period}` : stage.label;

export default function StageJourney({
  stages,
  defaultOpen,
}: StageJourneyProps) {
  const [open, setOpen] = useState(() =>
    stages.flatMap((stage, index) =>
      defaultOpen.includes(stage.badge) ? [stageId(index)] : [],
    ),
  );
  const [preview, setPreview] = useState<Stage | null>(null);

  const finalRoundIndex = stages.findLastIndex(
    (stage) => stage.kind === "round",
  );

  const goTo = (index: number) => {
    const id = stageId(index);
    const wasOpen = open.includes(id);
    if (!wasOpen) setOpen([...open, id]);

    const scrollToStage = () => {
      const reduceMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;
      document.getElementById(id)?.scrollIntoView({
        behavior: reduceMotion ? "auto" : "smooth",
        block: "start",
      });
    };

    scrollToStage();

    if (!wasOpen) setTimeout(scrollToStage, 250);
  };

  const nodeIcon = (stage: Stage, index: number) => {
    if (index === finalRoundIndex)
      return <Trophy className="size-5" aria-hidden="true" />;
    if (stage.kind === "pre")
      return <Flag className="size-5" aria-hidden="true" />;
    if (stage.kind === "extra")
      return <Star className="size-5" aria-hidden="true" />;
    if (stage.kind === "post")
      return <Gamepad2 className="size-5" aria-hidden="true" />;
    return stage.number;
  };

  return (
    <>
      <section className="neon-panel mt-8 p-5 sm:p-8">
        <div className="flex flex-wrap items-baseline justify-between gap-2">
          <h2 className="font-pixel text-base text-arcade-yellow">
            MAPA DE FASES
          </h2>
          <p className="font-oswald text-sm tracking-wide text-arcade-dim">
            Clique numa fase para ir direto a ela
          </p>
        </div>

        <ol
          className="stage-map mt-6 grid grid-cols-5 sm:grid-cols-[repeat(var(--stages),minmax(0,1fr))]"
          style={{ "--stages": stages.length } as CSSProperties}
        >
          {stages.map((stage, index) => (
            <li key={stageId(index)} className="stage-cell">
              <button
                type="button"
                aria-label={`${stage.badge}: ${stage.stage}`}
                onClick={() => goTo(index)}
                onMouseEnter={() => setPreview(stage)}
                onMouseLeave={() => setPreview(null)}
                onFocus={() => setPreview(stage)}
                onBlur={() => setPreview(null)}
                className={cn(
                  "stage-node font-pixel text-base",
                  open.includes(stageId(index)) && "stage-node-open",
                  index === finalRoundIndex && "stage-node-final",
                  stage.kind === "extra" && "stage-node-extra",
                  stage.kind === "post" && "stage-node-post",
                )}
              >
                {nodeIcon(stage, index)}
              </button>
            </li>
          ))}
        </ol>

        <div className="mt-6 min-h-[4.5rem] border-t border-arcade-line pt-4">
          {preview ? (
            <>
              <p className="flex flex-wrap items-center gap-x-3 gap-y-1">
                <span
                  className={cn(
                    "font-pixel text-base",
                    accentText[preview.kind],
                  )}
                >
                  {preview.badge}
                </span>
                <span className="font-oswald text-sm tracking-wide text-arcade-dim">
                  {whenOf(preview)}
                </span>
              </p>
              <p className="mt-1.5 font-pixel text-base text-arcade-text">
                {preview.stage}
              </p>
            </>
          ) : (
            <p className="font-pixel text-base text-arcade-dim">
              ▶ ESCOLHA UMA FASE
            </p>
          )}
        </div>
      </section>

      <Accordion
        type="multiple"
        value={open}
        onValueChange={setOpen}
        className="mt-8 flex w-full flex-col gap-4"
      >
        {stages.map((stage, index) => (
          <AccordionItem
            key={stageId(index)}
            id={stageId(index)}
            value={stageId(index)}
            className={cn(
              "neon-panel scroll-mt-6 border-b-0 px-4 sm:px-6",
              stage.kind === "extra" && "stage-extra",
              stage.kind === "post" && "stage-post",
            )}
          >
            <AccordionTrigger
              className={cn(
                "gap-4 py-5 [&>svg]:size-5",
                chevronStyles[stage.kind],
              )}
            >
              <span className="flex flex-1 flex-col gap-2.5">
                <span className="flex flex-wrap items-center gap-3">
                  <span
                    className={cn(
                      "inline-flex items-center gap-1.5 border px-2 font-pixel text-base",
                      badgeStyles[stage.kind],
                    )}
                  >
                    {stage.kind === "extra" && (
                      <Star
                        className="size-3.5 fill-current"
                        aria-hidden="true"
                      />
                    )}
                    {stage.badge}
                  </span>
                  <span className="font-oswald text-sm tracking-wide text-arcade-dim">
                    {whenOf(stage)}
                  </span>
                </span>
                <span className="font-pixel text-base leading-snug text-arcade-text sm:text-2xl">
                  {stage.stage}
                </span>
              </span>
            </AccordionTrigger>

            <AccordionContent className="pb-8 text-base text-arcade-text">
              {stage.content}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </>
  );
}
