import { RedirectUri, RestApiKey } from "@/constants/kakao";
import Image from "next/image";


const LoginPage = () => {

  return (
    <a href={`https://kauth.kakao.com/oauth/authorize?client_id=${RestApiKey}&redirect_uri=${RedirectUri}&response_type=code`}>
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