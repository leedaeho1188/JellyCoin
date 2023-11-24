import { SignUpForm } from '@/components/sign-up/types';
import { ATOM_KEY } from '@/constants/atom';
import { atom, useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';


export const singUpState = atom<SignUpForm>({
  key: ATOM_KEY.SIGN_UP,
  default: {
    roleForm: {
      role: 'student',
      isRoleFormValid: false,
    },
    userNicknameForm: {
      username: '',
      nickname: '',
      isUserNicknameValid: false,
    }
  }
})

export const useSignUpState = () => {
  return useRecoilState(singUpState);
}

export const useSetSignUpState = () => {
  return useSetRecoilState(singUpState);
}

export const useSignUpValue = () => {
  return useRecoilValue(singUpState);
}