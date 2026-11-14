import type { ReactNode } from "react";

const linkClass = "flex h-full items-center gap-3 px-5 py-4 focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-ring";

export const DataTable = ({
  headers,
  rows,
  caption,
  highlight,
  hrefs,
}: {
  headers: string[];
  rows: ReactNode[][];
  caption: string;
  highlight?: number;
  hrefs?: (string | undefined)[];
}) => (
  <div className="overflow-x-auto rounded-3xl bg-muted px-2">
    <table className="w-full min-w-xl border-separate border-spacing-x-0 border-spacing-y-2 text-left">
      <caption className="sr-only">{caption}</caption>
      <thead>
        <tr>
          {headers.map((header) => (
            <th key={header} scope="col" className="whitespace-nowrap px-5 pb-1 pt-3 text-xs font-medium uppercase tracking-wide text-muted-foreground">{header}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((row, index) => {
          const href = hrefs?.[index];
          const tone = index === highlight ? "bg-ink text-paper" : "bg-background";
          const spacing = href ? "h-px p-0 transition-colors group-hover:bg-ink group-hover:text-paper" : "px-5 py-4";
          return (
            <tr key={index} className="group">
              {row.map((cell, cellIndex) => {
                const content = href ? <a href={href} tabIndex={cellIndex === 0 ? undefined : -1} className={linkClass}>{cell}</a> : cell;
                return cellIndex === 0 ? (
                  <th key={cellIndex} scope="row" className={`${tone} ${spacing} rounded-l-2xl text-left font-semibold`}>{content}</th>
                ) : (
                  <td key={cellIndex} className={`${tone} ${spacing} tabular-nums ${cellIndex === row.length - 1 ? "rounded-r-2xl" : ""}`}>{content}</td>
                );
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  </div>
);
