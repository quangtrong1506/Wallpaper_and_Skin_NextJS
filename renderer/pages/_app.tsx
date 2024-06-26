import type { AppProps } from "next/app";

import ReduxProvider from "../redux/provider";
import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <ReduxProvider>
            <Component {...pageProps} />
        </ReduxProvider>
    );
}

export default MyApp;
