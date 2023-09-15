import { kakao } from "@/constants/kakao";
import axios from "axios";
import { useRouter } from "next/router"
import { useEffect } from "react";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { getKakaoToken } from "@/services/kakao";



export const useAuth = () => {
  const {query} = useRouter();

  useEffect(() => {
    if(!query.code) return;
    getKakaoToken(query.code as string);
  }, [query]);

  return {

  }
}