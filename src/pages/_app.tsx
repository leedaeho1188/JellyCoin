import { AppProps } from "next/app";
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "@/constants/firebase";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { useEffect } from "react";

import '../styles/globals.css';
import { getFirestore } from "firebase/firestore";
import { Layout } from "@/components/common/layout/Layout";
import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import { amber, brown, orange } from "@mui/material/colors";
import { RecoilRoot } from "recoil";
import { DebugObserver } from "@/recoil/DebugObserver";



function MyApp({ Component, pageProps }: AppProps) {

  useEffect(() => {
    const app = initializeApp(firebaseConfig);
    getAnalytics(app);
    getAuth(app);
    getStorage(app);
    getFirestore(app);
  }, [])

  const defaultTheme = createTheme({
    palette: {
      primary: amber,
      secondary: brown
    }
  });

  return (
    <RecoilRoot>
      {/* <DebugObserver/> */}
      <ThemeProvider theme={defaultTheme}  >
        <CssBaseline/>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </RecoilRoot>
  )
}

export default MyApp;