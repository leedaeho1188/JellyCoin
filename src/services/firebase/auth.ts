import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from "firebase/auth";

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
        signUpFirebaseAuth(email, password);
      }
    })
}

export const signUpFirebaseAuth = async(email:string, password: string) => {
  const auth = getAuth();
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      localStorage.setItem('uid', user.uid);
      window.location.href = '/signup';
    })
}