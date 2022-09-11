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
  large: 1024,
  xLarge: 1440,
  xSmallMedia: '@media (min-width: 375px)',
  smallMedia: '@media (min-width: 576px)',
  mediumMedia: '@media (min-width: 768px)',
  largeMedia: '@media (min-width: 1024px)',
  xLargeMedia: '@media (min-width: 1440px)',
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
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-tap-highlight-color: transparent;
  }
  *::-webkit-scrollbar {
    display: none;
  }
`;
