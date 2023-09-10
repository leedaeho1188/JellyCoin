/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    KAKAO_REST_API_KEY: process.env.NEXT_KAKAO_REST_API_KEY,
  },
  images: {
    domains: ['k.kakaocdn.net'],
  }
}

module.exports = nextConfig
