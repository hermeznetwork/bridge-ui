/* eslint-disable @typescript-eslint/no-unsafe-assignment */
export const theme = {
  breakpoints: {
    upSm: "@media (min-width: 480px)",
  },
  hoverTransition: "all 150ms",
  maxWidth: 644,
  palette: {
    black: import.meta.env.VITE_THEME_COLOR_BLACK || "#0a0b0d",
    error: {
      light: import.meta.env.VITE_THEME_COLOR_ERROR_LIGHT || "rgba(232,67,12,0.1)",
      main: import.meta.env.VITE_THEME_COLOR_ERROR_MAIN || "#e8430d",
    },
    grey: {
      dark: import.meta.env.VITE_THEME_COLOR_GREY_DARK || "#78798d",
      light: import.meta.env.VITE_THEME_COLOR_GREY_LIGHT || "#f0f1f6",
      main: import.meta.env.VITE_THEME_COLOR_GREY_MAIN || "#e2e5ee",
      veryDark: import.meta.env.VITE_THEME_COLOR_GREY_VERY_DARK || "#363740",
    },
    primary: {
      dark: import.meta.env.VITE_THEME_COLOR_PRIMARY_DARK || "#5a1cc3",
      main: import.meta.env.VITE_THEME_COLOR_PRIMARY_MAIN || "#7b3fe4",
    },
    success: {
      light: import.meta.env.VITE_THEME_COLOR_SUCCESS_LIGHT || "rgba(0,255,0,0.1)",
      main: import.meta.env.VITE_THEME_COLOR_SUCCESS_MAIN || "#54DC04",
    },
    transparency: import.meta.env.VITE_THEME_COLOR_TRANSPARENCY || "rgba(8,17,50,0.5)",
    warning: {
      light: import.meta.env.VITE_THEME_COLOR_WARNING_LIGHT || "rgba(225,126,38,0.1)",
      main: import.meta.env.VITE_THEME_COLOR_WARNING_MAIN || "#e17e26",
    },
    white: import.meta.env.VITE_THEME_COLOR_WHITE || "#ffffff",
  },
  spacing: (value: number): number => value * 8,
};

export type Theme = typeof theme;
