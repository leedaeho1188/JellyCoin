import { convertHeicToJpg } from "@/utils/convertHeicToJpg";
import { useCallback, useEffect, useMemo, useState } from "react";
import { uploadImage } from "@/services/firebase/storage";
import { ImageFile } from "../types";
import { set, useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useSignUpState } from "@/recoil/sign-up/atom";

type BtnState = 'disabled' | 'enable';

export const useSignUp = () => {

  const [profileImage, setProfileImage] = useState<ImageFile>();

  const [signUpState, setSignUpState] = useSignUpState();

  useEffect(() => {
    console.log(signUpState, 'signUpState');
  }, [signUpState])

  

  /**
   * 버튼 활성화 조건
   * 1. username required & 10자 이내
   * 2. nickname required & 10자 이내
   * 3. nickname 중복확인
   * 4. 
   * 5. role이 student일 경우 그룹id가 있어야 한다.
   */
  const buttonState:BtnState = useMemo(() => {
    if(!signUpState.roleForm.isRoleFormValid) return 'disabled';
    if(!signUpState.userNicknameForm.isUserNicknameValid) return 'disabled';
    
    return 'enable'
  }, [
    signUpState.roleForm.isRoleFormValid,
    signUpState.userNicknameForm.isUserNicknameValid,
  ])
  
  const onChangeFiles = useCallback(async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    if(file) {
      const convertedFile = await convertHeicToJpg(file);
      const image = {
        file: convertedFile,
        objectUrl: URL.createObjectURL(convertedFile)
      }
      setSignUpState((prev) => ({
        ...prev,
        profileImg: image,
      }));
    }
  }, []);

  /**
   * 회원가입 버튼 클릭시
   * 1. 프로필 이미지 업로드
   * 2. 유저 정보 업로드 (username, profileImageUrl, role)
   * 3. role이 teacher일 경우 그룹코드 업로드 또는 그룹 생성
   * 4. role이 student일 경우 그룹id 업로드
   * 5. 회원가입 완료
   */
  const onSignUp = async () => {
    const url = profileImage ? await uploadImage(profileImage) : null;
    // postUser(name, url);
  }

  

  return {
    profileImage: signUpState.profileImg,
    buttonState,

    onChangeFiles,
    onSignUp,
  }

}