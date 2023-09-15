'use client'

import { firebase } from "@/constants/firebase";
import { kakao } from "@/constants/kakao";
import axios from "axios";
import { useRouter } from "next/router"
import { useEffect } from "react";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";



export const useAuth = () => {
  const {query, push} = useRouter();

  useEffect(() => {
    if(!query.code) return;
    getKakaoToken(query.code as string);

  }, [query]);

  const getKakaoToken = async(code:string) => {
    await axios.post(kakao.TOKEN_URL, 
      {
        grant_type: 'authorization_code',
        client_id: kakao.API_KEY,
        redirect_uri: kakao.REDIRECT_URI,
        code,
      },
      {headers: {'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'}}
    ).then((res) => {
      console.log(res.data.access_token);
      getKakaoEmail(res.data.access_token);
    });
  }

  const getKakaoEmail = async(access_token:string) => {
    await axios({
      method: 'get',
      url: kakao.USER_INFO_URL,
      headers: {
        Authorization: `Bearer ${access_token}`,
        'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8',
      }
    }).then((res) => {
      const id = res.data.id;
      const email = res.data.kakao_account.email;
      signInFirebaseAuth(email, id);
    })
  }

  const signUpFirebaseAuth = async(email:string, password: string) => {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        localStorage.setItem('uid', user.uid);
        push('/signup');
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      })
  }

  const signInFirebaseAuth = async(email:string, password: string) => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
        localStorage.setItem('uid', user.uid);
      })
      .catch((error) => {
        console.error(error.message);
        const errorMessage = error.message;
        if(errorMessage === 'Firebase: Error (auth/user-not-found).'){
          signUpFirebaseAuth(email, password);
        }
        // console.log(errorCode, errorMessage);
      })
  }

  return {

  }
}