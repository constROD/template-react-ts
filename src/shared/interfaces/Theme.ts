export interface IColorTheme {
  red100: string;
}

export interface IScreenTheme {
  xSmall: number;
  small: number;
  medium: number;
  large: number;
  xLarge: number;
  xSmallMedia: string;
  smallMedia: string;
  mediumMedia: string;
  largeMedia: string;
  xLargeMedia: string;
}

export interface ITheme {
  colors: IColorTheme;
  screens: IScreenTheme;
}
