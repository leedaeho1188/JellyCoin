import { useAuth } from "@/components/login/hooks/useAuth";



const AuthPage = () => {

  useAuth();

  return (
    <>
      auth
    </>
  )

}

export default AuthPage;