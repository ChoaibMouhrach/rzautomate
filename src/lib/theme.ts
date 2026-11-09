export type Theme = "system" | "light" | "dark";

export const themeStorageKey = "theme";

export const readTheme = (): Theme => {
  try {
    const stored = localStorage.getItem(themeStorageKey);
    return stored === "light" || stored === "dark" ? stored : "system";
  } catch {
    return "system";
  }
};

export const applyTheme = (root: HTMLElement) => {
  const theme = readTheme();
  const dark =
    theme === "dark" ||
    (theme === "system" &&
      window.matchMedia("(prefers-color-scheme: dark)").matches);
  root.classList.toggle("dark", dark);
};
