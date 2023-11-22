import { Box, Button, ButtonGroup } from "@mui/material"
import { Role } from "../hooks/useSignUp"
import { Dispatch, SetStateAction } from "react";


interface Props {
  role: Role;
  setRole: Dispatch<SetStateAction<Role>>;
}

export const SelectRole = ({
  role,
  setRole
}:Props) => {

  const roleArray:{name:string, value:Role}[] = [
    {name: '학생', value: 'student'},
    {name: '선생님', value: 'teacher'}
  ]

  return (
    <Box>
      <ButtonGroup>
        {roleArray.map(({name, value}) => 
          <Button
            key={`role-button-${name}-${value}`}
            variant={role === value ? 'contained' : 'outlined'}
            onClick={() => setRole(value)}
          >
            {name}
          </Button>
        )}
      </ButtonGroup>
    </Box>
  )
}