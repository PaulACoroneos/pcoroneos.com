import * as React from 'react';
import { ThemeProvider } from 'styled-components';
import { render } from '@testing-library/react';
import { theme } from './pages/_app'

export const renderWithTheme = (children: any) =>
    render(
        <ThemeProvider theme={theme}>
            {children}
        </ThemeProvider>
    );


