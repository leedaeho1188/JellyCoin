
import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useSetRecoilState } from 'recoil';
import { useSetSignUpState } from '@/recoil/sign-up/atom';
import useDebounce from '@/hooks/useDebounce';

interface FormValues {
  username: string;
  nickname: string;
}

export const useUserNickname = () => {

  const setSignUpState = useSetSignUpState(); 

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
      username: '',
      nickname: '',
    }
  });

  const registerUserNickname = () => {
    const { username, nickname } = watch();
    setSignUpState((prev) => ({
      ...prev,
      username,
      nickname
    }));
  };

  useDebounce(registerUserNickname, 500);


  return {
    register,
    setValue,
    setError,
    watch,
    errors
  };
};

