import DefaultLayout from "@/layouts/default";
import DefaultProviders from "@/layouts/providers";
import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <DefaultProviders>
      <DefaultLayout>
        <Component {...pageProps} />
      </DefaultLayout>
    </DefaultProviders>
  );
}

export default MyApp;
