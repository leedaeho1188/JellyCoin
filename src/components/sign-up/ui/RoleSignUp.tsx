import { Box } from "@mui/material"
import { RoleStudent, RoleTeacher, SelectRole } from "."
import { useRole } from "../hooks/useRole"


export const RoleSignUp = () => {

  const {
    role,
    setRole,
  } = useRole();

  return (
    <Box sx={{
      display:'flex',
      flexDirection: 'column',
      gap: '12px'
    }} > 
      <SelectRole
        role={role}
        setRole={setRole}
      />
      {role === 'student'
        ? <RoleStudent/>
        : <RoleTeacher/>
      }
    </Box>
  )
}