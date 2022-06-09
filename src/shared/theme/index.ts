import { IColorTheme, IScreenTheme, ITheme } from '../interfaces/Theme';

import defaultStyled, {
  createGlobalStyle,
  ThemedStyledInterface,
  ThemeProvider as SThemeProvider,
} from 'styled-components';

const themeColors: IColorTheme = {
  red100: 'red',
};

const themeScreens: IScreenTheme = {
  xSmall: 375,
  small: 576,
  medium: 768,
  large: 992,
  xLarge: 1200,
  xSmallMedia: '@media (min-width: 375px)',
  smallMedia: '@media (min-width: 576px)',
  mediumMedia: '@media (min-width: 768px)',
  largeMedia: '@media (min-width: 992px)',
  xLargeMedia: '@media (min-width: 1200px)',
};

export const colors = themeColors;
export const screens = themeScreens;

export const theme = (): ITheme => ({ colors: themeColors, screens: themeScreens });
export const ThemeProvider = SThemeProvider;
export const styled: ThemedStyledInterface<ITheme> = defaultStyled;
export const GlobalStyle = createGlobalStyle`
  html, body {
    padding: 0;
    margin: 0;
    height: 100%;
    width: 100%;
  }

  #root {
    display: grid;
    height: 100%;
  }
  
  *, *::before, *::after {
    box-sizing: border-box;
    -ms-overflow-style: none; 
    scrollbar-width: none;
  }
  *::-webkit-scrollbar {
    display: none;
  }
`;
