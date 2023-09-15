import { convertHeicToJpg } from "@/utils/convertHeicToJpg";
import { useState } from "react";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { doc, getFirestore, setDoc } from "firebase/firestore";

interface ImageFile {
  file: File;
  objectUrl: string;
}

export const useSignUp = () => {

  const [profileImage, setProfileImage] = useState<ImageFile>();

  const onChangeFiles = async (e: React.ChangeEvent<HTMLInputElement>) => {
   const file = e.target.files?.[0];

   if(file) {
     const convertedFile = await convertHeicToJpg(file);
     const image = {
      file: convertedFile,
      objectUrl: URL.createObjectURL(convertedFile)
     }
     setProfileImage(image);
   }
  }
  
  const uploadImage = async () => {
    if(!profileImage) return;
    const storage = getStorage();
    const storageRef = ref(storage, `images/profile/${profileImage.file.name}`);
    await uploadBytes(storageRef, profileImage.file)
      .then((snapshot) => {
        console.log(snapshot);
        getDownloadURL(snapshot.ref).then((url) => {
          console.log('file url', url);
          addUser(url);
        })
      })
  }

  const addUser = async (url:string | null) => {
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
    await setDoc(doc(db, "users", uid), docData).then((res) => {
      console.log(res);
    })
    
  }

  return {
    onChangeFiles,
    profileImage,
    uploadImage
  }

}