import { createTheme } from "@mui/material/styles";

// 卡片的活潑配色：main/end 組成漸層，dark 用在文字上確保對比度
export type CardAccent = { main: string; end: string; dark: string };

export const cardAccents = {
  teal: { main: "#14B8A6", end: "#0EA5E9", dark: "#0F766E" },
  violet: { main: "#8B5CF6", end: "#EC4899", dark: "#6D28D9" },
  amber: { main: "#F59E0B", end: "#F97316", dark: "#B45309" },
  rose: { main: "#F43F5E", end: "#F97316", dark: "#BE123C" },
  sky: { main: "#0EA5E9", end: "#6366F1", dark: "#0369A1" },
} satisfies Record<string, CardAccent>;

export const cardAccentList: CardAccent[] = Object.values(cardAccents);

// 給 Card 的 sx 使用，theme 的 MuiCard 樣式會讀這些 CSS 變數
export function cardAccentVars(accent: CardAccent) {
  return {
    "--card-accent": accent.main,
    "--card-accent-end": accent.end,
    "--card-accent-dark": accent.dark,
  };
}

const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#1A2B4C",
      light: "#3B5272",
      dark: "#0F1B30",
      contrastText: "#FFFFFF",
    },
    secondary: {
      main: "#2DD4BF",
      dark: "#0F9488",
      contrastText: "#0F1B30",
    },
    background: {
      default: "#F7F8FA",
      paper: "#FFFFFF",
    },
    text: {
      primary: "#1A2130",
      secondary: "#5B6472",
    },
  },
  typography: {
    fontFamily:
      'var(--font-noto-sans-tc), "Noto Sans TC", "PingFang TC", "Microsoft JhengHei", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    h1: { fontWeight: 700 },
    h2: { fontWeight: 700 },
    h3: { fontWeight: 700 },
    h4: { fontWeight: 700 },
    h5: { fontWeight: 600 },
    h6: { fontWeight: 600 },
    button: { fontWeight: 600, textTransform: "none" },
  },
  shape: {
    borderRadius: 12,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: { borderRadius: 10 },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: { fontWeight: 500 },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          "--card-accent": "#2DD4BF",
          "--card-accent-end": "#0EA5E9",
          position: "relative",
          overflow: "hidden",
          boxShadow: "0 1px 3px rgba(15, 27, 48, 0.08)",
          background:
            "linear-gradient(160deg, color-mix(in srgb, var(--card-accent) 9%, #FFFFFF) 0%, #FFFFFF 55%)",
          transition: "transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease",
          // 頂部的漸層色條，hover 時變粗
          "&::before": {
            content: '""',
            position: "absolute",
            inset: "0 0 auto 0",
            height: 4,
            background: "linear-gradient(90deg, var(--card-accent), var(--card-accent-end))",
            transition: "height 0.25s ease",
          },
          "&:hover": {
            transform: "translateY(-6px)",
            borderColor: "var(--card-accent)",
            boxShadow:
              "0 18px 36px -14px color-mix(in srgb, var(--card-accent) 55%, transparent)",
          },
          "&:hover::before": {
            height: 6,
          },
          "@media (prefers-reduced-motion: reduce)": {
            transition: "none",
            "&::before": { transition: "none" },
            "&:hover": { transform: "none" },
          },
        },
      },
    },
  },
});

export default theme;
