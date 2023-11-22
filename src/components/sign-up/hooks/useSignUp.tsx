import { convertHeicToJpg } from "@/utils/convertHeicToJpg";
import { useCallback, useEffect, useMemo, useState } from "react";
import { uploadImage } from "@/services/firebase/storage";
import { ImageFile } from "../types";
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

type BtnState = 'disabled' | 'enable';
interface FormValues {
  username: string;
  nickname: string;
}

export const useSignUp = () => {

  const [profileImage, setProfileImage] = useState<ImageFile>();

  const schema = yup
    .object()
    .shape({
      username: yup
        .string()
        .required('이름을 입력해주세요.')
        .max(10, '이름은 10자 이내로 작성해주세요.'),
      nickname: yup
        .string()
        .required('닉네임을 입력해주세요.')
        .max(10, '닉네임은 10자 이내로 작성해주세요.')
    });

  const {
    register,
    setValue,
    setError,
    watch,
    formState: { errors }
  } = useForm<FormValues>({
    resolver: yupResolver(schema),
    mode: 'onChange',
    defaultValues: {
      username:'',
      nickname:'',
    }
  });

  

  /**
   * 버튼 활성화 조건
   * 1. username required & 10자 이내
   * 2. nickname required & 10자 이내
   * 3. nickname 중복확인
   * 4. 
   * 5. role이 student일 경우 그룹id가 있어야 한다.
   */
  const buttonState:BtnState = useMemo(() => {
    if(errors.username) return 'disabled';
    if(errors.nickname) return 'disabled';
    
    return 'enable'
  }, [
    errors.nickname, 
    errors.username
  ])
  
  const onChangeFiles = useCallback(async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    if(file) {
      const convertedFile = await convertHeicToJpg(file);
      const image = {
        file: convertedFile,
        objectUrl: URL.createObjectURL(convertedFile)
      }
      setProfileImage(image);
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
    profileImage,
    buttonState,

    onChangeFiles,
    onSignUp,
    register,
  }

}