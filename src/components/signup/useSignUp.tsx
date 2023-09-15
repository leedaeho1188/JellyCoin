import { convertHeicToJpg } from "@/utils/convertHeicToJpg";
import { useState } from "react";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { doc, getFirestore, setDoc } from "firebase/firestore";
import { uploadImage } from "@/services/firebase/storage";
import { postUser } from "@/services/firebase/firestore";

export interface ImageFile {
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
  
  const onSignUp = () => {
    if(profileImage) uploadImage(profileImage);
    else postUser(null);
  }

  return {
    onChangeFiles,
    profileImage,
    onSignUp
  }

}