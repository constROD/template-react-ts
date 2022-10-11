export interface IColorTheme {
  red100: string;
}

export interface IScreenTheme {
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

export interface ITheme {
  colors: IColorTheme;
  screens: IScreenTheme;
}
