import { IColorTheme, IScreenTheme, ITheme } from '../interfaces/Theme';

import defaultStyled, {
  createGlobalStyle,
  ThemedStyledInterface,
  ThemeProvider as SThemeProvider,
} from 'styled-components';

const colors: IColorTheme = {
  red100: 'red',
};

const screens: IScreenTheme = {
  bpSmall: '576px',
  bpMedium: '768px',
  bpLarge: '992px',
  bpXlarge: '1200px',
};

export const theme = (): ITheme => ({ colors, screens });
export const ThemeProvider = SThemeProvider;
export const styled: ThemedStyledInterface<ITheme> = defaultStyled;
export const GlobalStyle = createGlobalStyle`
  html, body {
    background: #FAFDFF;
    padding: 0;
    margin: 0;
    height: 100%;
    width: 100%;
    font-size: 14px;
    font-weight: 400;
    font-family: 'Roboto', sans-serif;
  }

  #root {
    display: grid;
    height: 100%;
  }
  
  *, *::before, *::after {
    box-sizing: border-box;
  }
`;
