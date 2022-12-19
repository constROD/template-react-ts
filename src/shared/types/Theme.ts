export interface ColorTheme {
  red100: string;
}

export interface ScreenTheme {
  small: number;
  medium: number;
  large: number;
  xLarge: number;
  xxLarge: number;
  smallMedia: string;
  mediumMedia: string;
  largeMedia: string;
  xLargeMedia: string;
  xxLargeMedia: string;
}

export interface Theme {
  colors: ColorTheme;
  screens: ScreenTheme;
}
