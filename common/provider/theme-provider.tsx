"use client";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { type ThemeProviderProps } from "next-themes/dist/types";

export function ThemeProvder({ children, ...prop }: ThemeProviderProps) {
  return <NextThemesProvider {...prop}>{children}</NextThemesProvider>;
}
