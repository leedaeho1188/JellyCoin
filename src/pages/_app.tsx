import { AppProps } from "next/app";
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "@/constants/firebase";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { useEffect } from "react";

import '../styles/globals.css';
import { getFirestore } from "firebase/firestore";



function MyApp({ Component, pageProps }: AppProps) {

  useEffect(() => {
    const app = initializeApp(firebaseConfig);
    getAnalytics(app);
    getAuth(app);
    getStorage(app);
    getFirestore(app);
  }, [])

  return (
    <>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp;