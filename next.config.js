/** @type {import('next').NextConfig} */

const path = require('path');

const nextConfig = {
  env: {
    KAKAO_REST_API_KEY: process.env.NEXT_KAKAO_REST_API_KEY,
    FIREBASE_WEB_API_KEY: process.env.NEXT_FIREBASE_WEB_API_KEY,
    FIREBASE_API_KEY: process.env.NEXT_FIREBASE_API_KEY,
    FIREBASE_AUTH_DOMAIN: process.env.NEXT_FIREBASE_AUTH_DOMAIN,
    FIREBASE_PROJECT_ID: process.env.NEXT_FIREBASE_PROJECT_ID,
    FIREBASE_STORAGE_BUCKET: process.env.NEXT_FIREBASE_STORAGE_BUCKET,
    FIREBASE_MESSAGING_SENDER_ID: process.env.NEXT_FIREBASE_MESSAGING_SENDER_ID,
    FIREBASE_APP_ID: process.env.NEXT_FIREBASE_APP_ID,
    FIREBASE_MEASUREMENT_ID: process.env.NEXT_FIREBASE_MEASUREMENT_ID,
  },
  images: {
    domains: ['k.kakaocdn.net'],
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  webpack(config){
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    })
    return config
  }
}

module.exports = nextConfig
