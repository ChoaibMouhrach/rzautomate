"use client";

import { Monitor, Moon, Sun } from "lucide-react";
import { useSyncExternalStore } from "react";
import { Select, SelectItem } from "@/components/ui/select";
import {
  applyTheme,
  readTheme,
  themeStorageKey,
  type Theme,
} from "@/lib/theme";

const options = [
  { id: "system", label: "System", icon: Monitor },
  { id: "light", label: "Light", icon: Sun },
  { id: "dark", label: "Dark", icon: Moon },
] as const;

const themeChangeEvent = "theme-change";

const subscribe = (callback: () => void) => {
  window.addEventListener(themeChangeEvent, callback);
  window.addEventListener("storage", callback);
  return () => {
    window.removeEventListener(themeChangeEvent, callback);
    window.removeEventListener("storage", callback);
  };
};

export const ThemeSwitcher = () => {
  const theme = useSyncExternalStore(subscribe, readTheme, () => "system");

  const change = (value: Theme) => {
    try {
      if (value === "system") localStorage.removeItem(themeStorageKey);
      else localStorage.setItem(themeStorageKey, value);
    } catch {}
    applyTheme(document.documentElement);
    window.dispatchEvent(new Event(themeChangeEvent));
  };

  const current = options.find((option) => option.id === theme) ?? options[0];

  return (
    <Select
      aria-label="Theme"
      triggerContent={<current.icon aria-hidden className="size-4" />}
      value={theme}
      onChange={(value) => change(value as Theme)}
      className="w-fit"
    >
      {options.map(({ id, label, icon: Icon }) => (
        <SelectItem key={id} id={id} textValue={label}>
          <Icon aria-hidden className="size-4" />
          {label}
        </SelectItem>
      ))}
    </Select>
  );
};
