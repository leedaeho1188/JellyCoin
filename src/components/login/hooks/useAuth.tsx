'use client'

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
      const email = res.data.kakao_account.email;
      console.log(email);

    })
  }

  return {

  }
}