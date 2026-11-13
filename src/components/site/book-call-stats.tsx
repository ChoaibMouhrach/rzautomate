import { twMerge } from "tailwind-merge";
import { NumberTicker } from "@/components/ui/number-ticker";
import { stats } from "@/lib/clients";

const [first, second, third] = stats;
const shown = [
  { stat: first, span: "col-span-3" },
  { stat: third, span: "col-span-3" },
  { stat: second, span: "col-span-6" },
];

export const BookCallStats = ({ tone }: { tone: "light" | "dark" }) =>
  shown.map(({ stat, span }) => (
    <li
      key={stat.label}
      className={twMerge(
        "flex flex-col justify-between gap-4 rounded-2xl p-4 sm:p-5",
        span,
        tone === "dark" ? "bg-white/10" : "bg-background",
      )}
    >
      <span className="text-3xl font-semibold tracking-tighter sm:text-4xl">
        <NumberTicker value={stat.value} />
      </span>
      <span
        className={twMerge(
          "text-xs leading-snug sm:text-sm",
          tone === "dark" ? "text-paper/60" : "text-muted-foreground",
        )}
      >
        {stat.label}
      </span>
    </li>
  ));
