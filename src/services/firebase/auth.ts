import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from "firebase/auth";


//DESCRIBE: FirebaseAuth 로그인
export const signInFirebaseAuth = async(email:string, password: string) => {
  const auth = getAuth();
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      localStorage.setItem('uid', user.uid);
    })
    .catch((error) => {
      const errorMessage = error.message;
      if(errorMessage === 'Firebase: Error (auth/user-not-found).'){
        // signUpFirebaseAuth(email, password);
        //DESCRIBE: 유저 정보가 없을시에 signup 페이지로 이동
        window.location.href = '/sign-up';
      }
    })
}

//DESCRIBE: FirebaseAuth 회원가입
export const signUpFirebaseAuth = async(email:string, password: string) => {
  const auth = getAuth();
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // const user = userCredential.user;
      // localStorage.setItem('uid', user.uid);
      // window.location.href = '/signup';
    })
}