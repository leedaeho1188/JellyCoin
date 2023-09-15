import { ImageFile } from "@/components/signup/useSignUp";
import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";
import { postUser } from "./firestore";


export const uploadImage = async (profileImage:ImageFile) => {
  if(!profileImage) return;
  const storage = getStorage();
  const storageRef = ref(storage, `images/profile/${profileImage.file.name}`);
  await uploadBytes(storageRef, profileImage.file)
    .then((snapshot) => {
      getDownloadURL(snapshot.ref).then((url) => {
        postUser(url);
      })
    })
}