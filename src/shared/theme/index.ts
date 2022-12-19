import { ColorTheme, ScreenTheme, Theme } from '../types/Theme';

import defaultStyled, {
  createGlobalStyle,
  ThemedStyledInterface,
  ThemeProvider as SThemeProvider,
} from 'styled-components';

const themeColors: ColorTheme = {
  red100: 'red',
};

const themeScreens: ScreenTheme = {
  small: 640,
  medium: 768,
  large: 1024,
  xLarge: 1280,
  xxLarge: 1536,
  smallMedia: '@media (min-width: 640px)',
  mediumMedia: '@media (min-width: 768px)',
  largeMedia: '@media (min-width: 1024px)',
  xLargeMedia: '@media (min-width: 1280px)',
  xxLargeMedia: '@media (min-width: 1536px)',
};

export const colors = themeColors;
export const screens = themeScreens;

export const theme = (): Theme => ({ colors: themeColors, screens: themeScreens });
export const ThemeProvider = SThemeProvider;
export const styled: ThemedStyledInterface<Theme> = defaultStyled;
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
