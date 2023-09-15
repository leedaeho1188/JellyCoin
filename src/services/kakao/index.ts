import { kakao } from "@/constants/kakao";
import axios from "axios";
import { signInFirebaseAuth } from "../firebase/auth";

export const getKakaoToken = async(code:string) => {
  await axios.post(kakao.TOKEN_URL, 
    {
      grant_type: 'authorization_code',
      client_id: kakao.API_KEY,
      redirect_uri: kakao.REDIRECT_URI,
      code,
    },
    {headers: {'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'}}
  ).then((res) => {
    getKakaoEmail(res.data.access_token);
  });
}

export const getKakaoEmail = async(access_token:string) => {
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