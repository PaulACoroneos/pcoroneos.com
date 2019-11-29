import App from 'next/app';
import * as React from 'react';
import { ThemeProvider } from 'styled-components';
import { Layout } from '../layout'

export const theme = {
  color: {
    primary: '#6A85B7',
    secondary: '#094074',
    tertiary: '#0D1321',
    quaternary: '#1D2D44',
    quinary: '#3e5c76'

  },
  breakpoints: {
    small: 320,
    medium: 768,
    large: 1200
  },
  spacing: {
    margin: {
      s: 4,
      m: 8,
      l: 12,
      xl: 16
    },
    padding: {
      s: 4,
      m: 8,
      l: 12,
      xl: 16
    }
  }
};

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <ThemeProvider theme={theme}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    );
  }
}
