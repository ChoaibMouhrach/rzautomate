import {
  BarChart3,
  Mail,
  MessageSquare,
  PenLine,
  Receipt,
  UserPlus,
} from "lucide-react";
import { AnimatedList } from "./animated-list";
import { running } from "./content";
import { RunningBeam } from "./running-beam";
import { MonoLabel } from "./section";

const icons = {
  mail: Mail,
  "user-plus": UserPlus,
  receipt: Receipt,
  message: MessageSquare,
  chart: BarChart3,
  pen: PenLine,
};

export const Running = () => (
  <section className="relative overflow-hidden bg-ink py-16 text-paper md:py-28">
    <div className="page-container blur-fade relative grid items-center gap-x-20 gap-y-12 md:grid-cols-2">
      <div className="md:col-span-2">
        <MonoLabel className="text-paper/60">{running.label}</MonoLabel>
        <h2 className="mt-4 text-balance text-4xl font-semibold leading-[1.05] tracking-tighter md:text-5xl">
          {running.heading}
        </h2>
      </div>
      <div>
        <div className="h-96 overflow-hidden mask-[linear-gradient(180deg,black_80%,transparent)]">
          <AnimatedList delay={1600} maxVisible={6} className="gap-3">
            {running.items.map((item) => {
              const Icon = icons[item.icon];
              return (
                <figure
                  key={item.title}
                  className="flex items-center gap-4 rounded-2xl bg-white/5 p-4"
                >
                  <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-primary text-white">
                    <Icon aria-hidden className="size-5" />
                  </span>
                  <figcaption>
                    <span className="block font-medium">{item.title}</span>
                    <span className="block text-sm text-paper/60">
                      {item.meta}
                    </span>
                  </figcaption>
                </figure>
              );
            })}
          </AnimatedList>
        </div>
      </div>
      <div className="flex items-center justify-center self-stretch">
        <RunningBeam />
      </div>
    </div>
  </section>
);
