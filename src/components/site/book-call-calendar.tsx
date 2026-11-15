import Cal, { getCalApi } from "@calcom/embed-react";
import { useEffect, useState } from "react";
import { site } from "@/lib/site";

const brand = "#ff4133";

const cssVarsPerTheme = {
  light: {
    "cal-bg": "#f4f4f5",
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
    "cal-bg": "#18181b",
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
      className={`flex flex-1 flex-col rounded-3xl p-2 sm:p-3 ${isDark ? "bg-[#18181b]" : "bg-muted"}`}
    >
      <Cal
        namespace="30min"
        calLink="rzautomate/30min"
        style={{ width: "100%", overflow: "auto" }}
        config={{
          layout: "column_view",
          useSlotsViewOnSmallScreen: "true",
          theme,
        }}
      />
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
