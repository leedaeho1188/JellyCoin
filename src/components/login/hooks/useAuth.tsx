'use client'

import { firebase } from "@/constants/firebase";
import { kakao } from "@/constants/kakao";
import axios from "axios";
import { useRouter } from "next/router"
import { useEffect } from "react";



export const useAuth = () => {
  const {query} = useRouter();

  useEffect(() => {
    console.log(query);
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
      signUpFirebaseAuth(email, id);
    })
  }

  const signUpFirebaseAuth = async(email:string, password: string) => {
    await axios({
      method: 'post',
      url: `${firebase.SIGN_UP_API_URL}?key=${firebase.WEB_API_KEY}`,
      headers: {
        'Content-Type': 'application/json',
      },
      data: {
        email,
        password,
        returnSecureToken: true,
      }
    }).then((res) => {
      console.log(res);
    }).catch((err) => {
      if(err.response.data.error.message === "EMAIL_EXISTS") {
        signInFirebaseAuth(email, password);
      }
    })
  }

  const signInFirebaseAuth = async(email:string, password: string) => {
    await axios({
      method: 'post',
      url: `${firebase.SIGN_IN_API_URL}?key=${firebase.WEB_API_KEY}`,
      headers: {
        'Content-Type': 'application/json',
      },
      data: {
        email,
        password,
        returnSecureToken: true,
      }
    }).then((res) => {
      console.log(res);
    })
  }

  return {

  }
}