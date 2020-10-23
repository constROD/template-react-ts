export interface IColorTheme {
  primary: string;
  primaryLight: string;
  secondary: string;
  secondaryLight: string;
  bgPrimary: string;
  bgSecondary: string;
}

export interface IScreenTheme {
  bpSmall: string;
  bpMedium: string;
  bpLarge: string;
  bpXlarge: string;
}

export interface ITheme {
  colors: IColorTheme;
  screens: IScreenTheme;
}