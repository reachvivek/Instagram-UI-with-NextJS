import App from "next/app";
import Head from "next/head";
import React from "react";
import styled, { ThemeProvider } from "styled-components";
import { theme } from "../styles/theme";
import { GlobalStyles } from "../styles/global";
import Sidebar from "../components/Sidebar/Sidebar";
import Layout from "../components/Layout";

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <ThemeProvider theme={theme}>
        <Head>
          <link
            href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700;900&display=swap"
            rel="stylesheet"
          />
        </Head>
        <GlobalStyles />
        <Sidebar />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    );
  }
}

const Container = styled.div``;
