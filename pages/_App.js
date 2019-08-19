import App from "next/app";
import React from "react";
import { ThemeProvider } from "styled-components";

const theme = {
  colors: {
    primary: "#0070f3",
    secondary: "#FFFFFF"
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
        <Component {...pageProps} />
      </ThemeProvider>
    );
  }
}
