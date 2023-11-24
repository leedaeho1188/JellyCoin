import { Box, Button, ButtonGroup } from "@mui/material"
import { RoleUnion } from "../types";
import { Dispatch, SetStateAction } from "react";


interface Props {
  role: RoleUnion;
  setRole: (role: RoleUnion) => void;
}

export const SelectRole = ({
  role,
  setRole
}:Props) => {

  const roleArray:{name:string, value:RoleUnion}[] = [
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