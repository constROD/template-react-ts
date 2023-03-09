import defaultStyled, {
  createGlobalStyle,
  ThemeProvider as SThemeProvider,
  type ThemedStyledInterface,
  type ThemeProviderComponent,
} from 'styled-components';

const themeColors = {
  red100: 'red',
} as const;

const themeScreens = {
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
} as const;

export const colors = themeColors;
export const screens = themeScreens;

export const theme = () => ({ colors: themeColors, screens: themeScreens });
export const ThemeProvider = SThemeProvider as ThemeProviderComponent<ReturnType<typeof theme>>;
export const styled = defaultStyled as ThemedStyledInterface<ReturnType<typeof theme>>;
export const GlobalStyle = createGlobalStyle`
  html, body {
    padding: 0;
    margin: 0;
    height: 100%;
    width: 100%;
  }

  #root {
    position: relative;
    height: 100%;
    width: 100%;
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
