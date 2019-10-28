import App from 'next/app';
import * as React from 'react';
import { ThemeProvider } from 'styled-components';
import { Layout } from '../layout'

const theme = {
  colors: {
    primary: '#666699',
    secondary: '#2e3532',
    tertiary: '#c7cedb',
    quaternary: '#a0aab2',
    quinary: '#122932'

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
