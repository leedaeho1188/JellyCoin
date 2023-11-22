import { useState } from "react";
import { RoleUnion } from "../types";


export const useRole = () => {

  const [role, setRole] = useState<RoleUnion>('student');

  return {
    role,
    setRole,
  }
}