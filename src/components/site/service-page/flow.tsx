import {
  ArrowDown,
  CalendarDays,
  FileText,
  LifeBuoy,
  Mail,
  Megaphone,
  MessageCircle,
  MessageSquare,
} from "lucide-react";
import { LandingHeading, LandingSection, SectionLabel } from "@/components/site/landing-section";
import { logoPaths } from "@/components/site/logo";
import type { FlowContent } from "./types";

const iconMap = {
  message: MessageSquare,
  mail: Mail,
  support: LifeBuoy,
  chat: MessageCircle,
  form: FileText,
  megaphone: Megaphone,
  calendar: CalendarDays,
};
const channelY = [50, 140, 230, 320];
const outcomeY = [30, 140, 250];

const Connector = () => (
  <span aria-hidden className="flex flex-col items-center">
    <span className="beam-link relative h-8 w-px overflow-hidden bg-white/20" />
    <ArrowDown className="size-4 text-white/40" />
  </span>
);

export const Flow = ({ flow }: { flow: FlowContent }) => (
  <LandingSection className="relative overflow-hidden bg-ink text-paper" id="how-it-works">
    <div
      aria-hidden
      className="absolute inset-0 -z-10 opacity-[0.07] [background-image:radial-gradient(circle,#fff_1.5px,transparent_1.5px)] [background-size:22px_22px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]"
    />
    <div className="max-w-3xl">
      <SectionLabel className="text-paper/60">{flow.label}</SectionLabel>
      <LandingHeading className="mt-4">{flow.heading}</LandingHeading>
    </div>

    <svg
      viewBox="0 0 960 380"
      role="img"
      aria-label={`${flow.channels.join(", ")} lead to ${flow.center}, which answers, looks up or hands off`}
      className="mt-14 hidden w-full md:block"
    >
      {flow.channels.map((channel, index) => {
        const y = channelY[index];
        const Icon = iconMap[flow.icons[index]];
        const path = `M 196 ${y} C 320 ${y}, 330 190, 430 190`;
        return (
          <g key={channel}>
            <path d={path} fill="none" className="stroke-white/15" strokeWidth="1.5" />
            <path
              d={path}
              fill="none"
              pathLength="100"
              className="beam-path stroke-primary"
              strokeWidth="2.5"
              strokeLinecap="round"
              style={{ animationDelay: `${index * 0.5}s` }}
            />
            <circle cx="40" cy={y} r="26" className="fill-paper" />
            <Icon x="28" y={y - 12} width="24" height="24" className="text-ink" />
            <text x="80" y={y + 5} className="fill-paper text-[16px] font-medium">
              {channel}
            </text>
          </g>
        );
      })}
      {flow.outcomes.map((outcome, index) => {
        const y = outcomeY[index];
        const cy = y + 45;
        const path = `M 530 190 C 590 190, 600 ${cy}, 660 ${cy}`;
        return (
          <g key={outcome.title}>
            <path d={path} fill="none" className="stroke-white/15" strokeWidth="1.5" />
            <path
              d={path}
              fill="none"
              pathLength="100"
              className="beam-path stroke-primary"
              strokeWidth="2.5"
              strokeLinecap="round"
              style={{ animationDelay: `${1.2 + index * 0.4}s` }}
            />
            <rect x="660" y={y} width="300" height="90" rx="24" className="fill-white/8" />
            <text x="688" y={y + 38} className="fill-paper text-[20px] font-semibold">
              {outcome.title}
            </text>
            <text x="688" y={y + 64} className="fill-paper/60 text-[14px]">
              {outcome.line}
            </text>
          </g>
        );
      })}
      <circle cx="480" cy="190" r="52" className="fill-primary" />
      <svg x="448" y="174" width="64" height="31" viewBox="0 0 1111 542" className="fill-white">
        {logoPaths}
      </svg>
      <text x="480" y="266" textAnchor="middle" className="fill-paper text-[15px] font-medium">
        {flow.center}
      </text>
    </svg>

    <div className="mt-12 flex flex-col items-center gap-2 md:hidden">
      <ul className="grid w-full grid-cols-2 gap-2">
        {flow.channels.map((channel) => (
          <li key={channel} className="rounded-full bg-white/10 px-4 py-3 text-center text-sm font-medium">
            {channel}
          </li>
        ))}
      </ul>
      <Connector />
      <p className="rounded-full bg-primary px-6 py-3 font-medium text-primary-foreground">
        {flow.center}
      </p>
      <Connector />
      <ul className="flex w-full flex-col gap-2">
        {flow.outcomes.map((outcome) => (
          <li key={outcome.title} className="rounded-3xl bg-white/8 p-5">
            <p className="text-lg font-semibold">{outcome.title}</p>
            <p className="mt-1 text-sm text-paper/60">{outcome.line}</p>
          </li>
        ))}
      </ul>
    </div>

    <p className="mt-10 max-w-2xl text-paper/70">{flow.footnote}</p>
  </LandingSection>
);
