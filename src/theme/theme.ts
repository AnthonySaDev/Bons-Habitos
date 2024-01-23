import { createTheme } from "@shopify/restyle";

export const palette = {
  redDark: "#BF3B44",
  redMid: "#F3BABD",
  redLight: "#F4E6E7",

  greenDark: "#639339",
  greenMid: "#CBE4B4",
  greenLight: "#E5F0DB",

  gray1: "#1B1D1E",
  gray2: "#333638",
  gray3: "#5C6265",
  gray4: "#B9BBBC",
  gray5: "#DDDEDF",
  gray6: "#EFF0F0",
  gray7: "#FAFAFA",

  white: "#FFFFFF",
  black: "#000000",
};

export const theme = createTheme({
  colors: {
    ...palette,
  },
  spacing: {
    s4: 4,
    s8: 8,
    s10: 10,
    s12: 12,
    s14: 14,
    s16: 16,
    s20: 20,
    s24: 24,
    s32: 32,
    s40: 40,
    s48: 48,
    s56: 56,
  },
  borderRadii: {
    s6:6,
    s8: 8,
    s12: 12,
    s16: 16,
    s50: 50,
  },
  textVariants: {
    defaults: {},
  },
});

export type Theme = typeof theme;

export type ThemeColors = keyof Theme["colors"];
