'use client'

import { ThemeProvider } from 'styled-components'
import theme from "public/styles/theme";
import { ReactNode } from 'react';
import GlobalStyle from 'public/styles/globalStyles';

const Providers = ({ children }: { children: ReactNode }) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      {children}
    </ThemeProvider>
  )
}

export default Providers;