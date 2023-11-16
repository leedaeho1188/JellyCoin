import { Box, Button, FormControl, TextField } from "@mui/material"
import { useState } from "react"
import { RTCreateGroup } from ".";
import { RTWriteGroupCode } from "./RTWriteGroupCode";


export const RoleTeacher = () => {

  const [isNewGroup, toggleNewGroup] = useState<boolean>(false);

  return (
    <Box>
      {isNewGroup 
        ? <RTCreateGroup
            toggleNewGroup={toggleNewGroup}
          />
        : <RTWriteGroupCode
            toggleNewGroup={toggleNewGroup}
          />
      }
    </Box>
  )
}