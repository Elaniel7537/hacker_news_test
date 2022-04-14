import type { AppProps } from "next/app";
import Head from "next/head";
import { Provider } from "react-redux";
import { store } from "@app/store";
import { ConfigProvider } from "antd";
import MainComponent from "@components/layouts/MainComponent";

import "@styles/globals.css";
import es from "antd/lib/locale/es_ES";

const MyApp: any = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <title>HACKER NEWS</title>
      </Head>
      <ConfigProvider locale={es}>
        <Provider store={store}>
          <MainComponent>
            <Component {...pageProps} />
          </MainComponent>
        </Provider>
      </ConfigProvider>
    </>
  );
};

export default MyApp;
