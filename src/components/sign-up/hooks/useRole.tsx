import { RoleUnion } from "../types";
import { useSignUpState } from "@/recoil/sign-up/atom";


export const useRole = () => {
  const [signUpState, setSignUpState] = useSignUpState();

  const onChangeRole = (role:RoleUnion) => {
    setSignUpState(() => {
      return {
        ...signUpState,
        roleForm: {
          ...signUpState.roleForm,
          role,
        }
      }
    })
  }

  return {
    role: signUpState.roleForm.role,
    setRole:onChangeRole,
  }
}