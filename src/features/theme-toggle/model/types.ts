export enum Theme {
  LIGHT = "light",
  DARK = "dark",
}

export type ThemeContextType = [
  theme: Theme,
  setTheme: React.Dispatch<React.SetStateAction<Theme>>
];
