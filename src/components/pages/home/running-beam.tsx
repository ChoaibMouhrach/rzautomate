import { logoPaths } from "@/components/site/logo";
import { running } from "./content";

const logoFiles: Record<string, string> = {
  Gmail: "gmail",
  HubSpot: "hubspot",
  Slack: "slack",
  Xero: "xero",
  "Google Sheets": "googlesheets",
};

const rowHeight = 60;
const top = 24;

export const RunningBeam = () => {
  const height = top * 2 + rowHeight * (running.tools.length - 1) + 44;
  const centerY = height / 2;

  return (
    <svg
      viewBox={`0 ${top} 394 ${height - top * 2}`}
      role="img"
      aria-label={`${running.tools.join(", ")} connected to RZ Automate`}
      className="w-full"
    >
      {running.tools.map((tool, index) => {
        const y = top + 22 + index * rowHeight;
        const path = `M 44 ${y} C 180 ${y}, 220 ${centerY}, 326 ${centerY}`;
        return (
          <g key={tool}>
            <path
              d={path}
              fill="none"
              className="stroke-white/15"
              strokeWidth="1.5"
            />
            <path
              d={path}
              fill="none"
              pathLength="100"
              className="beam-path stroke-primary"
              strokeWidth="2.5"
              strokeLinecap="round"
              style={{ animationDelay: `${index * 0.5}s` }}
            />
            <circle cx="22" cy={y} r="22" className="fill-paper" />
            <image
              href={`/logos/${logoFiles[tool]}.svg`}
              x="11"
              y={y - 11}
              width="22"
              height="22"
              preserveAspectRatio="xMidYMid meet"
            />
          </g>
        );
      })}
      <circle cx="360" cy={centerY} r="34" className="fill-primary" />
      <svg
        x="337"
        y={centerY - 11}
        width="46"
        height="22.4"
        viewBox="0 0 1111 542"
        className="fill-white"
      >
        {logoPaths}
      </svg>
    </svg>
  );
};
