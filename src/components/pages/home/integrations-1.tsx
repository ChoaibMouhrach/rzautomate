import { Logo } from "@/components/site/logo";
import { why } from "./content";

const columnLayout = [
  [0, 1],
  [2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12, 13],
  [14, 15, "rz", 16, 17],
  [18, 19, 20, 21, 22],
  [23, 24, 25, 26],
  [27, 28, 29],
  [30, 31],
] as const;

const tile =
  "relative flex aspect-square w-full items-center justify-center rounded-lg shadow-[0px_1px_2px_-1px_rgba(0,0,0,0.08),0px_2px_4px_0px_rgba(0,0,0,0.06)]";

const IntegrationCard = ({ app }: { app: (typeof why.logos)[number] }) => (
  <div className={`${tile} bg-background dark:bg-white`}>
    <img
      src={app.src}
      alt={app.name}
      loading="lazy"
      className="size-2/5 object-contain"
    />
  </div>
);

const BrandCard = () => (
  <div className={`${tile} bg-primary`}>
    <Logo className="h-auto w-3/5 fill-primary-foreground" />
  </div>
);

export const Integrations1 = () => (
  <div>
    <div className="grid grid-cols-4 gap-2 sm:grid-cols-6 md:hidden">
      <BrandCard />
      {why.logos.map((app) => (
        <IntegrationCard key={app.name} app={app} />
      ))}
    </div>
    <div className="hidden w-full items-center gap-2 md:flex lg:gap-4">
      {columnLayout.map((column, index) => (
        <div key={index} className="flex min-w-0 flex-1 flex-col gap-2 lg:gap-4">
          {column.map((position) =>
            position === "rz" ? (
              <BrandCard key="rz" />
            ) : (
              <IntegrationCard key={position} app={why.logos[position]} />
            ),
          )}
        </div>
      ))}
    </div>
  </div>
);
