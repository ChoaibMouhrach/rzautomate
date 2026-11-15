import Cal, { getCalApi } from "@calcom/embed-react";
import { useEffect, useState } from "react";
import { site } from "@/lib/site";

const brand = "#ff4133";

const cssVarsPerTheme = {
  light: {
    "cal-bg": "#ffffff",
    "cal-bg-muted": "#f4f4f5",
    "cal-bg-subtle": "#f4f4f5",
    "cal-bg-emphasis": "#e4e2da",
    "cal-border": "#e4e2da",
    "cal-border-subtle": "#e4e2da",
    "cal-text": "#171717",
    "cal-text-emphasis": "#171717",
    "cal-text-subtle": "#5c5f66",
    "cal-text-muted": "#5c5f66",
    "cal-brand": brand,
    "cal-brand-emphasis": "#e8372a",
    "cal-brand-text": "#ffffff",
  },
  dark: {
    "cal-bg": "#0a0a0a",
    "cal-bg-muted": "#18181b",
    "cal-bg-subtle": "#18181b",
    "cal-bg-emphasis": "#27272a",
    "cal-border": "#27272a",
    "cal-border-subtle": "#27272a",
    "cal-text": "#ededed",
    "cal-text-emphasis": "#fafaf7",
    "cal-text-subtle": "#a1a1aa",
    "cal-text-muted": "#a1a1aa",
    "cal-brand": brand,
    "cal-brand-emphasis": "#ff5a4d",
    "cal-brand-text": "#ffffff",
  },
};

export const BookCallCalendar = ({
  tone = "light",
}: {
  tone?: "light" | "dark";
}) => {
  const [siteDark, setSiteDark] = useState(false);
  const isDark = tone === "dark" || siteDark;
  const theme = isDark ? "dark" : "light";

  useEffect(() => {
    const root = document.documentElement;
    const sync = () => setSiteDark(root.classList.contains("dark"));
    sync();
    const observer = new MutationObserver(sync);
    observer.observe(root, { attributes: true, attributeFilter: ["class"] });
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    (async () => {
      const cal = await getCalApi({ namespace: "30min" });
      cal("ui", {
        hideEventTypeDetails: false,
        layout: "column_view",
        theme,
        cssVarsPerTheme,
        styles: { branding: { brandColor: brand } },
      });
    })();
  }, [theme]);

  return (
    <div
      className={`flex flex-1 flex-col rounded-3xl p-2 sm:p-3 ${isDark ? "bg-white/5" : "bg-muted"}`}
    >
      <div className="relative min-h-152 flex-1 lg:min-h-0">
        <div
          className={`absolute inset-0 flex items-center overflow-hidden rounded-2xl ${isDark ? "bg-[#0a0a0a]" : "bg-white"}`}
        >
          <Cal
            namespace="30min"
            calLink="rzautomate/30min"
            style={{
              width: "100%",
              maxHeight: "100%",
              overflow: "auto",
            }}
            config={{
              layout: "column_view",
              useSlotsViewOnSmallScreen: "true",
              theme,
            }}
          />
        </div>
      </div>
      <p
        className={`mt-3 px-2 text-center text-sm ${isDark ? "text-paper/60" : "text-muted-foreground"}`}
      >
        Or book directly at{" "}
        <a
          href={site.bookingUrl}
          className="font-medium underline underline-offset-4"
        >
          {site.bookingUrl.replace("https://", "")}
        </a>
      </p>
    </div>
  );
};
