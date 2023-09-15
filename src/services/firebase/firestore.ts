import { doc, getFirestore, setDoc } from "firebase/firestore";

export const postUser = async (url:string | null) => {
  const uid = localStorage.getItem('uid');
  if(!uid) return;

  const docData = {
    name: 'test',
    profileImage: url,
    coin: 0,
    createdAt: new Date(),
    groupId: null,
    authority: 'user',
  }

  const db = getFirestore();
  await setDoc(doc(db, "users", uid), docData);
  
}