import { Check, X } from "lucide-react";

export const ChecklistCard = ({
  title,
  items,
  positive,
  badge,
}: {
  title: string;
  items: readonly string[];
  positive: boolean;
  badge: string;
}) => (
  <div className={`flex flex-col rounded-3xl p-6 md:p-8 ${positive ? "bg-ink text-paper" : "bg-muted"}`}>
    <div className="flex items-center justify-between gap-4 px-2 pt-2">
      <h3 className="text-3xl font-semibold leading-tight tracking-tighter">{title}</h3>
      <span className={`shrink-0 rounded-full px-3 py-1 text-sm font-medium ${positive ? "bg-primary text-primary-foreground" : "bg-background text-muted-foreground"}`}>{badge}</span>
    </div>
    <ul className="mt-8 flex flex-1 flex-col gap-2">
      {items.map((item) => (
        <li key={item} className={`flex flex-1 items-center gap-4 rounded-2xl px-4 py-4 ${positive ? "bg-white/10" : "bg-background"}`}>
          <span className={`flex size-9 shrink-0 items-center justify-center rounded-full ${positive ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"}`}>
            {positive ? <Check aria-hidden className="size-5" /> : <X aria-hidden className="size-5" />}
          </span>
          <span className={`font-medium ${positive ? "" : "text-muted-foreground"}`}>{item}</span>
        </li>
      ))}
    </ul>
  </div>
);
