import { kakao } from "@/constants/kakao";
import Image from "next/image";


const LoginPage = () => {

  return (
    <a href={`${kakao.AUTHORIZE_URL}?client_id=${kakao.API_KEY}&redirect_uri=${kakao.REDIRECT_URI}&response_type=code`}>
      <Image 
        src="https://k.kakaocdn.net/14/dn/btroDszwNrM/I6efHub1SN5KCJqLm1Ovx1/o.jpg"
        width={300}
        height={50}
        alt="카카오 로그인 버튼" 
      />
    </a>
  )

}

export default LoginPage;