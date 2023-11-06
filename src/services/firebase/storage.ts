import { ImageFile } from "@/components/signup/hooks/useSignUp";
import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";
import { postUser } from "./firestore";


export const uploadImage = async (profileImage:ImageFile) => {
  if(!profileImage) return null;
  const storage = getStorage();
  const storageRef = ref(storage, `images/profile/${profileImage.file.name}`);
  const result = await uploadBytes(storageRef, profileImage.file)
    .then((snapshot) => {
      const data = getDownloadURL(snapshot.ref).then((url) => {
        return url;
      })
      return data;
    })
  return result;
}