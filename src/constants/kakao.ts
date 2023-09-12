

export const REST_API_KEY = process.env.KAKAO_REST_API_KEY;
export const REDIRECT_URI = 'http://localhost:3000/auth';

export const KAKAO_AUTHORIZE_URL = 'https://kauth.kakao.com/oauth/authorize';
export const KAKAO_TOKEN_URL = 'https://kauth.kakao.com/oauth/token';


export const kakao = {
  API_KEY: process.env.KAKAO_REST_API_KEY,
  REDIRECT_URI: 'http://localhost:3000/auth',
  AUTHORIZE_URL: 'https://kauth.kakao.com/oauth/authorize',
  TOKEN_URL: 'https://kauth.kakao.com/oauth/token',
  USER_INFO_URL: 'https://kapi.kakao.com/v2/user/me',
}